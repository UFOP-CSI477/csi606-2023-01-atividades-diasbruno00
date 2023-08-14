'use client'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';

import ProdutoDTO from '@/app/types/ProdutoDTO'
import axios from 'axios'
import { ChangeEvent, useEffect, useState } from 'react'
import Link from "next/link"
import { useRouter } from "next/navigation"


const getAllProdutos = async () =>{
    
    // Rota GET usando Axios
    const produtos = await axios.get('http://localhost:5555/produtos')
    return produtos.data
}


export default function ProdutoTable() {

    const { push } = useRouter()

       
    const [listaProdutos, setListaProdutos] = useState<ProdutoDTO[] | []>([]);
    const [busca, setBusca] = useState('')

    useEffect(() => {
        const fetchData = async () => {
            const lista = await getAllProdutos();
            setListaProdutos(lista);
        };

        fetchData();
    }, []);

    const listaFiltrada = listaProdutos.filter((produto) => produto.descrisao.toLowerCase().includes(busca.toLowerCase()))

    return (

        <div>
            <nav className="navbar bg-body-tertiary ">
                <div className="container-fluid">
                    <a className="navbar-brand"></a>
                    <form className="d-flex" role="search" method="get" >
                        <input className="form-control me-2" type="search" value={busca} onChange={(event: ChangeEvent<HTMLInputElement>) => setBusca(event.target.value)} placeholder="Descrisao do produto" aria-label="Search" />
                    </form>
                </div>
            </nav>
            <table className="table">
                <thead>
                    <tr>
                        <th scope="col">Descrisao</th>
                        <th scope="col">Valor Unitario</th>
                        <th scope="col">Criado em</th>
                        <th scope="col">Atualizado em</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        listaFiltrada.map((produto: any) => {
                            return (
                                <tr key={produto.id} className="">
                                <td>{produto.descrisao}</td>
                                <td>{produto.valorUnitario}</td>
                                <td>{produto.criadoEm}</td>
                                <td>{produto.atualizadoEm}</td>
                                <button onClick={()=>{
                                    push(`/produtos/edit/${produto.id}`)
                                }} className="btn btn-success">Editar </button>
                                
                                <button  className ="btn btn-danger" onClick={ async ()=>{
                                   const response =  await axios.delete(`http://localhost:5555/delete/produto/${produto.id}`)
                                   const status = response.data
                                   if(status.excluido){
                                    alert(`sucesso ${produto.descrisao} excluido com sucesso`)
                                    window.location.reload();
                                   }else{
                                    alert(`sucesso ${produto.descrisao} excluido com sucesso`)
                                   }
                                   console.log('click')
                                }}>delete</button>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>
        </div>
    )
    
}