import Data from "./Data.js"

export default class Estados {
    
  

    constructor(nome, sigla) {
        this._id = 0
        this._nome = nome
        this._sigla = sigla
        this._criadoEm = Data.getData()
        this._atualizadoEm = Data.getData()
    }

 
     get id()  {
        return this._id
    }

     set id(value ) {
        this._id = value
    }

     get nome()  {
        return this._nome
    }

     set nome(value ) {
        this._nome = value
    }

     get sigla()  {
        return this._sigla
    }

     set sigla(value ) {
        this._sigla = value
    }

     get criadoEm()  {
        return this._criadoEm
    }

     set criadoEm(value ) {
        this._criadoEm = value
    }

     get atualizadoEm()  {
        return this._atualizadoEm
    }

     set atualizadoEm(value ) {
        this._atualizadoEm = value
    }
}