const { Cart } = require('../models');
const assert = require('assert');

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

      const id = req.params.id;
      assert.ok(Number(id), 'id is required and is a number');

      const cart = await Cart.findByPk(id, {
        include: ['cart_tag', 'cart_color', 'cart_status']
      });

      if(!cart) {
        return res.status(404).json({});
      }

      res.json(cart);

    } catch (error) {
      console.trace(error);
      res.status(500).json(error.toString());
    }
  },

  update: async (req, res) => {

    const id = req.params.id;
    assert.ok(Number(id), 'id is required and is a number');

    const { name, status_id, position, deadline, description, color_id, attachment, pinned } = req.body;

    try {

      const cart = await Cart.findByPk(id);

      if (name) cart.name = name;
      if (status_id) cart.status_id = status_id;
      if (position) cart.position = position;
      if (deadline) cart.deadline = deadline;
      if (description) cart.description = description;
      if (color_id) cart.color_id = color_id;
      if (attachment) cart.attachment = attachment;
      if (pinned) cart.pinned = pinned;

      await cart.save();

      res.json(cart);

    } catch (error) {
      console.trace(error);
      res.status(500).json(error.toString());
    }
  },

  create: async (req, res) => {

    const { list_id, name, status_id, position, deadline, description, color_id, attachment, pinned } = req.body;

    assert.ok(list_id, 'list can\'t be empty');
    assert.ok(name, 'name can\'t be empty');

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
