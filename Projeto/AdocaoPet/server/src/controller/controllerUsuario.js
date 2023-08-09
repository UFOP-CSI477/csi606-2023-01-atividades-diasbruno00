import Usuario from "../model/usuario.js";
import UsuarioDao from "../database/usuarioDao.js";

export default class ControllerUsuario {
  constructor() {}

  async salvar(req, res) {
    try {
      const { nome, idade, sexo, cpf, email, telefone, estado, cidade } =
        req.body;

      const usuario = new Usuario(nome,idade,sexo,cpf,email,telefone,estado,cidade);

      const usuarioSalvo = await UsuarioDao.create(usuario);
      

      res.json(usuarioSalvo);
    } catch (error) {
        console.log(error);
        res.json({ erro: "algo deu errodo verifique com a equipe de TI" });
    }
  }

  async recuperarPorId (req, res) {
    try {
        const {id} = req.params
       const usuario = await UsuarioDao.findById({_id: id})

        res.json(usuario);

    } catch (error) {
        console.log(error);
        res.json({ erro: "algo deu errodo verifique com a equipe de TI" });
    }

  }
}
