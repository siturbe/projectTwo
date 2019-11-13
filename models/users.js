module.exports = function(sequelize, DataTypes) {
    let users = sequelize.define("users",{
        name: DataTypes.STRING,
        email: DataTypes.STRING,
        password: DataTypes.STRING,
    });
  return users;
  }