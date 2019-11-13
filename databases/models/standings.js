module.exports = function(sequelize, DataTypes) {
    let standings = sequelize.define("standings",{
        user: DataTypes.STRING,
        points: DataTypes.INTEGER
    });
  return standings;
  }