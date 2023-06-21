import Conexao from "./Conexao";
import {Produto} from "../model/Produto";

export class ProdutoDAO {
    public inserirNoBD(produto: Produto): Promise<any> {
        return new Promise((resolve, reject) => {
            Conexao.query(
                "insert into produtos(descricao,valor_unitario,crated_at) values (?,?,?)",
                [produto.descrisao, produto.valorUnitario, produto.criandoEm],
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

    public listaDeProdutos(): Promise<Produto> {
        // @ts-ignore
        return new Promise((resolve, reject) => {
            Conexao.query(
                "SELECT * FROM PRODUTOS",
                (erro, resultado) => {
                    if (erro) {
                        reject(erro)
                        return

                    } else{
                        return resolve(resultado);
                    }
                }
            )
        })

    }


}
