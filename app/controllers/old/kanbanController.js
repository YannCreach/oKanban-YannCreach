const { Kanban } = require('../models');

const kanbanController = {

  getAll: async (req, res) => {
    try {
      const kanbans = await Kanban.findAll({
        include: ['kanban_owner']
      });

      res.json(kanbans);

    } catch (error) {
      console.trace(error);
      res.status(500).json(error.toString());
    }
  },

  getOne: async (req, res) => {
    try {
      const kanban = await Kanban.findByPk(req.params.id, {
        include: ['kanban_owner']
      });

      res.json(kanban);

    } catch (error) {
      console.trace(error);
      res.status(500).json(error.toString());
    }
  },

  update: async (req, res) => {
    try {
      const id = req.params.id;
      const name = req.body.name;
      const description = req.body.name;

      await Kanban.update(
        {
          name,
          description,
        },
        { where: { id } }
      );

      res.json(await Kanban.findByPk(id));

    } catch (error) {
      console.trace(error);
      res.status(500).json(error.toString());
    }
  },

  create: async (req, res) => {
    const owner_id = req.body.owner;
    const name = req.body.name;
    const description = req.body.name;

    try {
      const newKanban = await Kanban.create({ owner_id, name, description});

      res.json(newKanban);

    } catch (error) {
      console.trace(error);
      res.status(500).json(error.toString());
    }
  },

  delete: async (req, res) => {
    try {
      const kanban_id = req.params.id;
      const kanbanToDelete = await Kanban.findByPk(kanban_id);
      await kanbanToDelete.destroy();
      res.json(kanbanToDelete);

    } catch (error) {
      console.trace(error);
      res.status(500).json(error.toString());
    }
  }
};

module.exports = kanbanController;
