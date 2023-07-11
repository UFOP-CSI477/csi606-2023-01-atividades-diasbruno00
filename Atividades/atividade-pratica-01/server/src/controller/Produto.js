import Produto from "../model/Produto.js";
import ProdutoDAO from "../database/ProdutoDao.js";

export default class ControllerProduto {

    

    constructor() {
        this.bancoProduto = new ProdutoDAO()
    }


     recuperarTodosProdutos = async (req, res) => {


        let listaDeProdutos
        try {

            listaDeProdutos = await this.bancoProduto.listaDeProdutos()


        } catch (e) {
            console.log(e)
            res.json({ erro: 'falha ao enviar a lista de Produtos' })
        }

        res.json(listaDeProdutos)


    }

     recuperarProdutoPorId = async (req , res) => {
        let produto
        let id
        try {
            id = parseInt(req.params.id)
            produto = await this.bancoProduto.buscaProdutoPorId(id)
        } catch (e) {
            console.log(e)
            res.json({ erro: `erro ao recuperar o produto do id ${id}` })
        }

        res.json(produto)

    }
     recuperarProdutoPorDescrisao = async (req, res ) => {
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

     salvarProduto = (req , res ) => {

        try {

            const { descrisao, valorUnitario } = req.body

            const produto = new Produto(descrisao, valorUnitario)

            this.bancoProduto.salvarProdutoNoBD(produto)

        } catch (e) {

            res.json({ erro: 'falha ao salvar Produto' })
            console.log(e)
        }

        res.json({ sucesso: 'Produto salvo com sucesso' })

    }

     excluirProduto = (req, res ) => {

        try {

            const id = parseInt(req.params.id)

            this.bancoProduto.deleteProduto(id)

        } catch (e) {

            res.json({ erro: 'falha na exclusão' })
            console.log(e)

        }

        res.json({ excluido: 'excluido com sucesso' })

    }


     atualizarProduto = (req, res) => {

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
