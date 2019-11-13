module.exports = function(sequelize, DataTypes) {
    let standings = sequelize.define("standings",{
        name: DataTypes.STRING,
        points: DataTypes.INTEGER
    });
  return standings;
  }