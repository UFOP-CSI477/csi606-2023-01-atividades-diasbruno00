'use client'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import axios from 'axios';
import { ChangeEvent, FormEvent, useEffect, useState } from "react"
import { useRouter } from "next/navigation";
import { retornaTodosOsUsuarios } from '@/app/repository/usuarios/funcoes';
import { retornaTodosAsCidades } from '@/app/repository/cidades/funcoes';

export default function CreateEnderecos() {

  const { push } = useRouter()

  const [rua, setRua] = useState('')
  const [numero, setNumero] = useState('')
  const [bairro, setBairro] = useState('')
  const [telefone, setTelefone] = useState('')
  const [usuarioId, setUsuarioId] = useState('')
  const [cidadeId, setCidadeId] = useState('')
  const [cidade, setCidade] = useState<any>([])
  const [usuario, setUsuario] = useState<any>([])


  useEffect(() => {

    retornaTodosAsCidades().then(data => setCidade(data))
      .catch(error => console.log(error))

    retornaTodosOsUsuarios().then(data => setUsuario(data))
      .catch(error => console.log(error))

  }, [])



  const handleSumit = async (event: FormEvent) => {

    event.preventDefault()

    const data = {
      usuarioId,
      rua,
      numero,
      bairro,
      cidadeId,
      telefone
    }
    console.log(data)
    try {

      const response = await axios.post('http://localhost:5555/endereco', data)
      const endereco = await response.data
      if(endereco.sucesso){
        alert(endereco.sucesso)
        push('/enderecos/list')
      }else{
        alert(endereco.erro)
      }

    } catch (error) {
      alert(`Erro na inclusão `)
    }
  }

  return (    
  <div className='container col-md-9 p-5'>
      <h1>Cadastro de Enderecos: {rua}</h1>

      <form onSubmit={handleSumit} >

        <div>
          <label htmlFor="usuario">Usuario</label>
          <select className="form-select" aria-label="Default select example" name="usuario" value={usuarioId} onChange={(event) => setUsuarioId(event.target.value)}>
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

          <label htmlFor="cidade">Cidade</label>
          <select className="form-select" aria-label="Default select example" name="cidade" value={cidadeId} onChange={(event) => setCidadeId(event.target.value)}>
            <option value="" selected disabled> Selecione</option>
            {
              cidade.map((cidade: any) => {
                return (
                  <option key={cidade.id} value={cidade.id}> {cidade.nomeCidade} </option>
                )
              })
            }
          </select>
        </div>
        <div className="mb-3">
          <label htmlFor="exampleFormControlInput1" className="form-label">Rua</label>
          <input type="text" value={rua} className="form-control" placeholder='Informe a rua' onChange={(event: ChangeEvent<HTMLInputElement>) => { setRua(event.target.value) }} required />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleFormControlInput1" className="form-label">Numero</label>
          <input type="number" value={numero} className="form-control" placeholder='Informe o numero' onChange={(event: ChangeEvent<HTMLInputElement>) => { setNumero(event.target.value) }} required />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleFormControlInput1" className="form-label">Bairro</label>
          <input type="text" value={bairro} className="form-control" placeholder='Informe o bairro' onChange={(event: ChangeEvent<HTMLInputElement>) => { setBairro(event.target.value) }} required />
        </div>

        <div className="mb-3">
          <label htmlFor="exampleFormControlInput1"className="form-label">Telefone</label>
          <input type="text" value={telefone} className="form-control" placeholder='Informe o telefone' onChange={(event: ChangeEvent<HTMLInputElement>) => { setTelefone(event.target.value) }} required />
        </div>


        <button type="submit" className="btn btn-primary">Cadastrar</button>
      </form>
    </div>
  )
}