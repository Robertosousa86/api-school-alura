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

  static async getNivelById(req, res) {
    const { id } = req.params;
    try {
      const oneNivel = await database.Niveis.findOne({
        where: { id: Number(id) },
      });

      return res.status(200).json(oneNivel);
    } catch (error) {
      return res.status(500).json(error.message);
    }
  }

  static async createNivel(req, res) {
    const newNivel = req.body;
    try {
      const createNewNivel = await database.Niveis.create(newNivel);

      return res.status(200).json(createNewNivel);
    } catch (error) {
      return res.status(500).json(error.message);
    }
  }

  static async updateNivel(req, res) {
    const { id } = req.params;
    const newData = req.body;

    try {
      await database.Niveis.update(newData, {
        where: { id: Number(id) },
      });

      const updatedNivel = await database.Niveis.findOne({
        where: { id: Number(id) },
      });
      res.status(200).json(updatedNivel);
    } catch (error) {
      return res.status(500).json(error.message);
    }
  }

  static async deleteNivel(req, res) {
    const { id } = req.params;

    try {
      await database.Niveis.destroy({
        where: { id: Number(id) },
      });

      return res.status(200).json({ message: `O nível ${id} foi deletado.` });
    } catch (error) {
      return res.status(500).json(error.message);
    }
  }
}

module.exports = NivelController;
