export  class Produtos {

    private _rua: string ;
    private _numero: string;
    private _bairro: string;
    private _telefone: string;
    private _criadoEm : string;
    private _atualizadoEm: string ;

    constructor(rua: string,numero:string, bairro:string,telefone:string,criadoEm:string, atualizadoEm:string) {
        this._rua = rua ;
        this._numero = numero;
        this._bairro = bairro;
        this._telefone = telefone;
        this._criadoEm = criadoEm
        this._atualizadoEm = atualizadoEm
    }

    get numero(): string {
        return this._numero;
    }

    set numero(value: string) {
        this._numero = value;
    }

    get rua(): string {
        return this._rua;
    }

    set rua(value: string) {
        this._rua = value;
    }


    get criadoEm(): string {
        return this._criadoEm;
    }

    set criadoEm(value: string) {
        this._criadoEm = value;
    }

    get atualizadoEm(): string {
        return this._atualizadoEm;
    }

    set atualizadoEm(value: string) {
        this._atualizadoEm = value;
    }

    get telefone(): string {
        return this._telefone;
    }

    set telefone(value: string) {
        this._telefone = value;
    }

    get bairro(): string {
        return this._bairro;
    }

    set bairro(value: string) {
        this._bairro = value;
    }
}
