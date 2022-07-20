const { Cart } = require('../models');

const cartController = {

  getAll: async (req, res) => {
    try {
      const carts = await Cart.findAll({
        include: ['cart_tag', 'cart_color', 'cart_status']
      });

      res.json(carts);

    } catch (error) {
      console.trace(error);
      res.status(500).json(error.toString());
    }
  },

  getOne: async (req, res) => {
    try {
      const cart = await Cart.findByPk(req.params.id, {
        include: ['cart_tag', 'cart_color', 'cart_status']
      });

      res.json(cart);

    } catch (error) {
      console.trace(error);
      res.status(500).json(error.toString());
    }
  },

  update: async (req, res) => {
    try {
      const id = req.params.id;
      const name = req.body.name;
      const status_id = req.body.status;
      const position = req.body.position;
      const deadline = req.body.deadline;
      const description = req.body.description;
      const color_id = req.body.color;
      const attachment = req.body.attachment;
      const pinned = req.body.pinned;

      await Cart.update(
        {
          name,
          status_id,
          position,
          deadline,
          description,
          color_id,
          attachment,
          pinned,

        },
        { where: { id } }
      );

      res.json(await Cart.findByPk(id));

    } catch (error) {
      console.trace(error);
      res.status(500).json(error.toString());
    }
  },

  create: async (req, res) => {
    const list_id = req.body.status;
    const name = req.body.name;
    const status_id = req.body.status;
    const position = req.body.position;
    const deadline = req.body.deadline;
    const description = req.body.description;
    const color_id = req.body.color;
    const attachment = req.body.attachment;
    const pinned = req.body.pinned;

    try {
      const newCart = await Cart.create({ list_id, name, status_id, position, deadline, description, color_id, attachment, pinned});

      res.json(newCart);

    } catch (error) {
      console.trace(error);
      res.status(500).json(error.toString());
    }
  },

  delete: async (req, res) => {
    try {
      const cart_id = req.params.id;
      const cartToDelete = await Cart.findByPk(cart_id);
      await cartToDelete.destroy();
      res.json(cartToDelete);

    } catch (error) {
      console.trace(error);
      res.status(500).json(error.toString());
    }
  }
};

module.exports = cartController;
