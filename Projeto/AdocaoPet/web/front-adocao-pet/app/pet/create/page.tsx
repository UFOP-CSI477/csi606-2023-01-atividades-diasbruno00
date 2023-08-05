'use client'

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';

import { ChangeEvent, FormEvent, useReducer, useState } from "react"
import axios from 'axios'
import { useRouter } from "next/navigation"
import Input from '@/app/components/forms/Input'
import Swal from 'sweetalert2';

// htmlFormulario
export default function CreatePet() {

    const { push } = useRouter()
   
    const handleSumit = async (event: FormEvent) => {

        const nome = document.getElementById('nome') as HTMLInputElement
        const idade = document.getElementById('idade') as HTMLInputElement
        const sexo = document.getElementById('sexo') as HTMLInputElement
        const raca = document.getElementById('raca') as HTMLInputElement
        const estado = document.getElementById('estado') as HTMLInputElement
        const cidade = document.getElementById('cidade') as HTMLInputElement

        event.preventDefault();

        const data = {
            nome: nome.value,
            idade: idade.value,
            sexo: sexo.value,
            raca: raca.value,
            estado: estado.value,
            cidade: cidade.value
        }
        try {

            const response = await axios.post('http://localhost:3333/pet', data)
            const pet = await response.data
            await Swal.fire(
                'Good job!',
                `${pet.nome} salvo com sucesso`,
                'success'
              )
        } catch (error) {
            alert(`Erro na inclusão ${nome}`)
        }
    }

    return (
        <div className="container m-auto">
            <form onSubmit={handleSumit}>
                <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="htmlForm-label">nome</label>
                    <Input name="nome" />
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="htmlForm-label">idade</label>
                    <Input name="idade" />
                </div>
                <div className="mb-3 htmlForm-check">
                    <label htmlFor="exampleInputEmail1" className="htmlForm-label">sexo</label>
                    <Input name="sexo" />

                </div>
                <div className="mb-3 htmlForm-check">
                    <label htmlFor="exampleInputEmail1" className="htmlForm-label">raca</label>
                    <Input name="raca" />

                </div>
                <div className="mb-3 htmlForm-check">
                    <label htmlFor="exampleInputEmail1" className="htmlForm-label">estado</label>
                    <Input name="estado" />

                </div>
                <div className="mb-3 htmlForm-check">
                    <label htmlFor="exampleInputEmail1" className="htmlForm-label">cidade</label>
                    <Input name="cidade" />
                </div>

                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        </div>
    )
}