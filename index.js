import express from "express";
import path from "path";

import {routes} from "./src/routes/routes.js"

const app = express();
const __dirname = path.resolve(path.dirname(""));


app.set("view engine", "ejs");
app.use(express.static(path.join(__dirname, "public")));

app.use(express.urlencoded({ extended: true })); //a info vai pro body por conta do extended:true
app.use(express.json()); //converter para json o que o user envia para o servidor
app.use(routes)

//Criando uma porta para o servidor
const port = process.env.PORT || 3000
app.listen(port, () => {
  console.log(`Rodando servidor na porta http://localhost:${port}.`);
});