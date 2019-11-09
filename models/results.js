module.exports = function(sequelize, DataTypes) {
    let results = sequelize.define("results",{
        user: DataTypes.STRING,
        matchDay: DataTypes.STRING,
        pick1: DataTypes.STRING,
        pick1points: DataTypes.INTGER,
        pick2: DataTypes.STRING,
        pick2points: DataTypes.INTGER,
        pick3: DataTypes.STRING,
        pick3points: DataTypes.INTGER,
    });
  return results;
  }