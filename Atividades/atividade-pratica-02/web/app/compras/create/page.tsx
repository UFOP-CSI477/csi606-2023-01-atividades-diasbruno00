'use client'

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import axios from 'axios';
import { ChangeEvent, FormEvent, useEffect, useState } from "react"
import { useRouter } from "next/navigation";
import { retornaTodosOsUsuarios } from '@/app/repository/usuarios/funcoes';
import { retornarTodosOsEnderecos } from '@/app/repository/enderecos/funcoes';

export default function CreateCompras() {

    const { push } = useRouter()
    const [usuarioId, setUsuarioId] = useState('')
    const [enderecoId, setEnderecoId] = useState('')
    const [datas, setData] = useState('')
    const [usuario, setUsuario] = useState<any>([])
    const [endereco, setEmdereco] = useState<any>([])


    useEffect(() => {

        retornaTodosOsUsuarios().then(data => setUsuario(data))
            .catch(error => console.log(error))

        retornarTodosOsEnderecos().then(data => setEmdereco(data))
            .catch(error => console.log(error))

    }, [])


    const handleSumit = async (event: FormEvent) => {
        event.preventDefault()

        const data = {
            usuarioId,
            enderecoId,
            data: datas

        }
        try {

            const response = await axios.post('http://localhost:5555/compra', data)
            const compra = await response.data
            alert(`${compra.sucesso}`)
            push('/produtos/list')

        } catch (error) {
            alert(`Erro na inclusão`)
        }
    }

    return (

        <div className="container col-md-9 p-5">
            <h1>Cadastro de Compras: { }</h1>

            <form onSubmit={handleSumit} >

                <div>

                    <label htmlFor="usuario">Usuario</label>
                    <select className="form-select" aria-label="Default select example" name="cidade" value={usuarioId} onChange={(event) => setUsuarioId(event.target.value)}>
                        <option value="" selected disabled> Selecione</option>
                        {
                            usuario.map((usuario: any) => {
                                return (
                                    <option key={usuario.id} value={usuario.id}> {usuario.nomeUsuario} </option>
                                )
                            })
                        }
                    </select>
                </div>

                <div>

                    <label htmlFor="cidade">Endereco</label>
                    <select className="form-select" aria-label="Default select example" name="cidade" value={enderecoId} onChange={(event) => setEnderecoId(event.target.value)}>
                        <option value="" selected disabled> Selecione</option>
                        {
                            endereco.map((endereco: any) => {
                                return (
                                    <option key={endereco.id} value={endereco.id}> {endereco.rua} </option>
                                )
                            })
                        }
                    </select>
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleFormControlInput1" className="htmlForm-label">Data da compra</label>
                    <input type="date" value={datas} className="form-control" placeholder='Informe o valor unitariow do produto' onChange={(event: ChangeEvent<HTMLInputElement>) => { setData(event.target.value) }} required />
                </div>

                <button type="submit" className="btn btn-primary">Cadastrar</button>
            </form>
        </div>
    )
}