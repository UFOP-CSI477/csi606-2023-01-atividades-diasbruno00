'use client'

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import axios from 'axios';
import { ChangeEvent, FormEvent, useState } from "react"
import { useRouter } from "next/navigation";


export default function CreateProdutos(){
    const {push} = useRouter()

    const [descrisao, setDescrisao] = useState('')
    const [valorUnitario, setValorUnitario] = useState('')

    const handleSumit =  async (event: FormEvent) => {
         event.preventDefault()

         const data  ={
            descrisao,
            valorUnitario
         }
         try {

            const response = await axios.post('http://localhost:5555/produto', data)
            const produto = await response.data
            alert(`${produto.sucesso}`)
            push('/produtos/list')
        
        } catch (error) {
            alert(`Erro na inclusão ${descrisao}`)
        }
    }

    return(
        <div className="container col-md-9 ">
        <h1>Cadastro de produtos: {descrisao}</h1>

        <form onSubmit={handleSumit} >
            <div className="mb-3">
                <label htmlFor="exampleInputEmail1" className="htmlForm-label">Descrisao</label>
                <input type="text"value={descrisao} className="form-control"  placeholder='Informe a descrisao do produto' onChange={(event: ChangeEvent<HTMLInputElement>) => { setDescrisao(event.target.value) }} required />
            </div>
            <div className="mb-3">
                <label htmlFor="exampleInputEmail1" className="htmlForm-label">Valor Unitario</label>
                <input type="number" value={valorUnitario} className="form-control"  placeholder='Informe o valor unitariow do produto'onChange={(event: ChangeEvent<HTMLInputElement>) => { setValorUnitario(event.target.value) }} required />
            </div>

            <button type="submit" className="btn btn-primary">Cadastrar</button>
        </form>
       </div>
    )
}