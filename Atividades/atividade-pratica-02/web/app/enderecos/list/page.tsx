'use client'

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';

import axios from 'axios'
import { ChangeEvent, useEffect, useState } from 'react'
import { useRouter } from "next/navigation"
import { retornarTodosOsEnderecos } from '@/app/repository/enderecos/funcoes';


export default function EnderecoTable() {

    const { push } = useRouter()

       
    const [listaEndereco, setListaEndereco] = useState<any>([]);
    const [busca, setBusca] = useState('')

    useEffect(() => {
        const fetchData = async () => {
            const lista = await retornarTodosOsEnderecos();
            setListaEndereco(lista);
        };

        fetchData();
    }, []);

    console.log(listaEndereco)

    const listaFiltrada = listaEndereco.filter((endereco: any) => endereco.rua.toLowerCase().includes(busca.toLowerCase()))

    return (

        <div>
            <nav className="navbar bg-body-tertiary ">
                <div className="container-fluid">
                    <a className="navbar-brand"></a>
                    <form className="d-flex" role="search" method="get" >
                        <input className="form-control me-2" type="search" value={busca} onChange={(event: ChangeEvent<HTMLInputElement>) => setBusca(event.target.value)} placeholder="Rua" aria-label="Search" />
                    </form>
                </div>
            </nav>
            <table className="table">
                <thead>
                    <tr>
                       
                        <th scope="col">Nome usuario</th>
                        <th scope="col">Nome cidade</th>
                        <th scope="col">Rua</th>
                        <th scope="col">Bairro</th>
                        <th scope="col">Numero</th>
                        <th scope="col">Telefone</th>
                       
                    </tr>
                </thead>
                <tbody>
                    {
                        listaFiltrada.map((endereco: any) => {
                            return (
                                <tr key={endereco.id} className="">
                                <td>{endereco.nomeUsuario}</td>
                                <td>{endereco.nomeCidade}</td>
                                <td>{endereco.rua}</td>
                                <td>{endereco.bairro}</td>
                                <td>{endereco.numero}</td>
                                <td>{endereco.telefone}</td>
                            
                                <button onClick={()=>{
                                    push(`/enderecos/edit/${endereco.id}`)
                                }} className="btn btn-success">Editar </button>

                                <button  className ="btn btn-danger" onClick={ async ()=>{
                                   const response =  await axios.delete(`http://localhost:5555/delete/endereco/${endereco.id}`)
                                   const status = response.data
                                   if(status.sucesso){
                                    alert(`sucesso ${endereco.rua} excluido com sucesso`)
                                    window.location.reload();
                                   }else{
                                    alert(`sucesso ${endereco.rua} excluido com sucesso`)
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