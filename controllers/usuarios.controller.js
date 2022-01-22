import { request, response } from "express";

export const getUsuarios = (req = request, res = response) => {

  const query = req.query;

  res.json({
    msg: 'get API - Controlador',
    query
  });
}

export const postUsuarios = (req = request, res = response) => {

  const body = req.body;

  res.status(201).json({
    msg: 'post API - Controlador',
    body
  });
}

export const putUsuarios = (req = request, res = response) => {

  const { id } = req.params;

  res.json({
    msg: 'put API - Controlador',
    id
  });
}

export const patchUsuarios = (req = request, res = response) => {
  res.json({
    msg: 'patch API - Controlador'
  });
}

export const deleteUsuarios = (req = request, res = response) => {
  res.json({
    msg: 'delete API - Controlador'
  });
}

