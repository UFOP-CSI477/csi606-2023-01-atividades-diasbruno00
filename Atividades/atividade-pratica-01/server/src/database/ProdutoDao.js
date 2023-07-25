import conexao from "./Conexao.js";

export default class ProdutoDAO {
  salvarProdutoNoBD(produto) {
    return new Promise((resolve, reject) => {
      conexao.query(
        "INSERT INTO PRODUTOS (descrisao, valorUnitario, criadoEm)  VALUES (?,?,?)",
        [produto.descrisao, produto.valorUnitario, produto.criadoEm],
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

  buscaProdutoPorId(id) {
    return new Promise((resolve, reject) => {
      conexao.query(
        "SELECT * FROM PRODUTOS WHERE ID = ?",
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

  buscaProdutoPorDescrisao(descrisao) {
    return new Promise((resolve, reject) => {
      conexao.query(
        "SELECT * FROM PRODUTOS WHERE DESCRISAO = ?",
        [descrisao],
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

  listaDeProdutos() {
    return new Promise((resolve, reject) => {
      conexao.query("SELECT * FROM PRODUTOS", (erro, resultado) => {
        if (erro) {
          reject(erro);
          return;
        } else {
          return resolve(resultado);
        }
      });
    });
  }

  deleteProduto(id) {
    return new Promise((resolve, reject) => {
      conexao.query(
        `DELETE FROM PRODUTOS WHERE ID = ${id}`,
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

  updateProduto(produto, id) {
    return new Promise((resolve, reject) => {
      conexao.query(
        "update produtos set descrisao = ?, valorUnitario= ?, atualizadoEm = ? where id = ?",
        [produto.descrisao, produto.valorUnitario, produto.atualizadoEm, id],
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
