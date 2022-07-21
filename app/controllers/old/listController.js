const { List } = require('../models');

const listController = {

  getAll: async (req, res) => {
    try {
      const lists = await List.findAll({
        include: ['list_tag', 'list_color', 'list_status']
      });

      res.json(lists);

    } catch (error) {
      console.trace(error);
      res.status(500).json(error.toString());
    }
  },

  getOne: async (req, res) => {
    try {
      const list = await List.findByPk(req.params.id, {
        include: ['list_tag', 'list_color', 'list_status']
      });

      res.json(list);

    } catch (error) {
      console.trace(error);
      res.status(500).json(error.toString());
    }
  },

  update: async (req, res) => {
    try {
      const id = req.params.id;
      const name = req.body.name;
      const description = req.body.description;
      const status_id = req.body.status;
      const color_id = req.body.color;
      const pinned = req.body.pinned;
      const position = req.body.position;


      await List.update(
        {
          name,
          description,
          status_id,
          color_id,
          pinned,
          position
        },
        { where: { id } }
      );

      res.json(await List.findByPk(id));

    } catch (error) {
      console.trace(error);
      res.status(500).json(error.toString());
    }
  },

  create: async (req, res) => {
    const name = req.body.name;
    const description = req.body.name;
    const kanban_id = req.body.kanban_id;
    const status_id = req.body.status_id;
    const color_id = req.body.color_id;

    try {
      const newList = await List.create({ name, description, kanban_id, status_id, color_id});

      res.json(newList);

    } catch (error) {
      console.trace(error);
      res.status(500).json(error.toString());
    }
  },

  delete: async (req, res) => {
    try {
      const list_id = req.params.id;
      const listToDelete = await List.findByPk(list_id);
      await listToDelete.destroy();
      res.json(listToDelete);

    } catch (error) {
      console.trace(error);
      res.status(500).json(error.toString());
    }
  }
};

module.exports = listController;
