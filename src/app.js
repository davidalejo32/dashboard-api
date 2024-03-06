import express from "express";
import "dotenv/config";

// routes
import ticketsRoutes from "./routes/acs-routes/tickets.routes.js";
import technicianRoutes from "./routes/acs-routes/technician.routes.js";

import ticketsRoutesNeps from "./routes/neps-routes/tickets.routes.js"
import technicianRoutesNeps from "./routes/neps-routes/technician.routes.js"


const app = express();

app.use(express.json());
app.use("/api/acs", ticketsRoutes);
app.use("/api/acs", technicianRoutes);

app.use("/api/neps", ticketsRoutesNeps);
app.use("/api/neps", technicianRoutesNeps);

export default app;
