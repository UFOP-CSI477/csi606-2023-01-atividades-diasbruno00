'use client'

import { FormEvent, useEffect, useState } from "react";
import axios from 'axios'
import PetCard from "@/app/components/card/Card";
import Menu from "@/app/components/menu/Menu";

const recuperarPetId = async (id: number) => {
    const response = await axios.get(`http://localhost:3333/pet/${id}`)
    return response.data
}

const recuperarTodosUsuarios = async () => {
    const response = await axios.get(`http://localhost:3333/usuarios`)
    return response.data
}

export default function AdotePet({ params }: any) {



    const id = params.id
    const [pet, setPet] = useState<any>([])
    const [informacoes, setInformacoes] = useState('')
    const [usuarioId, setUsuarioId] = useState('')
    const [usuarios, setUsuarios] = useState<any>([])


    useEffect(() => {
        recuperarPetId(id).then(data => setPet(data))
            .catch(error => console.log(error))

        recuperarTodosUsuarios().then(data => setUsuarios(data))
            .catch(error => console.log(error))
    }, [id]);

    const handleSubmit = async (event: FormEvent) => {
      
        event.preventDefault()

        const data = {
            idUsuario: usuarioId,
            idPet: params.id,
            informacoes

        }

        const response = await axios.post(`http://localhost:3333/adocao`, data)
        const dados = response.data
        if(dados.sucesso){
                alert(dados.sucesso)
        }else{
            alert(dados.erro)
        }
    }

    return (
        <>
            < Menu />

            <form onSubmit={handleSubmit}>

                <div className="container col-md-9 p-5 ">

                    <PetCard pet={pet} />

                    <label htmlFor="usuario">Informe seu usuario</label>
                    <select className="form-select" aria-label="Default select example" name="idUsuario" value={usuarioId} onChange={(event) => setUsuarioId(event.target.value)}>
                        <option value="" selected disabled> Selecione</option>
                        {
                            usuarios.map((usuario: any) => {
                                return (
                                    <option key={usuario._id} value={usuario._id}> {usuario.nome} - {usuario.cidade} </option>
                                )
                            })
                        }
                    </select>

                    <div className="mb-2 p-3">
                        <label htmlFor="exampleFormControlTextarea1" className="form-label">Porque devemos aceitar sua solitação ?</label>
                        <textarea className="form-control" id="exampleFormControlTextarea1" value={informacoes} rows={7} onChange={(event) => setInformacoes(event.target.value)} placeholder="Informe um pouco sobre voce"></textarea>
                    </div>

                  <button type="submit"> Enviar </button>
                </div>

            </form>
        </>

    )
}