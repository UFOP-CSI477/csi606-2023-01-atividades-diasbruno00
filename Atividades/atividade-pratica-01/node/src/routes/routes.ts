import express, { Request, Response } from 'express';
const router = express.Router();

import { getProdutos, setProdutos } from "../controllers/ControllersProdutos"

router.get('/produtos', getProdutos);
router.post('produtos/cadastro', setProdutos)

export default router