const database = require('../models');

class NivelController {
  static async getNiveis(req, res) {
    try {
      const getNiveis = await database.Niveis.findAll();

      return res.status(200).json(getNiveis);
    } catch (error) {
      return res.status(500).json(error.message);
    }
  }
}

module.exports = NivelController;
