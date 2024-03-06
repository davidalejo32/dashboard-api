// librerias
import { Op, literal } from "sequelize";
import { getTechnicalUsersInfo } from "../../libs/getTechnicalUsersInfo.js";

// models
import GlpiTicket from "../../models/acs-models/glpi_tickets.js";
import GlpiUser from "../../models/acs-models/glpi_users.js";
import GlpiProfilesUsers from "../../models/acs-models/glpi_profiles_users.js";
import GlpiTicketUser from "../../models/acs-models/glpi_tickets_users.js";

export const getTechnicians = async (req, res) => {
  try {
    // usuarios a excluir
    const excludedTechnicianIds = [67, 134, 72, 66, 65, 63, 64, 61, 166];

    // traigo todos los tecnicos
    const usersProfile = await GlpiProfilesUsers.findAll({
      where: {
        profiles_id: 6,
      },
    });

    const technicians = await getTechnicalUsersInfo(
      usersProfile,
      {
        GlpiTicket,
        GlpiUser,
        GlpiProfilesUsers,
        GlpiTicketUser,
      },
      excludedTechnicianIds
    );

    res.json({
      message: "Technicians",
      technicians,
    });
  } catch (error) {
    res.json({ error });
  }
};
