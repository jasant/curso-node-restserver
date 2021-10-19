const{response, request} = require('express');


const usersGet = (req = request, res = response) => {

  const {nombre,edad,hobbie= ''} = req.query;

    res.json({
        msg: 'get API - controlador',
        nombre,
        edad,
        hobbie
    });
  }

const userPut = (req, res) => {
  const id = req.params.id;

    res.status(200).json({
        msg: 'put API - controlador',
        id
    });
  }

const userPost = (req, res) => {

    const {nombre, edad} = req.body;

    res.status(201).json({
        msg: 'post API - controlador',
        nombre,
        edad
    });

}

  const userDelete = (req, res) => {
    res.json({
        msg: 'delete API - controlador'
    });
  }

const userPatch = (req, res) => {
    res.json({
        msg: 'patch API - controlador'
    });
  }

  module.exports= {
      usersGet,
      userPut,
      userPost,
      userDelete,
      userPatch
  }