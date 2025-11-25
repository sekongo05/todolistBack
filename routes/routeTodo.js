const express= require('express')
const Router= express.Router()


const controller = require('../controllers/controllerTodo')


Router.post('/', controller.addListe)

Router.get('/', controller.mesTaches)

Router.delete('/:id', controller.suppTaches)


module.exports =Router;