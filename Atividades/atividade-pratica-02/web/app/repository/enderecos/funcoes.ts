import axios from 'axios'

export async function retornarTodosOsEnderecos(){
    
    // Rota GET usando Axios
    const response = await axios.get('http://localhost:5555/enderecos')
    const dados = await response.data
    return dados
}

export async function retornarEnderecosPorId(id: number){
    
    // Rota GET usando Axios
    const response = await axios.get(`http://localhost:5555/endereco/${id}`)
    const dados = await response.data
    return dados
}


