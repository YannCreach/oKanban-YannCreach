const { Cart, Color, Kanban, List, Role, Status, Tag, Utilisateur } = require('../models');
let sequelizeObject, includes, columns, mandatory;

const entityDefinition = {

  switcher(entityName) {

    switch (entityName) {
    case 'cart':
      sequelizeObject = Cart;
      includes = ['cart_tag', 'cart_color', 'cart_status'];
      columns = ['id', 'name', 'position', 'deadline', 'description', 'attachment', 'pinned', 'list_id', 'status_id', 'color_id', 'created_at', 'updated_at'];
      mandatory = ['name', 'list_id'];
      break;

    case 'color':
      sequelizeObject = Color;
      includes = ['color_list', 'color_cart'];
      columns = ['id', 'name', 'created_at', 'updated_at'];
      mandatory = ['name'];
      break;

    case 'kanban':
      sequelizeObject = Kanban;
      includes = ['kanban_owner'];
      columns = ['id', 'owner_id', 'name', 'description', 'created_at', 'updated_at'];
      mandatory = ['owner_id', 'name'];
      break;

    case 'list':
      sequelizeObject = List;
      includes = ['list_tag', 'list_color', 'list_status'];
      columns = ['id', 'kanban_id', 'name', 'status_id', 'description', 'position', 'pinned', 'color_id', 'created_at', 'updated_at'];
      mandatory = ['kanban_id', 'name'];
      break;

    case 'role':
      sequelizeObject = Role;
      includes = ['kanban_owner'];
      columns = ['id', 'name', 'created_at', 'updated_at'];
      mandatory = ['name'];
      break;

    case 'status':
      sequelizeObject = Status;
      includes = ['status_list', 'status_cart'];
      columns = ['id', 'name', 'created_at', 'updated_at'];
      mandatory = ['name'];
      break;

    case 'tag':
      sequelizeObject = Tag;
      includes = ['tag_list', 'tag_cart'];
      columns = ['id', 'name', 'created_at', 'updated_at'];
      mandatory = ['name'];
      break;

    case 'utilisateur':
      sequelizeObject = Utilisateur;
      includes = ['utilisateur_role', 'utilisateur_kanban'];
      columns = ['id', 'firstname', 'lastname', 'email', 'password', 'role_id', 'created_at', 'updated_at'];
      mandatory = ['firstname', 'lastname', 'email', 'password'];
      break;

    }

    return {sequelizeObject, includes, columns, mandatory};

  },


};

module.exports = entityDefinition;
