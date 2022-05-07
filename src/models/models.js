import Sequelize from "sequelize";

import { connection } from "../database/db.js";

export const models = connection.define(
  "oculos",
  {
    id: {
      type: Sequelize.INTEGER,
      autoIncrement: true,
      allowNull: false,
      primaryKey: true,
    },
    name: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    collor: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    lens_type: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    image: {
      type: Sequelize.STRING,
      allowNull: false,
    },
  },
  {
    freezeTableName: true,
    timestamps: false,
    createdAt: false,
    updatedAt: false,
  },
);

const initTable = async () => {
  await models.sync()
}

initTable()