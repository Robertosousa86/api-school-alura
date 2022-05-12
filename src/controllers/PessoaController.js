const database = require('../models');

class PessoaController {
  static async getPessoas(req, res) {
    try {
      const getPessoas = await database.Pessoas.findAll();

      return res.status(200).json(getPessoas);
    } catch (error) {
      return res.status(500).json(error.message);
    }
  }

  static async getPessoasById(req, res) {
    const { id } = req.params;

    try {
      const onePeople = await database.Pessoas.findOne({
        where: { id: Number(id) },
      });

      return res.status(200).json(onePeople);
    } catch (error) {
      return res.status(500).json(error.message);
    }
  }

  static async createPessoa(req, res) {
    const newPeople = req.body;

    try {
      const newCreatedPeople = await database.Pessoas.create(newPeople);

      return res.status(200).json(newCreatedPeople);
    } catch (error) {
      return res.status(500).json(error.message);
    }
  }
}

module.exports = PessoaController;
