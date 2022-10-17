import { Request, Response } from "express";
import connectDB from "../database/connection";
import Users from "../models/Users";

export default {
  async index(request: Request, response: Response) {
    const usersRepository = connectDB.getRepository(Users);
    const users = await usersRepository.find();

    return response.json(users);
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
