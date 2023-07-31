import Estados from "../model/Estados.js";
import EstadosDao from "../database/EstadosDao.js";

export default class ControllerEstados {
  constructor() {
    this.bancoEstados = new EstadosDao();
  }

  recuperarEstadoPorId = async (req, res) => {
    const id = parseInt(req.params.id);
    let estado;

    try {
      estado = await this.bancoEstados.buscarEstadoPorID(id);
    } catch (error) {
      res.json({ erro: `erro ao lista produto do id ${id}` });
    }

    res.json(estado);
  };

  recuperarEstadoPorNome = async (req, res) => {
    const nome = req.params.nome;

    let estado;

    try {
      estado = await this.bancoEstados.buscarEstadosPorNome(nome);
    } catch (error) {
      res.json({ erro: `erro ao lista produto do nome ${nome}` });
    }

    res.json(estado);
  };

  salvarEstados = async (req, res) => {
    const { nome, sigla } = req.body;

    const estados = new Estados(nome, sigla);

    console.log(estados);

    try {
      const resposta = await this.bancoEstados.salvarEstadosNoBD(estados);
    } catch (error) {
      res.json({ erro: `erro ao salvar estado ${nome} no banco de dados` });
      console.log(error);
    }

    res.json({ estados });
  };

  recuperarTodosEstados = async (req, res) => {
    let listaDeEstados;
    try {
      listaDeEstados = await this.bancoEstados.listaDeEstados();
      console.log(listaDeEstados)
    } catch (error) {
      res.json({ error: `èrro ao listar todos os estados` });
      console.log(error);
    }

    res.json(listaDeEstados);
  };
  atualizarEstados = (req, res) => {
    const { nome, sigla } = req.body;
    const id = parseInt(req.params.id);

    const estado = new Estados(nome, sigla);

    try {
      this.bancoEstados.updateEstados(estado, id);
    } catch (error) {
      res.json({ erro: `erro ao atualizar estado id ${id}` });
      console.log(error);
    }

    res.json({ estado });
  };
  excluirEstados = (req, res) => {
    const id = parseInt(req.params.id);

    try {
      this.bancoEstados.deleteEstado(id);
    } catch (error) {
      res.json({ erro: `erro ao excluir estado de id ${id}` });
      console.log(error);
    }
    res.json({ sucesso: `id ${id} excluido com sucesso` });
  };
}
