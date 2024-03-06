import { Router } from "express";
import { getTickets } from "../../controllers/acs-controllers/tickets.controllers.js";

const router = Router();

router.get("/tickets", getTickets);


export default router;
