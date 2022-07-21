const { Tag } = require('../models');

const tagController = {

  getAll: async (req, res) => {
    try {
      const tags = await Tag.findAll({
        include: ['tag_list', 'tag_cart']
      });

      res.json(tags);

    } catch (error) {
      console.trace(error);
      res.status(500).json(error.toString());
    }
  },

  getOne: async (req, res) => {
    try {
      const tag = await Tag.findByPk(req.params.id, {
        include: ['tag_list', 'tag_cart']
      });

      res.json(tag);

    } catch (error) {
      console.trace(error);
      res.status(500).json(error.toString());
    }
  },

  update: async (req, res) => {
    try {
      const id = req.params.id;
      const name = req.body.name;

      await Tag.update(
        {
          name,
        },
        { where: { id } }
      );

      res.json(await Tag.findByPk(id));

    } catch (error) {
      console.trace(error);
      res.status(500).json(error.toString());
    }
  },

  create: async (req, res) => {
    const name = req.body.name;

    try {
      const newTag = await Tag.create({ name });

      res.json(newTag);

    } catch (error) {
      console.trace(error);
      res.status(500).json(error.toString());
    }
  },

  delete: async (req, res) => {
    const tag_id = req.params.id;
    const tagToDelete = await Tag.findByPk(tag_id);

    try {
      await tagToDelete.destroy();

      res.json({ status: 'ok' });

    } catch (error) {
      console.trace(error);
      res.status(500).json(error.toString());
    }
  }
};

module.exports = tagController;
