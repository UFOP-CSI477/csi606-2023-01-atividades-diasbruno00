import Conexao from "./Conexao";
import { Produto } from "../model/Produto";

export class ProdutoDAO {

    public inserirNoBD(produto: Produto): Promise<any> {
        return new Promise((resolve, reject) => {
            Conexao.query(
                'INSERT INTO PRODUTOS (descrisao, valorUnitario, criadoEm)  VALUES (?,?,?)',[produto.descrisao,produto.valorUnitario,produto.criadoEm],
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
    
    public buscaProdutoPorId(id:Number): Promise<Produto[]> {
        return new Promise((resolve, reject) => {
            Conexao.query(
                'SELECT * FROM PRODUTOS WHERE ID = ?',[id],
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

    public buscaProdutoPorDescrisao(descrisao:string): Promise<Produto[]> {
        return new Promise((resolve, reject) => {
            Conexao.query(
                'SELECT * FROM PRODUTOS WHERE DESCRISAO = ?',[descrisao],
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

    public listaDeProdutos(): Promise<Produto[]> {
        return new Promise((resolve, reject) => {
            Conexao.query(
                "SELECT * FROM PRODUTOS",
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


    public deleteProduto(id: Number): Promise<any> {
        return new Promise((resolve, reject) => {
            Conexao.query(
                `DELETE FROM PRODUTOS WHERE ID = ${id}`,
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

    public updateProduto(produto: Produto, id: Number): Promise<any> {
        return new Promise((resolve, reject) => {
            Conexao.query(
                'update produtos set descrisao = ?, valorUnitario= ?, atualizadoEm = ? where id = ?',[produto.descrisao,produto.valorUnitario,produto.getData(),id],
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
