import Data from "./Data.js"

export default class Enderecos {
    constructor(usuarioId,rua,numero,bairo,cidadeId,telefone){
        this.id = 0
        this.usuarioId = usuarioId
        this.rua = rua
        this.numero = numero
        this.bairro = bairo
        this.cidadeId = cidadeId
        this.telefone = telefone
        this.criadoEm = Data. getData()
        this.atualizadoEm = Data.getData()

    }
}
