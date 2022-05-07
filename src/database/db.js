import Sequelize from "sequelize";
import dotenv from "dotenv";

dotenv.config();

export const connection = new Sequelize (
  process.env.DB_BASE,
    process.env.DB_USER,
    process.env.DB_PASS,
    {
        host: process.env.DB_HOST,
        port: 5432,
        dialect: "postgres",
    }
    // 'postgres://scstore_user:puXH4NqbQJf9h4FxIUdQJVkvCT51KSGn@dpg-c9qt3cn5f999i81rp0ug-a/scstore',
    // {
    //     dialect: 'postgres',
    //     dialectOptions: {
    //         ssl: {
    //             require: true,
    //             rejectUnauthorized: false
    //         }
    //     }
    // }
)   
  
    
