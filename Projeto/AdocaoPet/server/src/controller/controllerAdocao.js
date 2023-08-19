import AdocaoDao from '../database/adocaoDao.js'
import PetDao from '../database/petDao.js';
import UsuarioDao from '../database/usuarioDao.js';

export default class ControllerAdocao {

    constructor(){

    }

    async salvar(req, res){
        try {

            const { idUsuario , idPet, informacoes} = req.body
          
            const dados = await AdocaoDao.create({
                usuario: idUsuario,
                pet: idPet,
                informacoes: informacoes,
                status: 'Em analise'
            })
     
            res.json({sucesso: 'Seu pedido esta em analise, logo entraremos em contato com voçê'})

        } catch (error) {
            console.log(error)
            res.json({erro: 'erro verifique com a equipe de TI'})
        }
    
    }

    async recuperarTodos(req, res){

        try {
            
            const lista = await AdocaoDao.find().populate('usuario').populate('pet')

            res.json(lista)
            
        } catch (error) {

            console.log(error)
            res.json({ erro: "algo deu errodo verifique com a equipe de TI" });
            
        }
    
    }
}