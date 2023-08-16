import axios from 'axios'

export async function retornaTodasAsCompras (){
    const response = await axios.get('http://localhost:5555/compras')
    const dados =  await response.data
    return dados
}

export async function retornaComprasPorId (id: number){
    const response = await axios.get(`http://localhost:5555/compra/${id}`)
    const dados =  await response.data
    return dados
}