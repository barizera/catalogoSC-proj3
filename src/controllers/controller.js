import express from "express";
import { models } from "../models/models.js";
const order_by_name = { order: [["name", "ASC"]] };

let message = "";
let type = "";

export const getAll = async (req, res) => {
  try {
    setTimeout(() => {
      message = "";
      type = "";
    }, 1000);

    const modelos_oculos = await models.findAll(order_by_name);
    res.render("index", {
      modelos_oculos,
      oculosPut: null,
      oculosDel: null,
      oculosDetails: null,
      message,
      type,
    });
  } catch (err) {
    res.status(500).send({ err: err.message });
  }
};

export const register = (req, res) => {
  try {
    res.render("register", { type, message });
  } catch (err) {
    res.status(500).send({ err: err.message });
  }
};

export const create = async (req, res) => {
  try {
    const oculos = req.body;

     if (!oculos.name || !oculos.collor || !oculos.lens_type || !oculos.image) {
      message = "Preencha todos os campos para poder cadastrar!";
      type = "danger";
      return res.redirect("/register");
    }
    await models.create(oculos);
    message = "Óculos adicionado ao nosso catálogo ";
    type = "success";
    res.redirect("/");
  } catch (err) {
    res.status(500).send({ err: err.message });
  }
};

export const getById = async (req, res) => {
  try {
    const method = req.params.method;
    const modelos_oculos = await models.findAll(order_by_name);
    const oculos = await models.findByPk(req.params.id);

    if (method == "put") {
      res.render("index", {
        modelos_oculos,
        oculosPut: oculos,
        oculosDel: null,
        oculosDetails: null,
        message,
        type,
      });
    } else if (method == "details") {
      res.render("index", {
        modelos_oculos,
        oculosPut: null,
        oculosDel: null,
        oculosDetails: oculos,
        message,
        type,
        oculos,
      });
    } else {
      res.render("index", {
        modelos_oculos,
        oculosPut: null,
        oculosDel: oculos,
        oculosDetails: null,
        message,
        type,
      });
    }
  } catch (err) {
    res.status(500).send({ err: err.message });
  }
};

export const update = async (req, res) => {
  try {
    const oculos = req.body;
    await models.update(oculos, { where: { id: req.params.id } });
    message = "Óculos atualizado com sucesso ao catálogo ";
    type = "success";
    res.redirect("/");
  } catch (err) {
    res.status(500).send({ err: err.message });
  }
};

export const remove = async (req, res) => {
  try {                     //where id = id que vem no req
    await models.destroy({ where: { id: req.params.id } });
    message = "Óculos removido com sucesso ao catálogo ";
    type = "success";
    res.redirect("/");
  } catch (err) {
    res.status(500).send({ err: err.message });
  }
};

export const marca = (req,res) => {
  try {
    res.render('marca')
  }catch (err) {
    res.status(500).send({ err: err.message });
  }
    
}