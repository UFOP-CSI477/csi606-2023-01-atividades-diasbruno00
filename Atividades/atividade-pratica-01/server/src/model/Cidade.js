import Data from "./Data.js"
export default class Cidades {

  

    constructor(nome, estadoId) {
        this._nome = nome
        this._estadoId = estadoId
        this._criadoEm = Data.getData()
        this._atualizadoEm = Data.getData()
        this._id = 0

    }

     get atualizadoEm()  {
        return this._atualizadoEm
    }
     set atualizadoEm(value ) {
        this._atualizadoEm = value
    }

     get criadoEm()  {
        return this._criadoEm
    }
     set criadoEm(value ) {
        this._criadoEm = value
    }
     get estadoId()  {
        return this._estadoId
    }
     set estadoId(value ) {
        this._estadoId = value
    }
     get nome()  {
        return this._nome
    }
     set nome(value ) {
        this._nome = value
    }

     get id()  {
        return this._id
    }
     set id(value ) {
        this._id = value
    }
}