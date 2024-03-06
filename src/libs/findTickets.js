import { htmlToText, convert } from "html-to-text";


export async function findTikets(tickets, models, priorities ) {
  return Promise.all(
    // por cada ticket busca al tecnico y prepara la respuesta 
    tickets.map(async (ticket) => {
      // buca el primer ticket  con el tipo 2 y busca al usuario
      const tiketUser = await models.GlpiTicketUser.findOne({
        where: {
          tickets_id: ticket.id,
          type: 2,
        },
      });

      
      let technician = null;

      // busca al tecnico asignado al ticket 
      if (tiketUser) {
        technician = await models.GlpiUser.findByPk(tiketUser.users_id);
      }

      // guarda la prioridad del ticket
      const priority = priorities[ticket.priority];

      // busca el nombre el usuario que creo el ticket
      const applicant = await models.GlpiUser.findByPk(ticket.users_id_recipient);

      // limpiando la descripcion
      const textContent = convert(
        htmlToText(ticket.content, { wordwrap: 13000 })
      );

      // prepara la respuesta si hay un tecnico asignado al caso
      if (technician) {
        return {
          id: ticket.id,
          date: ticket.date,
          priority: priority.type,
          user: `${applicant.firstname} ${applicant.realname}`,
          description: textContent,
          technician: `${technician.firstname} ${technician.realname}`,
          time: priority.time,
          status: true,
        };
      }
      
      // prepara la respuesta si no hay un tecnico asignado al caso

      return {
        id: ticket.id,
        date: ticket.date,
        priority: priority.type,
        user: `${applicant.firstname} ${applicant.realname}`,
        description: textContent,
        time: priority.time,
        status: false,
      };
    })
  );
}

