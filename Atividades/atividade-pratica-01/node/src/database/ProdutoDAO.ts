import Conexao from "./Conexao";
import {Produtos} from "../model/Produtos";

export class ProdutoDAO {
    public inserirNoBD(produto: Produtos): Promise<any> {
        return new Promise((resolve, reject) => {
            Conexao.query(
                "insert into produtos(descricao,valor_unitario,crated_at,updated_at) values (?,?,?,?)",
                [produto.descrisao, produto.valorUnitario, produto.criandoEm, produto.atualizadoEm],
                (erro, resultado) => {
                    if (erro) {
                        reject(erro);
                        return;
                    } else {
                        return resolve(resultado);
                    }
                }
            )
        })

    }

    public listaDeProdutos(): Promise<Produtos> {
        return new Promise((resolve, reject) => {
            Conexao.query(
                "SELECT * FROM PRODUTOS",
                (erro, resultado) => {
                    if (erro) {
                        reject(erro);
                        return;
                    } else {
                        const result = JSON.parse(JSON.stringify(resultado));
                        return resolve(result);
                    }
                }
            )
        })

    }


}
