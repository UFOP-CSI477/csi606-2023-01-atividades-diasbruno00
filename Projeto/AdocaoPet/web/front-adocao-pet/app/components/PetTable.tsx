import 'bootstrap/dist/css/bootstrap.min.css';

import axios from 'axios'
import PetInterface from '../types/PetInterface'

import React, { ChangeEvent, FormEvent, useEffect, useState } from 'react';


const getAllPet = async () => {

    try {
        // Rota GET usando Axios
        const pet = await axios.get('http://localhost:3333/pet')
        return pet.data
    } catch (error) {
        console.log(error)
        alert(error)
    }

}

export default function PetTable() {

    const [listaPet, setListaPet] = useState<PetInterface[] | []>([]);
    const [busca, setBusca] = useState('')

    useEffect(() => {
        const fetchData = async () => {
            const lista = await getAllPet();
            setListaPet(lista);
        };

        fetchData();
    }, []);

    const listaFiltrada = listaPet.filter((pet) => pet.tipo.toLowerCase().includes(busca.toLowerCase()))

    return (

        <div>
            <nav className="navbar bg-body-tertiary">
                <div className="container-fluid">
                    <a className="navbar-brand"></a>
                    <form className="d-flex" role="search" method="get" >
                        <input className="form-control me-2" type="search" value={busca} onChange={(event: ChangeEvent<HTMLInputElement>) => setBusca(event.target.value)} placeholder="Search" aria-label="Search" />
                    </form>
                </div>
            </nav>
            <table className="table">
                <thead>
                    <tr>
                        <th scope="col">Nome</th>
                        <th scope="col">Idade</th>
                        <th scope="col">Sexo</th>
                        <th scope="col">Tipo</th> 
                        <th scope="col">Raca</th>
                        <th scope="col">Estado</th>
                        <th scope="col">Cidade</th>
                        <th scope="col">Status</th>
                        <th scope="col">Adote</th>

                    </tr>
                </thead>
                <tbody>
                    {
                        listaFiltrada.map((pet: any) => {
                            return (
                                <tr key={pet._id} className="">
                                    <td>{pet.nome}</td>
                                    <td>{pet.idade}</td>
                                    <td>{pet.sexo}</td>
                                    <td>{pet.tipo}</td>
                                    <td>{pet.raca}</td>
                                    <td>{pet.estado}</td>
                                    <td>{pet.cidade}</td>
                                    <td>{pet.status}</td>
                                    <td> <a href="http://"><button>Quero adotar</button></a></td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>
        </div>
    )
}