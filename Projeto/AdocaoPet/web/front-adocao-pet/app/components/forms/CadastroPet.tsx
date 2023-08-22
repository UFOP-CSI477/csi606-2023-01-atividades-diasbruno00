'use client'

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';

import { FormEvent} from "react"
import axios from 'axios'
import { useRouter } from "next/navigation"
import Swal from 'sweetalert2';

// htmlFormulario
export default function CreatePet() {

    const { push } = useRouter()
   
    const handleSumit = async (event: FormEvent) => {

        const nome = document.getElementById('nome') as HTMLInputElement
        const idade = document.getElementById('idade') as HTMLInputElement
        const sexo = document.getElementById('sexo') as HTMLInputElement
        const tipo = document.getElementById('tipo') as HTMLInputElement
        const raca = document.getElementById('raca') as HTMLInputElement
        const estado = document.getElementById('estado') as HTMLInputElement
        const cidade = document.getElementById('cidade') as HTMLInputElement

        event.preventDefault();

        const data = {
            nome: nome.value,
            idade: idade.value,
            sexo: sexo.value,
            tipo: tipo.value,
            raca: raca.value,
            estado: estado.value,
            cidade: cidade.value,
        }
        console.log(data)
        try {

            const response = await axios.post('http://localhost:3333/pet', data)
            const pet = await response.data
            await Swal.fire(
                'Good job!',
                `${pet.nome} salvo com sucesso`,
                'success'
              )
              push('/pet/edit/list')

        } catch (error) {
            alert(`Erro na inclusão ${nome}`)
        }
    }

    return (
   
        <div className="container col-md-8 p-4"  >
            <form onSubmit={handleSumit} >
                <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="htmlForm-label">nome</label>
                    <input type="text" name='nome' id='nome'  className="form-control"  />
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="htmlForm-label">idade</label>
                    <input type="number" name='idade' id='idade'className="form-control" min={0} max={100} />
                </div>
                
                <div className="mb-3">
                <select name='sexo' id="sexo" className="form-select" aria-label="Default select example">
                    <option selected>Sexo</option>
                    <option value="Macho">Macho</option>
                    <option value="Femea">Fémea</option>
                </select>
                </div>

                <div className="mb-3 htmlForm-check">
                    <label htmlFor="exampleInputEmail1" className="htmlForm-label">Tipo</label>
                    <input type="text" name='tipo' id='tipo' className="form-control"   />
                </div>

                <div className="mb-3 htmlForm-check">
                    <label htmlFor="exampleInputEmail1" className="htmlForm-label">raca</label>
                    <input type="text" name='raca' id='raca' className="form-control"   />
                </div>

                <div className="mb-3 htmlForm-check">
                    <label htmlFor="exampleInputEmail1" className="htmlForm-label">estado</label>
                    <input type="text" name='estado' id='estado'className="form-control"   />

                </div>
                <div className="mb-3 htmlForm-check">
                    <label htmlFor="exampleInputEmail1" className="htmlForm-label">cidade</label>
                    <input type="text" name='cidade' id='cidade' className="form-control" />
                </div>


                <button type="submit" className="btn btn-success" > Confirmar </button>
            </form>
        </div>

    )

}