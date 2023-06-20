import { Produtos } from "../model/Produtos";
import {Request, Response} from "express";
export const getProdutos  = (req: Request, res: Response) => {

     const produto = new Produtos('rua aleatoria 90','31','padre faria','0987','888888','909090');

     res.json({produto})
};


