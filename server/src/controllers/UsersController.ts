import { Request, Response } from "express";
import connectDB from "../database/connection";
import Users from "../models/Users";

export default {
  async index(request: Request, response: Response) {
    const usersRepository = connectDB.getRepository(Users);
    const users = await usersRepository.find();

    return response.json(users);
  },

  async update(request: Request, response: Response) {
    const { id } = request.params;
    const { name, username, password, email, birthdate } = request.body;
    const usersRepository = connectDB.getRepository(Users);

    await usersRepository
      .createQueryBuilder()
      .update(Users)
      .set({ name, username, password, email, birthdate })
      .where("id = :id", { id })
      .execute();

    return response.status(202).json({
      message: "User updated with success",
    });
  },

  async create(request: Request, response: Response) {
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
  },
};
