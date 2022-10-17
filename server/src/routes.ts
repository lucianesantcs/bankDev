import { Router } from 'express';
import connectDB from "./database/connection";
import Users from "./models/Users";

const routes = Router();

routes.post("/users", async (request, response) => {
  const { name, username, password, email, birthdate } = request.body;
  const usersRepository = connectDB.getRepository(Users);
  const user = usersRepository.create({
    name,
    username,
    password,
    email,
    birthdate,
  });

  await usersRepository.save(user);

  return response.status(201).json(user);
});

export default routes;