import ComprasDao from "../database/ComprasDao.js";
import Compras from "../model/Compras.js";

export default class ControllerCompras {
  constructor() {
    this.banco = new ComprasDao();
  }

  recuprarTodasAsCompras = async (req, res) => {
    try {
      const listaDeCompras = await this.banco.listaDeCompras();
      res.json(listaDeCompras);
    } catch (error) {
      console.log(error);
      res.json({ erro: "erro ao lista todos as compras" });
    }
  };

  recuperarComprarPorId = async (req, res) => {
    try {
      const id = req.params.id;
      const compra = await this.banco.buscaComprasPorId(id);
      res.json(compra);
    } catch (error) {
      console.log(error);
      res.json({ erro: `erro ao recuperar compra de id ${id}` });
    }
  };

  salvarCompra = async (req, res) => {
    try {
      const { usuarioId, enderecoId } = req.body;
      const compras = new Compras(usuarioId, enderecoId);
     const resposta = await  this.banco.salvarComprasNoBD(compras);
     console.log(resposta)
      res.json({ sucesso: "salvo no banco com sucesso" });
    } catch (error) {
      console.log(error);
      res.json({ error: `erro ao salvar compra` });
    }
  };

  deletarCompra = async (req, res) => {
    try {
      const id = req.params.id;
      console.log(id)
      const resposta = await  this.banco.deleteCompras(id);
      console.log(resposta)
      res.json({ sucesso: "excluido com sucesso" });
    } catch (error) {
      console.log(error);
      res.json({ erro: `erro ao exluir comprar id ${id}` });
    }
  };

  atualizarCompras =  (req, res) => {
    try {
      const { usuarioId, enderecoId } = req.body;
      const id = req.params.id;
      const compras = new Compras(usuarioId, enderecoId);
      this.banco.updateCompras(compras, id);
      console.log(resposta)
      res.json({ sucesso: "salvo no banco com sucesso" });
    } catch (error) {
        console.log(error)
        res.json({erro: `erro ao atualizar compra id ${id}`})
    }
  };
}
