import {Produto} from "../model/Produto";
import {Request, Response} from "express";
import {ProdutoDAO} from "../database/ProdutoDAO";

export const getProdutos = async (req: Request, res: Response) => {

    const banco = new ProdutoDAO()

    let lista: Produto

    try {

        lista = await banco.listaDeProdutos()
        
    } catch (e) {
        console.log(e)
        res.json({sucesso: 'false'})
    }

    res.json({sucesso: 'true'})

}

export const setProdutos = (req: Request, res: Response) => {

    const produto = new Produto('Play 9', 5000)


    const produtoDao = new ProdutoDAO()

    produtoDao.inserirNoBD(produto)

    res.json({sucesso: 'true'})


}


