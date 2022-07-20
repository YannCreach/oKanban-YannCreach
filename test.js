require('dotenv').config();
// Op sert à mettre de opérateurs dans nos méthode sequelize
//const { Op } = require('sequelize');
// app/models correspond à app/models/index
const {Cart, Color, Kanban, List, Role, Status, Tag, Utilisateur } = require('./app/models');


async function test() {

  // objectif :

  // // 1. créer un niveau "Légendaire" et le sauvegarder en bdd
  // // en suivant la doc on voit qu'on instancie pas avec new mais une méthode statique build
  // const legendaryLevel = Level.build({ title: 'Légendaire' });
  // // on retrouve des getter
  // // console.log(legendaryLevel.title);
  // await legendaryLevel.save();
  // console.log(legendaryLevel);
  // // on peut aussi le faire en une fois (build + save) avec create
  // const noobLevel = await Level.create({ title: 'noob' });
  // console.log(noobLevel.id, noobLevel.title);

  // // 2. mettre à jour le niveau pour l'appeler "Ultra légendaire"
  // legendaryLevel.title = 'Ultra légendaire';
  // await legendaryLevel.save();
  // console.log(legendaryLevel.updatedAt, legendaryLevel.title);

  // // 3. recupérer tous les niveaux
  // const levels = await Level.findAll();
  // console.log(levels);

  // // 4. Supprimer le niveau Ultra légendaire
  // // soit on part d'une instance, qu'on supprime
  // // legendaryLevel.destroy();
  // // soit on supprime toutes les lignes selon un critère
  // await Level.destroy({
  //   where: {
  //     title: "Ultra légendaire"
  //   }
  // });

  // const questions = await Question.findAll();
  // console.log(questions);

  // // SELECT * FROM question WHERE description LIKE 'Comment%' LIMIT 1;
  // const questionComment = await Question.findOne({
  //   where: {
  //     description: {
  //       [Op.like]: 'Comment%',
  //     }
  //   }
  // });
  // console.log(questionComment);

  // const firstQuestion = await Question.findByPk(1);
  // console.log(firstQuestion);

  // const veryHard = await Level.create({
  //   title: 'Très difficile',
  // });
  // console.log(veryHard);

  // je veux le quiz numéro 1 ET toutes ses questions
  // SELECT * FROM question JOIN quiz ON question.quiz_id = quiz.id WHERE quiz.id = 1;

  // je veux toutes les questions des levels
  // on inclue une association avec l'option include
  //   const levelsWithQuestions = await Level.findAll({
  //     include: 'questions',
  //   });
  //   console.log(levelsWithQuestions[0].questions);


  //   const questionsWithLevel = await Question.findAll({
  //     include: 'level',
  //   });
  //   console.log(questionsWithLevel[0].level.title, questionsWithLevel[0].description);


  // partant d'un level
  //   const firstLevel = await Level.findByPk(1);
  // et d'une question
  //   const question = await Question.findByPk(1);
  // je peux ajouter un level à la question via les méthodes spéciales créées par sequelize
  // https://sequelize.org/docs/v6/core-concepts/assocs/#special-methodsmixins-added-to-instances
  //   await question.setLevel(firstLevel);
  //   console.log(await question.getLevel());

  //   const firstQuestion = await Question.findByPk(1, {
  //     include: ['quiz', 'rightAnswer'],
  // include accepte une string pour une association ou un tableau pour plusieurs associations
  //   });
  //   console.log(firstQuestion);

  const test = await Cart.findByPk(1);
  console.log(test);


}

test();
