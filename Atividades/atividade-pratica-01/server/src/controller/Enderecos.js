import EnderecosDao from "../database/EnderecosDao.js";
import Enderecos from "../model/Enderecos.js";

export default class ControllerEnderecos {
  constructor() {
    this.banco = new EnderecosDao();
  }

  salvarEndereco = (req, res) => {
    try {
      const { usuarioId, rua, numero, bairro, cidadeId, telefone } = req.body;

      const endereco = new Enderecos(
        usuarioId,
        rua,
        numero,
        bairro,
        cidadeId,
        telefone
      );
      this.banco.salvarEnderecoNoBD(endereco);
      res.json({ sucesso: "endereco salvo com sucesso" });
    } catch (error) {
      console.log(error);
      res.json({ erro: "erro ao salvar endereco" });
    }
  };

  recuperarTodosEnderecos = async (req, res) => {
    try {
      const listaDeEnderecos = await this.banco.listaDeEnderecos();
      res.json(listaDeEnderecos);
    } catch (error) {
      console.log(error);
      res.json({ erro: "erro ao recuperar todos enderecos" });
    }
  };

  excluirEndereco = async (req, res) => {
    try {
      const id = req.params.id;
      const resposta = await this.banco.deleteEndereco(id);
      console.log(resposta);
      res.json({ sucesso: "excluido com sucesso" });
    } catch (error) {
      console.log(error);
      res.json({ erro: `erro ao excluir endereco` });
    }
  };

  atualizarEndereco = async (req, res) => {


    try {
      const { usuarioId, rua, numero, bairro, cidadeId, telefone } = req.body;
      const id = req.params.id;
      const endereco = new Enderecos(
        usuarioId,
        rua,
        numero,
        bairro,
        cidadeId,
        telefone
      );

      const resposta = await this.banco.updateEndereco(endereco, id);
      res.json({ sucesso: `Endereco salvo com sucesso ` });
    } catch (error) {
      console.log(error);
      res.json({ erro: `erro ao atualizar endereco ` });
    }
  };

  recuperarEnderecoPorId = async (req, res) => {
    try {
      const id = req.params.id;
      console.log(id)
      const endereco = await this.banco.buscaEnderecoPorId(id);
      res.json(endereco);
    } catch (error) {
      console.log(error);
      res.json({ erro: `erro ao lista produto id` });
    }
  };
}
