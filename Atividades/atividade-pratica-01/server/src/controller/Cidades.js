import CidadesDao from "../database/CidadesDao.js"
import Cidades from "../model/Cidade.js"

export default class ControllerCidades {
    
    constructor(){
        this.bancoCidades = new CidadesDao()
    }


     salvarCidade = (req, res ) => {

        const {nome, estadoId} = req.body
        const cidade  = new Cidades(nome,estadoId)
        try {
            this.bancoCidades.salvarCidadeNoBD(cidade)
        } catch (error) {
            console.log(error)

            res.json({erro:`erro ao salvar cidade: ${nome}`})
            
        }
        res.json({cidade})

    }
    
     recuperarTodasCidades = async (req   , res  ) => {
        let listaDeCidades
        try {
            listaDeCidades = await this.bancoCidades.listaDeCidades()
        } catch (error) {
            console.log(error)
            res.json({erro : `erro ao listar todas as cidades`})
        }
        res.json({listaDeCidades})
    }

     excluirCidade =  (req  , res ) => {
          const id = parseInt ( req.params.id )

          try {

            this.bancoCidades.deleteCidades(id)
            
          } catch (error) {
            console.log(error)
            res.json({erro: `erro ao exluir cidade : ${id}`})
          }
          res.json({sucesso: `cidade id: ${id} excluido com suceso`})

    }

     atualizarCidade =  (req  , res ) => {

        const {nome,estadoId} = req.body
        const id  = parseInt(req.params.id)
        const cidade = new Cidades(nome,estadoId)
        try {
            this.bancoCidades.updateCidades(cidade,id)
        } catch (error) {
            console.log(error)
            res.json({erro: `erro ao atualizar cidade id ${id}`})
        }
       res.json({cidade})
    }


     recuperarCidadePorId = async (req , res ) => {

        const id = parseInt(req.params.id)

        let cidade

        try {

            cidade = await this.bancoCidades.buscaCidadePorId(id)

        } catch (error) {
            res.json({ erro: `erro ao lista cidade do id ${id}` })
        }

        res.json({ cidade })
    }

     recuperarCidadePorNome = async (req , res ) => {

        const nome = req.params.nome
        
        let cidade

        try {
            cidade = await this.bancoCidades.buscaCidadePorDescrisao(nome)

        } catch (error) {
            res.json({ erro: `erro ao lista cidade do nome ${nome}` })
        }
    
        res.json({ cidade })
    }
}