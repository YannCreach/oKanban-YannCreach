const Cart = require('./cart');
const Color = require('./color');
const Kanban = require('./kanban');
const List = require('./list');
const Role = require('./role');
const Status = require('./status');
const Tag = require('./tag');
const Utilisateur = require('./utilisateur');

// 1:N oneToMany on utilise la méthode hasMany
// N:1 ManyToOne on utilise la méthode belongsTo
// 1:1 oneToOne on utilise la méthode belongsTo
// N:N manyToMany on utilise la méthode belongsToMany
// To create a One-To-One relationship, the hasOne and belongsTo associations are used together;
// To create a One-To-Many relationship, the hasMany and belongsTo associations are used together;
// To create a Many-To-Many relationship, two belongsToMany calls are used together.

// un utilisateur à un role
Utilisateur.belongsTo(Role, {
  foreignKey: 'role_id',
  as: 'utilisateur_role'
});
// réciproque : un role concerne plusieurs utilisateurs
Role.hasMany(Utilisateur, {
  foreignKey: 'role_id',
  as: 'role_utilisateur'
});


// un utilisateur à plusieurs kanban
Utilisateur.hasMany(Kanban, {
  foreignKey: 'owner_id',
  as: 'utilisateur_kanban'
});
// un kanban à un seul owner
Kanban.belongsTo(Utilisateur, {
  foreignKey: 'owner_id',
  as: 'kanban_owner'
});


// Un kanban possède plusieurs collab
Kanban.belongsToMany(Utilisateur, {
  as: 'kanban_collab',
  through: 'kanban_has_collab',
  foreignKey: 'kanban_id',
  otherKey: 'utilisateur_id',
});
// un utilisateur peut etre collab sur plusieurs kanban
Utilisateur.belongsToMany(Kanban, {
  as: 'collab_kanban',
  through: 'kanban_has_collab',
  otherKey: 'kanban_id',
  foreignKey: 'utilisateur_id',
});


// un kanban à plusieurs listes
Kanban.hasMany(List, {
  foreignKey: 'kanban_id',
  as: 'kanban_list'
});
// une liste à un kanban
List.belongsTo(Kanban, {
  foreignKey: 'kanban_id',
  as: 'list_kanban'
});


// un status peut avoir plusieur listes
Status.hasMany(List, {
  foreignKey: 'status_id',
  as: 'status_list'
});
// une liste à un status
List.belongsTo(Status, {
  foreignKey: 'status_id',
  as: 'list_status'
});


// une couleur peut avoir plusieur listes
Color.hasMany(List, {
  foreignKey: 'color_id',
  as: 'color_list'
});
// une liste à une couleur
List.belongsTo(Color, {
  foreignKey: 'color_id',
  as: 'list_color'
});


// une liste à plusieur cartes
List.hasMany(Cart, {
  foreignKey: 'list_id',
  as: 'list_cart'
});
// une carte a une liste
Cart.belongsTo(List, {
  foreignKey: 'list_id',
  as: 'cart_list'
});


// une status a plusieurs cartes
Status.hasMany(Cart, {
  foreignKey: 'status_id',
  as: 'status_cart'
});
// une carte à un status
Cart.belongsTo(Status, {
  foreignKey: 'status_id',
  as: 'cart_status'
});


// une couleur a plusieurs cartes
Color.hasMany(Cart, {
  foreignKey: 'color_id',
  as: 'color_cart'
});
// une carte à une couleur
Cart.belongsTo(Color, {
  foreignKey: 'color_id',
  as: 'cart_color'
});


// Une carte possède plusieurs collab
Cart.belongsToMany(Utilisateur, {
  as: 'cart_collab',
  through: 'cart_has_collab',
  foreignKey: 'cart_id',
  otherKey: 'utilisateur_id',
});
// un utilisateur peut etre collab sur plusieurs cartes
Utilisateur.belongsToMany(Cart, {
  as: 'collab_cart',
  through: 'cart_has_collab',
  otherKey: 'cart_id',
  foreignKey: 'utilisateur_id',
});


// Une list possède plusieurs tags
List.belongsToMany(Tag, {
  as: 'list_tag',
  through: 'list_has_tag',
  foreignKey: 'list_id',
  otherKey: 'tag_id',
});
// un tag peut etre sur plusieurs listes
Tag.belongsToMany(List, {
  as: 'tag_list',
  through: 'list_has_tag',
  otherKey: 'list_id',
  foreignKey: 'tag_id',
});


// Une carte possède plusieurs tags
Cart.belongsToMany(Tag, {
  as: 'cart_tag',
  through: 'cart_has_tag',
  foreignKey: 'cart_id',
  otherKey: 'tag_id',
});
// un tag peut etre sur plusieurs carte
Tag.belongsToMany(Cart, {
  as: 'tag_cart',
  through: 'cart_has_tag',
  otherKey: 'cart_id',
  foreignKey: 'tag_id',
});


module.exports = { Cart, Color, Kanban, List, Role, Status, Tag, Utilisateur };
