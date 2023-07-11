import conexao from "./Conexao.js";

export default class EstadosDao {

     buscarEstadoPorID(id)  {
        return new Promise((resolve, reject) =>{
            conexao.query(
                'SELECT * FROM ESTADOS WHERE ID = ?', [id]
                , (erro, resultado) =>  {
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

     buscarEstadosPorNome(nome) {
        return new Promise((resolve, reject) => {
            conexao.query(
                'SELECT * FROM ESTADOS WHERE NOME = ?', [nome]
                , (erro, resultado)  => {
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


     salvarEstadosNoBD(estado)  {
        return new Promise((resolve, reject) =>  {
            conexao.query(
                'INSERT INTO ESTADOS (NOME,SIGLA, criadoEm)  VALUES (?,?,?)', [estado.nome, estado.sigla, estado.criadoEm],
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

     listaDeEstados()  {
        return new Promise((resolve, reject)   =>{
            conexao.query(
                "SELECT * FROM Estados",
                (erro, resultado)  => {
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

     deleteEstado(id)  {
        return new Promise((resolve, reject)  => {
            conexao.query(
                `DELETE FROM ESTADOS WHERE ID = ${id}`,
                (erro, resultado)   =>{
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

     updateEstados(estado, id) {
        return new Promise((resolve, reject) => {
                'update estados set nome = ?, sigla = ?, atualizadoEm = ? where id = ?', [estado.nome, estado.sigla, estado.atualizadoEm, id],
                (erro, resultado)  => {
                    if (erro) {
                        reject(erro)
                        return
                    } else {

                        return resolve(resultado);
                    }
                }
     })
        }
    }




