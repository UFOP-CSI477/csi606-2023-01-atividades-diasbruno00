import {Produto} from "../model/Produto";
import {Request, Response} from "express";
import {ProdutoDAO} from "../database/ProdutoDAO";

const banco = new ProdutoDAO()

export const getProdutos = async (req: Request, res: Response) => {


    let listaDeProdutos: Produto[]
    let produto
    try {

       listaDeProdutos = await banco.listaDeProdutos()
       produto =  listaDeProdutos.filter(lista => lista.descrisao == 'Play 20')
        
    } catch (e) {
        console.log(e)
        res.json({sucesso: 'false'})
    }

    res.json(produto)

}

export const setProdutos = (req: Request, res: Response) => {

    const produto = new Produto('Play 9', 5000)

    banco.inserirNoBD(produto)

    res.json({sucesso: 'true'})


}

export const excluirProduto = (req: Request, res: Response) => {

    const id = parseInt( req.params.id )
    banco.deleteProduto(id)
    res.json({excluido: 'true'})
}


export const updateProduto = (req: Request, res: Response) =>{
    const id = parseInt( req.params.id )
    const produto = new Produto('Play 60', 20000)
    banco.updateProduto(produto, id)
    res.json({atualizado: 'true'})
}