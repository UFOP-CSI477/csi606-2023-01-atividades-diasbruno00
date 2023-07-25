
import Data from './Data.js'

export default class Compras {
    constructor(usuarioId,enderecoId,){
        this.id = 0
        this.usuarioId = usuarioId
        this.enderecoId = enderecoId
        this.data = Data.getData()
        this.criadoEm = Data.getData()
        this.atualizadoEm = Data.getData()

    }
}