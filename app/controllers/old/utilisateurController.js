const { Utilisateur } = require('../models');

const utilisateurController = {

  getAll: async (req, res) => {
    try {
      const utilisateurs = await Utilisateur.findAll({
        include: ['utilisateur_role', 'utilisateur_kanban']
      });

      res.json(utilisateurs);

    } catch (error) {
      console.trace(error);
      res.status(500).json(error.toString());
    }
  },

  getOne: async (req, res) => {
    try {
      const utilisateur = await Utilisateur.findByPk(req.params.id, {
        include: ['utilisateur_role', 'utilisateur_kanban']
      });

      res.json(utilisateur);

    } catch (error) {
      console.trace(error);
      res.status(500).json(error.toString());
    }
  },

  update: async (req, res) => {
    try {
      const id = req.params.id;
      const firstname = req.body.firstname;
      const lastname = req.body.lastname;
      const email = req.body.email;
      const password = req.body.password;
      const role_id = req.body.role;

      await Utilisateur.update(
        {
          firstname,
          lastname,
          email,
          password,
          role_id
        },
        { where: { id } }
      );

      res.json(await Utilisateur.findByPk(id));

    } catch (error) {
      console.trace(error);
      res.status(500).json(error.toString());
    }
  },

  create: async (req, res) => {
    const firstname = req.body.firstname;
    const lastname = req.body.lastname;
    const email = req.body.email;
    const password = req.body.password;
    const role_id = req.body.role;

    try {
      const newUtilisateur = await Utilisateur.create({ firstname, lastname, email, password, role_id});

      res.json(newUtilisateur);

    } catch (error) {
      console.trace(error);
      res.status(500).json(error.toString());
    }
  },

  delete: async (req, res) => {
    try {
      const utilisateur_id = req.params.id;
      const utilisateurToDelete = await Utilisateur.findByPk(utilisateur_id);
      await utilisateurToDelete.destroy();
      res.json(utilisateurToDelete);

    } catch (error) {
      console.trace(error);
      res.status(500).json(error.toString());
    }
  }
};

module.exports = utilisateurController;
