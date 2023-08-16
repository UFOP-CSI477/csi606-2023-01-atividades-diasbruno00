'use client'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';

import { ChangeEvent, FormEvent, useEffect, useState } from "react";
import axios from 'axios'
import { useRouter } from "next/navigation";


async function retoraProdutoPorId(id: number) {

    const response = await axios.get(`http://localhost:5555/produto/${id}`)
    return response.data

}


export default function ProdutoId({ params }: any) {

    const {push} = useRouter()

    const [produto, setProduto] = useState<any>({});
    const [descrisao, setDescrisao] = useState('')
    const [valorUnitario, setValorUnitario] = useState('')


    const id = params.id

    useEffect(() => {
        const fetchData = async () => {
            const produto = await retoraProdutoPorId(id);
            setProduto(produto[0]);
            setDescrisao(produto[0].descrisao)
            setValorUnitario(produto[0].valorUnitario)
        };

        fetchData();

    }, [id]);


    const atualizarProduto = async (event: FormEvent) => {
        event.preventDefault()
        let resultado
        const data = {
            descrisao,
            valorUnitario
        }
        try {
            const response = await axios.put(`http://localhost:5555/update/produto/${id}`, data)
            resultado = response.data
            alert(`${resultado.sucesso}`)
            push('/produtos/list')
        } catch (error) {
            alert(`${resultado.erro}`)
        }

    }

    return (

        <div className="container col-md-9 p-5">
            <h1>Atualizão  do produto: {descrisao}</h1>

            <form onSubmit={atualizarProduto}>
                <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="htmlForm-label">Descrisao</label>
                    <input type="text" value={descrisao} className="form-control" placeholder='Informe a descrisao do produto' onChange={(event: ChangeEvent<HTMLInputElement>) => { setDescrisao(event.target.value) }} required />
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="htmlForm-label">Valor Unitario</label>
                    <input type="number" value={valorUnitario} className="form-control" placeholder='Informe o valor unitariow do produto' onChange={(event: ChangeEvent<HTMLInputElement>) => { setValorUnitario(event.target.value) }} required />
                </div>
                <button type="submit" className="btn btn-primary">Atualizar o cadastro</button>
            </form>
        </div>

    )
}