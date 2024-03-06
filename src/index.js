import app from "./app.js";
import { PORT } from "./config.js";
import { sequelizeAcs, sequelizeNEPS } from "./database/database.js";



async function main() {
  try {
    // await sequelizeAcs.sync();
    // await sequelizeNEPS.sync();
    console.log("connection has been established successfully");
    app.listen(PORT || 3000, () => {
      console.log(`Server running on port ${PORT}`);
    });
  } catch (error) {
    console.log(error);
    console.error("Unable  to connect to the database");
  }
}

main();
