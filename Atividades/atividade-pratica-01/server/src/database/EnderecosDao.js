import conexao from "./Conexao.js"

export default class EnderecosDao {
  constructor() {}


  buscaEnderecoPorId(id)  {
    return new Promise((resolve, reject) => {
        conexao.query(
            'SELECT * FROM ENDERECOS WHERE ID = ?', [id],
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

  salvarEnderecoNoBD(endereco) {
    return new Promise((resolve, reject) => {
      conexao.query(
        "INSERT INTO ENDERECOS (usuarioId, rua, numero, bairro,cidadeId, telefone, criadoEm)  VALUES (?,?,?,?,?,?,?)",
        [
          endereco.usuarioId,
          endereco.rua,
          endereco.numero,
          endereco.bairro,
          endereco.cidadeId,
          endereco.telefone,
          endereco.criadoEm,
        ],
        (erro, resultado) => {
          if (erro) {
            reject(erro);
            return;
          } else {
            return resolve(resultado);
          }
        }
      );
    });
  }


listaDeEnderecos(){
    return new Promise((resolve, reject)   =>{
        conexao.query(
            "SELECT * FROM ENDERECOS",
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

deleteEndereco(id)  {
  return new Promise((resolve, reject)  => {
      conexao.query(
          `DELETE FROM ENDERECOS WHERE ID = ${id}`,
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

updateEndereco(endereco, id) {
  return new Promise((resolve, reject) => {
    conexao.query(
      "update enderecos set usuarioId = ?, rua = ?, bairro = ?, cidadeId =? , telefone = ?, atualizadoEm = ?, numero = ?  where id = ?",
      [endereco.usuarioId,
        endereco.rua,
        endereco.bairro,
        endereco.cidadeId,
        endereco.telefone,
        endereco.atualizadoEm,
        endereco.numero,id],
      (erro, resultado) => {
        if (erro) {
          reject(erro);
          return;
        } else {
          return resolve(resultado);
        }
      }
    );
  });
}

}
