import Data from "./Data.js"
export default class Usuarios {
    


    constructor(nome, email, senha) {
        this._nome = nome
        this._email = email
        this._senha = senha
        this._criadoEm = Data.getData()
        this._atualizadoEm = Data.getData()
        this._id = 0
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
     get email()  {
        return this._email
    }
     set email(value ) {
        this._email = value
    }

     get senha()  {
        return this._senha
    }
     set senha(value ) {
        this._senha = value
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