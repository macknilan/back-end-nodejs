const express = require('express');
const actualizar= require('../../views/usuarios/actualizar');
const consultar_todo= require('../../views/usuarios/consultar');
const insertar= require('../../views/usuarios/insertar');
const router= express.Router();

router.get('/', async (req, res) => {
    var datos=await consultar_todo.consultar();
    res.send(datos)
})
router.get('/:id', async (req, res) => {
    var datos=await consultar_todo.consultarById(req.params.id);
    res.send(datos)
})
router.post('/', async (req, res) => {
    var datos=await insertar.insertar(req.body);
    res.send(datos)
})
router.put('/:id', async (req, res) => {
    var datos=await actualizar.actualizar(req.params.id,req.body);
    res.send(datos)
})
module.exports=router;