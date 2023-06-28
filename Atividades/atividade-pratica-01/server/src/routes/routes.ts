import express from 'express';
const router = express.Router();

import { getProdutos, setProdutos, excluirProduto, updateProduto} from "../controller/ControllersProdutos"

router.get('/produtos', getProdutos)
router.post('/produtos', setProdutos)
router.delete('/delete/produto/:id',excluirProduto)
router.put('/update/produto/:id',updateProduto)

export default router