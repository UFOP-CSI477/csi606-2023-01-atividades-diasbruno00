import express from 'express';
const router = express.Router();

import ControllerProduto from "../controller/Produto"

const controllerProduto = new ControllerProduto()

router.get('/produtos', controllerProduto.recuperarTodosProdutos)
router.get('/produto/:id',controllerProduto.recuperarProdutoPorId)
router.get('/produto/descrisao/:descrisao',controllerProduto.recuperarProdutoPorDescrisao)
router.post('/produto', controllerProduto.salvarProduto)
router.delete('/delete/produto/:id',controllerProduto.excluirProduto)
router.put('/update/produto/:id',controllerProduto.atualizarProduto)

export default router