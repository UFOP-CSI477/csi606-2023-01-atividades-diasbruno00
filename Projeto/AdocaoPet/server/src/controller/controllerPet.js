import PetDao from "../database/petDao.js";
import Pet from "../model/pet.js";


export default class ControllerPet {
  constructor() {}

  async salvar(req, res) {
    const { nome, raca, idade, tipo, sexo, estado, cidade } = req.body;
    

    try {

      const pet = new Pet(nome, idade, sexo,tipo ,raca, estado, cidade);

      const petSalvo = await PetDao.create(pet);

      res.json(petSalvo);
    } catch (error) {
      console.log(error);
      res.json({ erro: "algo deu errado verifique com a equipe de TI" });
    }
  }

  async recuperarTodos(req, res) {
    try {
      const listaPet = await PetDao.find();
      console.log(listaPet)

      res.json(listaPet);
    } catch (error) {
      console.log(error);
      res.json({ erro: "algo deu errodo verifique com a equipe de TI" });
    }
  }

  async recuperarPetPorId(req, res) {
    try {
      const {id} = req.params;
      
      const listaPet = await PetDao.findById(id);

      res.json(listaPet);
      
    } catch (error) {
      console.log(error);
      res.json({ erro: "algo deu errodo verifique com a equipe de TI" });
    }
  }
}
