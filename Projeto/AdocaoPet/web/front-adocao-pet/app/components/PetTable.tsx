
import 'bootstrap/dist/css/bootstrap.min.css';

import axios from 'axios'
import PetInterface from '../types/PetInterface'


import React from 'react';
import { useRouter } from 'next/router';


const getAllPet = async () => {

    // Rota GET usando Axios
    const pet = await axios.get('http://localhost:3333/pet')
    return pet.data
}


export default  async function PetTable() {

   const listaPet: PetInterface = await getAllPet()

    return (
        <table className="table">
            <thead>
                <tr>
                    <th scope="col"> Nome</th>
                    <th scope="col">Idade</th>
                    <th scope="col">Sexo</th>
                    <th scope="col">Raca</th>
                    <th scope="col">Estado</th>
                    <th scope="col">Cidade</th>
                    <th scope="col">Status</th>
                </tr>
            </thead>
            <tbody>
                {
                    listaPet.map((pet: PetInterface) => {
                        return (
                            <tr key={pet._id} className="">
                                <td>{pet.nome}</td>
                                <td>{pet.idade}</td>
                                <td>{pet.sexo}</td>
                                <td>{pet.raca}</td>
                                <td>{pet.estado}</td>
                                <td>{pet.cidade}</td>
                                <td>{pet.status}</td>
                            </tr>
                        )
                    })
                }
            </tbody>
        </table>
    )
}