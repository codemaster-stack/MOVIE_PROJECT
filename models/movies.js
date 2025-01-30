// 'use strict';
// const {Model} = require('sequelize');
// module.exports = (sequelize, DataTypes) => {
//   class Movies extends Model {
//     /**
//      * Helper method for defining associations.
//      * This method is not a part of Sequelize lifecycle.
//      * The `models/index` file will call this method automatically.
//      */
//     static associate(models) {
//       // define association here
//     }
//   }
//   Movies.init({
//     movieName: DataTypes.STRING,
//     genre: DataTypes.STRING,
//     releaseDate: DataTypes.STRING
//   }, {
//     sequelize,
//     modelName: 'Movies',
//   });
//   return Movies;
// };

const { Sequelize, DataTypes, Model } = require('sequelize');
const sequelize = new require("../database/database");

class Movies extends Model {}

Movies.init(
  {
    id: {
      allowNull: false,
      primaryKey: true,
      type: DataTypes.UUID
    },
    movieName: {
      type: DataTypes.STRING,
      allowNull:false
    },
    genre: {
      type: DataTypes.STRING,
      allowNull:false
    },
    releaseDate: {
      type: DataTypes.STRING,
      allowNull:false
    },
  },
  {
    // Other model options go here
    sequelize, // We need to pass the connection instance
    modelName: 'Movies', // We need to choose the model name
    timestamps:true
  },
);
 module.exports = Movies
