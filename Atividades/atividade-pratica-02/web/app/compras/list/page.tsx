'use client'

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';

import axios from 'axios'
import { ChangeEvent, useEffect, useState } from 'react'
import { useRouter } from "next/navigation"
import { retornaTodasAsCompras } from '@/app/repository/compras/funcoes';

export default function ComprasTable() {

    const { push } = useRouter()

       
    const [listaCompras, setListaCompras] = useState<any>([]);
    const [busca, setBusca] = useState('')

    useEffect(() => {
        const fetchData = async () => {
            const lista = await retornaTodasAsCompras()
            setListaCompras(lista);
        };

        fetchData();
    }, []);


    const listaFiltrada = listaCompras.filter((Compras: any) => Compras.nomeUsuario.toLowerCase().includes(busca.toLowerCase()))

    return (

        <div>
            <nav className="navbar bg-body-tertiary ">
                <div className="container-fluid">
                    <a className="navbar-brand"></a>
                    <form className="d-flex" role="search" method="get" >
                        <input className="form-control me-2 " type="search" value={busca} onChange={(event: ChangeEvent<HTMLInputElement>) => setBusca(event.target.value)} placeholder="Nome do usuario" aria-label="Search" />
                    </form>
                </div>
            </nav>
            <table className="table">
                <thead>
                    <tr>
                       
                        <th scope="col">Nome usuario</th>
                        <th scope="col">Endereco</th>
                        <th scope="col">data</th>
                        
                       
                    </tr>
                </thead>
                <tbody>
                    {
                        listaFiltrada.map((compras: any) => {
                            return (
                                <tr key={compras.id} className="">
                                <td>{compras.nomeUsuario}</td>
                                <td>{compras.rua} - {compras.bairro} - {compras.numero}</td>
                                <td>{compras.data}</td>
                            
                                <button onClick={()=>{
                                    push(`/compras/edit/${compras.id}`)
                                }} className="btn btn-success">Editar </button>

                                <button  className ="btn btn-danger" onClick={ async ()=>{
                                   const response =  await axios.delete(`http://localhost:5555/delete/compra/${compras.id}`)
                                   const status = response.data
                                   if(status.sucesso){
                                    alert(`sucesso excluido com sucesso`)
                                    window.location.reload();
                                   }else{
                                    alert(`sucesso excluido com sucesso`)
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
