import axios from 'axios'

export async function retornaTodosAsCidades () {
        const response = await axios.get('http://localhost:5555/cidades')
        const dados =  await response.data
        return dados
}