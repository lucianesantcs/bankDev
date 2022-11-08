import express from "express";
import "express-async-errors";
import errorHandler from "./errors/handler";
import routes from "./routes";
import cors from "cors";

const app = express();
app.use(express.json());
app.use(cors())
app.use(routes);
app.use(errorHandler);

app.listen(3333);
