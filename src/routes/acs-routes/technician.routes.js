import { Router } from "express";
import { getTechnicians } from "../../controllers/acs-controllers/technician.controllers.js";

const router = Router();

router.get("/technicians", getTechnicians)


export default router;
