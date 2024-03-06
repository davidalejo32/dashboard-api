import { Router } from "express";
import { getTechnicians } from "../../controllers/neps-controllers/technician.controllers.js";

const router = Router();

router.get("/technicians", getTechnicians)


export default router;
