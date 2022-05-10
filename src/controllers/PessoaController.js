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
}

module.exports = PessoaController;
