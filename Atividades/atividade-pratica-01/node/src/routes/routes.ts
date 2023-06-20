import express, { Request, Response } from 'express';
const router = express.Router();

import { getProdutos } from "../controllers/ControllersProdutos"

router.get('/produtos', getProdutos);


export default router