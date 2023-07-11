import Data from "./Data.js"
export default class Produto {

   
    constructor(descrisao,valor) {
        this._descrisao = descrisao
        this._valorUnitario = valor
        this._criadoEm = Data.getData()
        this._atualizadoEm = Data.getData()
        this._id = 0
    }


    get  id()  {
        return this._id;
    }

    set id(value ){
        this._id = value;
    }


    get valorUnitario()  {
        return this._valorUnitario;
    }

    set valorUnitario(value ) {
        this._valorUnitario = value;
    }

    get descrisao()  {
        return this._descrisao;
    }

    set descrisao(value ) {
        this._descrisao = value;
    }

    get criadoEm()  {
        return this._criadoEm;
    }

    set criadoEm(value ) {
        this._criadoEm = value;
    }

    get atualizadoEm()  {
        return this._atualizadoEm;
    }

    set atualizadoEm(value ) {
        this._atualizadoEm = value;
    }


}
