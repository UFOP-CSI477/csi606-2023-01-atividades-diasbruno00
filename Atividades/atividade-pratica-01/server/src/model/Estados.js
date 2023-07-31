import Data from "./Data.js"

export default class Estados {
    
  

    constructor(nome, sigla) {
        this.id = 0
        this.nomeEstado = nome
        this.sigla = sigla
        this.criadoEm = Data.getData()
        this.atualizadoEm = Data.getData()
    }

 
}