const { Tag, Cart } = require('../models');
const assert = require('assert');

const tagAssocController = {

  createCartAssoc: async (req, res) => {
    const cartId =  req.params.id;
    assert.ok(Number(cartId), 'enter a valid cart id');
    const tagId = req.params.tag;
    assert.ok(Number(tagId), 'enter a valid Tag id');

    try {
      const newStatus = await Status.create({ name });

      res.json(newStatus);

    } catch (error) {
      console.trace(error);
      res.status(500).json(error.toString());
    }
  },

  deleteCartAssoc: async (req, res) => {
    try {
      const assocId = req.params.id;
      assert.ok(Number(assocId), 'enter a valid assoc id');
      // todo create assoc model ?
      const assocToDelete = await Status.findByPk(assocId);
      await assocToDelete.destroy();

      res.json({ status: `assoc ${assocId} : correctly deleted` });

    } catch (error) {
      console.trace(error);
      res.status(500).json(error.toString());
    }
  }
};

module.exports = tagAssocController;
