module.exports = function(sequelize, DataTypes) {
    let picks = sequelize.define("picks",{
        user: DataTypes.STRING,
        matchDay: DataTypes.STRING,
        pick1: DataTypes.STRING,
        pick2: DataTypes.STRING,
        pick3: DataTypes.STRING
    });
  return picks;
  }