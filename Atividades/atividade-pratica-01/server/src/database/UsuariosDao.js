import conexao from './Conexao.js'

export default class UsuariosDao {

     buscarUsuarioPorID(id) {
        return new Promise((resolve, reject) => {
            conexao.query(
                'SELECT * FROM USUARIOS WHERE ID = ?', [id]
                , (erro, resultado) => {
                    if (erro) {
                        reject(erro);
                        return
                    } else {
                        return resolve(resultado);
                    }
                }
            )
        })

    }

     buscarUsuarioPorNome(nome ) {
        return new Promise((resolve, reject) => {
            conexao.query(
                'SELECT * FROM USUARIOS WHERE nomeUsuario = ?', [nome]
                , (erro, resultado) => {
                    if (erro) {
                        reject(erro);
                        return
                    } else {
                        return resolve(resultado);
                    }
                }
            )
        })

    }

     salvarUsuarioNoBD(usuario) {
        return new Promise((resolve, reject) => {
            conexao.query(
                'INSERT INTO USUARIOS(nomeUsuario,email,senha,criadoEm)  VALUES (?,?,?,?)', [
                usuario.nomeUsuario, usuario.email, usuario.senha, usuario.criadoEm
            ],
                (erro, resultado) => {
                    if (erro) {
                        reject(erro);
                        return
                    } else {
                        return resolve(resultado);
                    }
                }
            )
        })

    }

     listaDeUsuarios(){
        return new Promise((resolve, reject) => {
            conexao.query(
                'SELECT * FROM USUARIOS'
                , (erro, resultado) => {
                    if (erro) {
                        reject(erro);
                        return
                    } else {
                        return resolve(resultado);
                    }
                }
            )
        })

    }


     deleteUsuario(id) {
        return new Promise((resolve, reject) => {
            conexao.query(
                `DELETE FROM USUARIOS WHERE ID = ${id}`,
                (erro, resultado) => {
                    if (erro) {
                        reject(erro)
                        return

                    } else {

                        return resolve(resultado);
                    }
                }
            )
        })

    }


     updateUsuario(usuario, id ) {
        return new Promise((resolve, reject) => {
            conexao.query(
                'update usuarios set nomeUsuario = ?, email = ?, senha = ?, atualizadoEm = ? where id = ?', [
                usuario.nomeUsuario, usuario.email, usuario.senha, usuario.atualizadoEm, id
            ],
                (erro, resultado) => {
                    if (erro) {
                        reject(erro)
                        return
                    } else {

                        return resolve(resultado);
                    }
                }
            )
        })

    }



}