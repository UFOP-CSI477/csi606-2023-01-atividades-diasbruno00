
import Data from './Data.js'

export default class Compras {
    constructor(usuarioId,enderecoId,data){
        this.id = 0
        this.usuarioId = usuarioId
        this.enderecoId = enderecoId
        this.data = data
        this.criadoEm = Data.getData()
        this.atualizadoEm = Data.getData()

    }
}