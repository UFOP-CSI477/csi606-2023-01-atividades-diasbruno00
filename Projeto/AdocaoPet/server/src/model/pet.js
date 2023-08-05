
export default class Pet {
    constructor(nome,idade,sexo,raca, estado, cidade){
        this.nome = nome
        this.idade = idade
        this.sexo = sexo
        this.raca = raca
        this.estado = estado
        this.cidade = cidade
        this.status = 'Disponivel para adoção'
    }
}