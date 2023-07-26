import conexao from "./Conexao.js";

export default class CidadesDao {

     buscaCidadePorId(id)  {
        return new Promise((resolve, reject) => {
            conexao.query(
                'SELECT * FROM CIDADES WHERE ID = ?', [id],
                (erro, resultado) =>  {
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

     buscaCidadePorDescrisao(descrisao) {
        return new Promise((resolve, reject)  =>{
            conexao.query(
                'SELECT * FROM CIDADES WHERE NOME = ?', [descrisao],
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

     salvarCidadeNoBD(cidade ) {
        return new Promise((resolve, reject) =>  {
            conexao.query(
                'INSERT INTO CIDADES (nomeCidade,estadosId, criadoEm)  VALUES (?,?,?)', [cidade.nome, cidade.estadoId, cidade.criadoEm],
                (erro, resultado)  => {
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

     listaDeCidades()  {
        return new Promise((resolve, reject) =>{
            conexao.query(
                "SELECT * FROM CIDADES",
                (erro, resultado) =>  {
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

    
     deleteCidades(id)  {
        return new Promise((resolve, reject)=> {
            conexao.query(
                `DELETE FROM CIDADES WHERE ID = ${id}`,
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

     updateCidades(cidade, id)  {
        return new Promise((resolve, reject)=>  {
            conexao.query(
                'update estados set nomeCidade = ?, estadoId= ?, atualizadoEm = ? where id = ?', [cidade.nome, cidade.estadoId, cidade.atualizadoEm, id],
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



}