// librerias
import { getTechnicalUsersInfo } from "../../libs/getTechnicalUsersInfo.js";

// models
import GlpiTicket from "../../models/neps-models/glpi_tickets.js";
import GlpiUser from "../../models/neps-models/glpi_users.js";
import GlpiProfilesUsers from "../../models/neps-models/glpi_profiles_users.js";
import GlpiTicketUser from "../../models/neps-models/glpi_tickets_users.js";

export const getTechnicians = async (req, res) => {
  try {
    const excludedTechnicianIds = [34, 35, 40, 44, 215, 15, 228, 293, 566, 603];

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
    res.json({ error: error.message });
  }
};
