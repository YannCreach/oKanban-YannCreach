const { Role } = require('../models');

const roleController = {

  getAll: async (req, res) => {
    try {
      const roles = await Role.findAll({
        include: ['kanban_owner']
      });

      res.json(roles);

    } catch (error) {
      console.trace(error);
      res.status(500).json(error.toString());
    }
  },

  getOne: async (req, res) => {
    try {
      const role = await Role.findByPk(req.params.id, {
        include: ['role_utilisateur']
      });

      res.json(role);

    } catch (error) {
      console.trace(error);
      res.status(500).json(error.toString());
    }
  },

  update: async (req, res) => {
    try {
      const id = req.params.id;
      const name = req.body.name;

      await Role.update(
        {
          name,
        },
        { where: { id } }
      );

      res.json(await Role.findByPk(id));

    } catch (error) {
      console.trace(error);
      res.status(500).json(error.toString());
    }
  },

  create: async (req, res) => {
    const name = req.body.name;

    try {
      const newRole = await Role.create({ name });

      res.json(newRole);

    } catch (error) {
      console.trace(error);
      res.status(500).json(error.toString());
    }
  },

  delete: async (req, res) => {
    try {
      const role_id = req.params.id;
      const roleToDelete = await Role.findByPk(role_id);
      await roleToDelete.destroy();
      res.json(roleToDelete);

    } catch (error) {
      console.trace(error);
      res.status(500).json(error.toString());
    }
  }
};

module.exports = roleController;
