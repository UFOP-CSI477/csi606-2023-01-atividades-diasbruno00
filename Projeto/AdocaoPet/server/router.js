import express from 'express'
const router = express.Router()


import ControllerPet from './src/controller/controllerPet.js'
import ControllerUsuario from './src/controller/controllerUsuario.js'
import ControllerAdocao  from './src/controller/controllerAdocao.js'

const controllerPet = new ControllerPet()
const controllerUsuario = new ControllerUsuario()
const controllerAdocao = new ControllerAdocao()



// rota Pet
router.get('/pet',controllerPet.recuperarTodos)
router.post('/pet',controllerPet.salvar)
router.get('/pet/:id',controllerPet.recuperarPetPorId)


// rota usuario
router.post('/usuario', controllerUsuario.salvar)
router.get('/usuario/:id', controllerUsuario.recuperarPorId)
router.get('/usuarios',controllerUsuario.recuperarTodos)

// rota adocao

router.get('/adocao',controllerAdocao.recuperarTodos)
router.post('/adocao', controllerAdocao.salvar)
router.delete('/adocao/:id',controllerAdocao.excluirAdocaoPorId)


export default  router