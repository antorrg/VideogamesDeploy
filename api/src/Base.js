const {Sequelize} = require('sequelize');
const CreateVideoGame = require('./models/createVideoGame');
const CreateGenre = require('./models/createGenre');
require('dotenv').config();

const {DB_USER, DB_PASS, DB_HOST, DB_NAME,DB_DEPLOY} = process.env;

// const sequelize = new Sequelize(`postgres://${DB_USER}:${DB_PASS}@${DB_HOST}/${DB_NAME}`,
// {logging:false, native: false}
// );
const sequelize = new Sequelize(DB_DEPLOY, {
  logging: false, // set to console.log to see the raw SQL queries
  native: false, // lets Sequelize know we can use pg-native for ~30% more speed
  dialectOptions: {
    ssl: {
      require: true,
    }
  }
});
CreateGenre(sequelize)
CreateVideoGame(sequelize)

const {Videogame, Genre}= sequelize.models

Videogame.belongsToMany(Genre, {through: 'genreGame'})
Genre.belongsToMany(Videogame, {through: 'genreGame'})

module.exports = {
    ...sequelize.models,
    sequelize
}