import axios from 'axios'

export async function retornaTodosOsUsuarios (){
        const response = await axios.get('http://localhost:5555/usuarios')
        const dados =  await response.data
        return dados
}