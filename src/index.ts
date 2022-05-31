import "reflect-metadata";
import { createConnection } from "typeorm";
import app from "./app";
import { config } from "dotenv";

config();
createConnection()
  .then(async (connection) => {
    const PORT = process.env.PORT || 3000;
    app.listen(PORT, () =>
      console.log(`App runing on  http://localhost:${PORT}`)
    );
  })
  .catch((error) => console.log(error));
