import axios from 'axios'

const excluirProduto = async (id: number) =>{

    const response =  await axios.delete(`http://localhost:5555/delete/produto/${id}`)
    return  response.data

}

export default function ExcluirProduto({params}: any){
   const id = params.id
    return (
           <div>

           </div>

    )
}