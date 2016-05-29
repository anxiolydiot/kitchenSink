var Sequelize = require("sequelize");

module.exports = function(sequelize, DataTypes) {
  var Message = sequelize.define('Message', {
    message: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    // date: {
    //   type: DataTypes.DATE,
    //   unique: false,
    //   allowNull: false,
    // },
    // time: {
    //   type: DataTypes.TIME,
    //   unique: false,
    //   allowNull: false,
    // },
  // }, {
    // classMethods: {
    //   associate: function(models) {
        // User.hasMany(models.Rating);
        // Clash.has
        // to keep track of user submissions
        // User.hasMany(models.Bathroom);
    //   }
    // }
  });

  return Message;
};
