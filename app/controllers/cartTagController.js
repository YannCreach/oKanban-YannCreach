const { Tag, Cart } = require('../models');

// const quiz = await Quiz.findByPk(quizId, {
//   include: [
//     {
//       association: "questions",
//       include: ["level", "answers"]
//     },
//     "author",
//     "tags",
//   ]
// });

const cartTagController = {

  getAll: async (req, res) => {
    try {
      const status = await Tag.findAll({
        include: ['status_list', 'status_cart']
      });

      res.json(status);

    } catch (error) {
      console.trace(error);
      res.status(500).json(error.toString());
    }
  },

  getOne: async (req, res) => {
    try {
      const status = await Tag.findByPk(req.params.id, {
        include: ['status_list', 'status_cart']
      });

      res.json(status);

    } catch (error) {
      console.trace(error);
      res.status(500).json(error.toString());
    }
  },

  update: async (req, res) => {
    try {
      const id = req.params.id;
      const name = req.body.name;

      await Status.update(
        {
          name,
        },
        { where: { id } }
      );

      res.json(await Status.findByPk(id));

    } catch (error) {
      console.trace(error);
      res.status(500).json(error.toString());
    }
  },

  create: async (req, res) => {
    const name = req.body.name;

    try {
      const newStatus = await Status.create({ name });

      res.json(newStatus);

    } catch (error) {
      console.trace(error);
      res.status(500).json(error.toString());
    }
  },

  delete: async (req, res) => {
    try {
      const status_id = req.params.id;
      const statusToDelete = await Status.findByPk(status_id);
      await statusToDelete.destroy();
      res.json(statusToDelete);

    } catch (error) {
      console.trace(error);
      res.status(500).json(error.toString());
    }
  }
};

module.exports = cartTagController;
