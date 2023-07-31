import conexao from "./Conexao.js";

export default class ComprasDao {
  buscaComprasPorId(id) {
    return new Promise((resolve, reject) => {
      conexao.query(
        "select com.id, com.usuarioId, com.enderecoId, com.data, en.rua, en.bairro, en.telefone, usu.nomeUsuario, usu.email, usu.senha, ci.nomeCidade from enderecos as en, usuarios as usu , compras as com , cidades as ci where com.usuarioId = usu.id and com.enderecoId = en.id and en.cidadeId = ci.id and com.id = ?",
        [id],
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

  salvarComprasNoBD(compras) {
    return new Promise((resolve, reject) => {
      conexao.query(
        "INSERT INTO COMPRAS (usuarioId,enderecoId, data, criadoEm)  VALUES (?,?,?, ?)",
        [compras.usuarioId, compras.enderecoId, compras.data, compras.criadoEm],
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

  listaDeCompras() {
    return new Promise((resolve, reject) => {
      conexao.query(" select com.id, com.usuarioId, com.enderecoId, com.data, en.rua, en.bairro, en.telefone, usu.nomeUsuario, usu.email, usu.senha, ci.nomeCidade from enderecos as en, usuarios as usu , compras as com , cidades as ci where com.usuarioId = usu.id and com.enderecoId = en.id and en.cidadeId = ci.id;", (erro, resultado) => {
        if (erro) {
          reject(erro);
          return;
        } else {
          return resolve(resultado);
        }
      });
    });
  }

  deleteCompras(id) {
    return new Promise((resolve, reject) => {
      conexao.query(
        `DELETE FROM COMPRAS WHERE ID = ${id}`,
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

  updateCompras(compras, id) {
    return new Promise((resolve, reject) => {
      conexao.query(
        "update compras set usuarioId = ? , enderecoId = ?, data = ?, atualizadoEm = ? where id = ?",
        [compras.usuarioId, compras.enderecoId, compras.data, compras.atualizadoEm, id],
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
