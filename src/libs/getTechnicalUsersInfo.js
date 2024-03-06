import { Op, literal } from "sequelize";

export async function getTechnicalUsersInfo(usersProfile, models, excludedTechnicianIds) {
  const technicians = [];
  // por cada usuairo con perfil tecnico traer la informacion y contar los casos
  for (const profile of usersProfile) {
    // obtener la iformacion del usuario
    const technician = await models.GlpiUser.findByPk(profile.users_id);
    if (technician.id == 4) continue;

    // consultar los casos por este tecnico
    const ticket = await models.GlpiTicketUser.findAll({
      where: {
        users_id: technician.id,
      },
    });

    // Obtener el primer y último día del mes actual
    const currentDate = new Date();
    const firstDayOfMonth = new Date(
      currentDate.getFullYear(),
      currentDate.getMonth(),
      1
    );
    const lastDayOfMonth = new Date(
      currentDate.getFullYear(),
      currentDate.getMonth() + 1,
      0
    );

    // Formatear las fechas al formato esperado por MySQL (YYYY-MM-DD HH:MM:SS)
    const formattedFirstDayOfMonth = `${firstDayOfMonth.getFullYear()}-${(
      firstDayOfMonth.getMonth() + 1
    )
      .toString()
      .padStart(2, "0")}-${firstDayOfMonth
      .getDate()
      .toString()
      .padStart(2, "0")} 00:00:00`;
    const formattedLastDayOfMonth = `${lastDayOfMonth.getFullYear()}-${(
      lastDayOfMonth.getMonth() + 1
    )
      .toString()
      .padStart(2, "0")}-${lastDayOfMonth
      .getDate()
      .toString()
      .padStart(2, "0")} 23:59:59`;

    // consultar los casos por este tecnico solucionados en el mes actual
    const ticketSolveted = await models.GlpiTicket.findAll({
      where: {
        id: ticket.map((ticket) => ticket.tickets_id), // Obtener los IDs de los casos
        status: 5,
        [Op.and]: [
          literal(
            `DATE(solvedate) BETWEEN '${formattedFirstDayOfMonth}' AND '${formattedLastDayOfMonth}'`
          ),
        ],
      },
    });

    const resolvedCases = ticketSolveted.map((ticket) => ticket.id);

    // agregar la informacion al array
    technicians.push({
      id: technician.id,
      name: `${technician.firstname} ${technician.realname}`,
      cases: resolvedCases.length,
    });
  }

  // elimino los elementos duplicados
  const filterUniqueById = technicians.filter(
    (tec, index, self) => index === self.findIndex((t) => t.id === tec.id)
  );


  // listado de solo tecnicos
  const cleanTechnicians = filterUniqueById.filter(
    (objeto) => !excludedTechnicianIds.includes(objeto.id)
  );


  return cleanTechnicians
}
