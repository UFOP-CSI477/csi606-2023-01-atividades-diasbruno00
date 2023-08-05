import AdocaoDao from '../database/adocaoDao.js'
import PetDao from '../database/petDao.js';
import UsuarioDao from '../database/usuarioDao.js';

export default class ControllerAdocao {

    constructor(){

    }

    async salvar(req, res){
        try {

            const {idUsuario, idPet} = req.body

            const usuario = await UsuarioDao.findById(idUsuario);
            const pet = await PetDao.findById(idPet);
        
            const adocaoData = {
              usuario: usuario,
              pet: pet,
            };
        
            const adocao = await AdocaoDao.create(adocaoData)

            res.json(adocao)
        } catch (error) {
            
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