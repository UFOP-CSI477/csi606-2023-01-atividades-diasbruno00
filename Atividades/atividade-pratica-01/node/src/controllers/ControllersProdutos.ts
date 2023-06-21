import { Produtos } from "../model/Produtos";
import {request, Request, Response} from "express";
import {ProdutoDAO} from "../database/ProdutoDAO";

export const getProdutos  = async (req: Request, res: Response) => {
     const banco = new ProdutoDAO()

     try{
         const listaDeProdutos = await  banco.listaDeProdutos()
          console.log(listaDeProdutos)

          res.json({listaDeProdutos})

     }catch (e){
          console.log(e)
     }

};

export const setProdutos = (req: Request, res: Response) =>{

}


