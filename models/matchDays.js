module.exports = function(sequelize, DataTypes) {
    let match = sequelize.define("match",{
        matchday: DataTypes.STRING,
        date: DataTypes.STRING,
        team1: DataTypes.STRING,
        team1score: DataTypes.INTEGER,
        team2: DataTypes.STRING,
        team2score: DataTypes.INTEGER,
    });
    return match;
}












