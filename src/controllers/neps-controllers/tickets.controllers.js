// librerias
import { findTikets } from "../../libs/findTickets.js";
// Models
import GlpiUser from "../../models/neps-models/glpi_users.js";
import GlpiTicket from "../../models/neps-models/glpi_tickets.js";
import GlpiTicketUser from "../../models/neps-models/glpi_tickets_users.js";

const priorities = {
  1: {
    type: "Muy baja",
    time: "5h",
  },
  2: {
    type: "Baja",
    time: "4h",
  },
  3: {
    type: "Mediana",
    time: "3h",
  },
  4: {
    type: "Alta",
    time: "2h",
  },
  5: {
    type: "Muy Urgente",
    time: "2h",
  },
};

export const getTickets = async (req, res) => {
  try {
    // el 1 y 2 es el no solucionado
    // traigo todos los tickets que no estan solucionados en las entidades de sistemas
    const tickets = await GlpiTicket.findAll({
      where: {
        status: [1, 2],
        entities_id: [4, 5, 6],
        is_deleted: false,
      },
    });

    // trae todos los tickets con type 2
    const response = await findTikets(
      tickets,
      {
        GlpiUser,
        GlpiTicket,
        GlpiTicketUser,
      },
      priorities
    );

    res.json({
      message: "tickets",
      tickets: response,
    });
  } catch (error) {
    res.json({ error: error.message });
  }
};
