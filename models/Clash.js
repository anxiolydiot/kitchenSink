
module.exports = function(sequelize, DataTypes) {
  var Clash = sequelize.define('Clash', {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        isEmail: true
      }
    },
    date: {
      type: DataTypes.DATE,
      unique: false,
      allowNull: false,
    },
    time: {
      type: DataTypes.TIME,
      unique: false,
      allowNull: false,
    },
    location: {
      //needs to be changed
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: true  
      }
    }
  }, {
    classMethods: {
      associate: function(models) {
        // User.hasMany(models.Rating);
        // Clash.has
        // to keep track of user submissions
        // User.hasMany(models.Bathroom);
      }
    }
  });

  return Clash;
};
