import express, { Request, Response } from 'express';
const router = express.Router();

import { getProdutos, setProdutos } from "../controllers/ControllersProdutos"

router.get('/produtos', getProdutos);
router.post('/produtos', setProdutos)

export default router