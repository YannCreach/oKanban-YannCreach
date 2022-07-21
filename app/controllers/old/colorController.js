const { Color } = require('../models');

const colorController = {

  getAll: async (req, res) => {
    try {
      const colors = await Color.findAll({
        include: ['color_list', 'color_cart']
      });

      res.json(colors);

    } catch (error) {
      console.trace(error);
      res.status(500).json(error.toString());
    }
  },

  getOne: async (req, res) => {
    try {
      const color = await Color.findByPk(req.params.id, {
        include: ['color_list', 'color_cart']
      });

      res.json(color);

    } catch (error) {
      console.trace(error);
      res.status(500).json(error.toString());
    }
  },

  update: async (req, res) => {
    try {
      const id = req.params.id;
      const name = req.body.name;

      await Color.update(
        {
          name,
        },
        { where: { id } }
      );

      res.json(await Color.findByPk(id));

    } catch (error) {
      console.trace(error);
      res.status(500).json(error.toString());
    }
  },

  create: async (req, res) => {
    const name = req.body.name;

    try {
      const newColor = await Color.create({ name });

      res.json(newColor);

    } catch (error) {
      console.trace(error);
      res.status(500).json(error.toString());
    }
  },

  delete: async (req, res) => {
    try {
      const color_id = req.params.id;
      const colorToDelete = await Color.findByPk(color_id);
      await colorToDelete.destroy();
      res.json(colorToDelete);

    } catch (error) {
      console.trace(error);
      res.status(500).json(error.toString());
    }
  }
};

module.exports = colorController;
