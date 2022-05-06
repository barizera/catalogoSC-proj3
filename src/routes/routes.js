import express from "express";
import { Sequelize } from "sequelize";
import {
  getAll,
  register,
  create,
  getById,
  update,
  remove,
  marca,
} from "../controllers/controller.js";

export const routes = express.Router();
routes.get("/", getAll);
routes.get("/register", register);
routes.post("/register", create);
routes.get("/getById/:id/:method", getById);
routes.post("/update/:id", update);
routes.get("/remove/:id", remove);
routes.get("/marca", marca);
