export  class Produto {

   private _descrisao: string
   private _valorUnitario: number
   private _criadoEm: string
   private _atualizadoEm: string

    constructor(descrisao:string,valor:number) {
        this._descrisao = descrisao
        this._valorUnitario = valor
        this._criadoEm = this.getData()
        this._atualizadoEm = this.getData()
    }


    public  getData = (): string =>{

        const date = new Date()
        const data = date.toLocaleDateString()

        console.log(`valor da minha data : ${data}`)
        return data

    }

    public getHora = (): string =>{

        const date = new Date()

        const hora = date.toLocaleTimeString()

        console.log(`valor da minha hora : ${hora}`)

        return hora

    }


    get valorUnitario(): number {
        return this._valorUnitario;
    }

    set valorUnitario(value: number) {
        this._valorUnitario = value;
    }

    get descrisao(): string {
        return this._descrisao;
    }

    set descrisao(value: string) {
        this._descrisao = value;
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


}
