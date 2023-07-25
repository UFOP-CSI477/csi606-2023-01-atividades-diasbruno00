import conexao from "./Conexao.js";

export default class ComprasDao {
  buscaComprasPorId(id) {
    return new Promise((resolve, reject) => {
      conexao.query(
        "SELECT * FROM COMPRAS WHERE ID = ?",
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
      conexao.query("SELECT * FROM COMPRAS", (erro, resultado) => {
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
        "update compras set usuarioId = ? , enderecoId = ?, atualizadoEm = ? where id = ?",
        [compras.usuarioId, compras.enderecoId, compras.atualizadoEm, id],
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
