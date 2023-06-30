import { Produto } from "../model/Produto";
import { Request, Response } from "express";
import { ProdutoDAO } from "../database/ProdutoDAO";

export default class ControllerProduto {

    private bancoProduto

    constructor() {
        this.bancoProduto = new ProdutoDAO()
    }


    public recuperarTodosProdutos = async (req: Request, res: Response) => {


        let listaDeProdutos
        try {

            listaDeProdutos = await this.bancoProduto.listaDeProdutos()


        } catch (e) {
            console.log(e)
            res.json({ erro: 'falha ao enviar a lista de Produtos' })
        }

        res.json(listaDeProdutos)


    }

    public recuperarProdutoPorId = async (req: Request, res: Response) => {
        let produto
        let id
        try {
            id = parseInt(req.params.id)
            produto = await this.bancoProduto.buscaProdutoPorId(id)
            console.log(produto)
            console.log('imprimiu')
        } catch (e) {
            console.log(e)
            res.json({ erro: `erro ao recuperar o produto do id ${id}` })
        }

        res.json(produto)

    }
    public recuperarProdutoPorDescrisao = async (req: Request, res: Response) => {
        let descrisao
        let produto
        try {

            descrisao = req.params.descrisao
            produto = await this.bancoProduto.buscaProdutoPorDescrisao(descrisao)

        } catch (e) {
            console.log(e)
            res.json({ erro: `erro ao recuperar produto por descrisão ${descrisao}` })
        }

        res.json(produto)
    }

    public salvarProduto = (req: Request, res: Response) => {

        try {

            const { descrisao, valorUnitario } = req.body

            const produto = new Produto(descrisao, valorUnitario)

            this.bancoProduto.inserirNoBD(produto)

        } catch (e) {

            res.json({ erro: 'falha ao salvar Produto' })
            console.log(e)
        }

        res.json({ sucesso: 'Produto salvo com sucesso' })

    }
    public excluirProduto = (req: Request, res: Response) => {

        try {

            const id = parseInt(req.params.id)

            this.bancoProduto.deleteProduto(id)

        } catch (e) {

            res.json({ erro: 'falha na exclusão' })
            console.log(e)

        }

        res.json({ excluido: 'excluido com sucesso' })

    }


    public atualizarProduto = (req: Request, res: Response) => {

        try {

            const id = parseInt(req.params.id)

            const { descrisao, valorUnitario } = req.body

            const produto = new Produto(descrisao, valorUnitario)

            this.bancoProduto.updateProduto(produto, id)

        } catch (error) {
            res.json({ erro: 'falha ao atualizar produto' })
        }

        res.json({ atualizado: 'atualizado com sucesso' })
    }
}
