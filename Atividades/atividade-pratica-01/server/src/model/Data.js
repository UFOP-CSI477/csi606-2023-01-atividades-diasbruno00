export default class Data {

     static getData = ()  => {

        const date = new Date()
        const data = date.toLocaleDate()

        return data

    }

     static getHora = ()  => {

        const date = new Date()

        const hora = date.toLocaleTime()

        return hora

    }

}