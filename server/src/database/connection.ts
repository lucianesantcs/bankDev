import { DataSource } from "typeorm";

const connectDB =  new DataSource({
    type: "sqlite",
    database: "./src/database/database.sqlite"
})

connectDB
    .initialize()
    .then(() => {
        console.log(`Data Source has been initialized`);
    })
    .catch((err) => {
        console.error(`Data Source initialization error`, err);
    })

export default connectDB;