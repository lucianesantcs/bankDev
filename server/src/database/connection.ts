import { DataSource } from "typeorm";
import { createUser1666028758103 } from "./migrations/1666028758103-create_user";

const connectDB =  new DataSource({
    type: "sqlite",
    database: "./src/database/database.sqlite",
    migrations: [createUser1666028758103]
});

connectDB
    .initialize()
    .then(() => {
        console.log(`Data Source has been initialized`);
    })
    .catch((err) => {
        console.error(`Data Source initialization error`, err);
    })

export default connectDB;