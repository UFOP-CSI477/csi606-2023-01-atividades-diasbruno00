import UsuariosDao from "../database/UsuariosDao.js";
import Usuario from "../model/Usuario.js";


export default class ControllerUsuarios {


    constructor() {
        this.bancoUsuario = new UsuariosDao()
    }

     recuperarUsuarioPorId = async (req, res) => {
        const id = parseInt(req.params.id)
        let usuario
        try {
            usuario = await this.bancoUsuario.buscarUsuarioPorID(id)
        } catch (error) {
            console.log(error)
            res.json({ erro: `erro ao buscar usuario do id ${id}` })
        }

        res.json( usuario )
    }

     recuperarUsuarioPorNome = async (req , res) => {
        let usuario
        let nome = req.params.nome
        try {

            usuario = await this.bancoUsuario.buscarUsuarioPorNome(nome)

        } catch (error) {
            console.log(error)
            res.json({ erro: `erro ao buscar usuario pelo nome : ${nome}` })
        }

        res.json(usuario )
    }

     recuperarTodosUsuarios = async (req , res ) => {
        let listaDeUsuarios
        try {
            listaDeUsuarios = await this.bancoUsuario.listaDeUsuarios()
        } catch (error) {
            res.json({ erro: 'erro ao lista todos os usuarios do banco de dados' })
            console.log(error)
        }

        res.json( listaDeUsuarios )
    }

     salvarUsuario = (req , res ) => {
        const { nome, email, senha, } = req.body
        const usuario = new Usuario(nome, email, senha)
        try {
            this.bancoUsuario.salvarUsuarioNoBD(usuario)
            console.log(usuario)
        } catch (error) {
            res.json({ erro: 'erro ao salvar usuario no banco de dados' })
            console.log(error)
        }

        res.json({ usuario })
    }

     excluirUsuario = (req , res ) => {
        const id = parseInt(req.params.id)
        try {
            this.bancoUsuario.deleteUsuario(id)

        } catch (error) {
            res.json({ erro: `erro ao deletar usuario de id ${id}` })
            console.log(error)
        }
        res.json({ sucesso: `usuario de id ${id} deletado com sucesso` })
    }


     atualizarUsuario = (req , res ) => {
        const { nome, email, senha } = req.body
        const id = parseInt(req.params.id)
        const usuario = new Usuario(nome, email, senha)
        try {

            this.bancoUsuario.updateUsuario(usuario, id)

        } catch (error) {
            console.log(error)
            res.json({ erro: `erro ao atualizar usuario de id ${id}` })
        }
        res.json({ sucesso: `usuario de id ${id} atualizado com sucesso` })
    }

}