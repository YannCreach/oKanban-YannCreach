const assert = require('assert');
const entityDefinition = require('./entityDefinition');
const entities = ['cart', 'color', 'kanban', 'list', 'role', 'status', 'tag', 'utilisateur'];

const factoController = {

  getAll: async (req, res) => {
    const entity = req.params.entity.toLowerCase();
    assert.ok(entities.includes(entity) , 'enter a valid entity');
    const {sequelizeObject, includes} = entityDefinition.switcher(entity);

    try {
      const getAllByEntity = await sequelizeObject.findAll({
        include: includes
      });

      res.json(getAllByEntity);

    } catch (error) {
      console.trace(error);
      res.status(500).json(error.toString());
    }
  },

  getOne: async (req, res) => {
    const entity = req.params.entity.toLowerCase();
    assert.ok(entities.includes(entity) , 'enter a valid entity');
    const id = req.params.id;
    assert.ok(Number(id), 'enter a valid id');
    const {sequelizeObject, includes} = entityDefinition.switcher(entity);

    try {
      const getOneByEntity = await sequelizeObject.findByPk(id, {
        include: includes
      });

      res.json(getOneByEntity);

    } catch (error) {
      console.trace(error);
      res.status(500).json(error.toString());
    }
  },

  update: async (req, res) => {
    const entity = req.params.entity.toLowerCase();
    assert.ok(entities.includes(entity) , 'enter a valid entity');
    const id = req.params.id;
    assert.ok(Number(id), 'enter a valid id');
    const {sequelizeObject, columns} = entityDefinition.switcher(entity);

    try {
      //todo rename entity to entityToUpdate
      const entity = await sequelizeObject.findByPk(id);
      assert.ok(entity, 'enter a valid id');

      Object.keys(entity.dataValues).forEach((key, index) => {
        if (Object.keys(req.body).includes(columns[index])) {
          entity[key] = req.body[key];
        }
      });

      await entity.save();

      res.json(entity);

    } catch (error) {
      console.trace(error);
      res.status(500).json(error.toString());
    }
  },

  create: async (req, res) => {
    const entity = req.params.entity.toLowerCase();
    assert.ok(entities.includes(entity) , 'enter a valid entity');
    const {sequelizeObject, mandatory} = entityDefinition.switcher(entity);

    for (const columnName of mandatory) {
      assert.ok(columnName in req.body, `${columnName} is mandatory`);
      assert.ok(req.body[columnName], `${columnName} can't be null`);
    }

    try {
      const newEntity = await sequelizeObject.create( req.body );

      res.json(newEntity);

    } catch (error) {
      console.trace(error);
      res.status(500).json(error.toString());
    }
  },

  delete: async (req, res) => {
    const entity = req.params.entity.toLowerCase();
    assert.ok(entities.includes(entity) , 'enter a valid entity');
    const id = req.params.id;
    assert.ok(Number(id), 'enter a valid id');
    const {sequelizeObject} = entityDefinition.switcher(entity);

    try {
      const entityToDelete = await sequelizeObject.findByPk(id);
      await entityToDelete.destroy();

      res.json({ status: `${entity} > ${id} : correctly deleted` });

    } catch (error) {
      console.trace(error);
      res.status(500).json(error.toString());
    }
  }
};

module.exports = factoController;
