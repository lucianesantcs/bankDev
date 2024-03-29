import { Router } from "express";
import UsersController from "./controllers/UsersController";

const routes = Router();

routes.get("/users", UsersController.index);
routes.put("/users/:id", UsersController.update);
routes.delete("/users/:id", UsersController.delete);
routes.post("/users", UsersController.create);

export default routes;
