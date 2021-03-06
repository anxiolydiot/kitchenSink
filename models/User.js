var bcrypt = require('bcryptjs');

module.exports = function(sequelize, DataTypes) {
  var User = sequelize.define('User', {
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        isEmail: true
      }
    },
    username: {
      type: DataTypes.STRING,
      unique: true,
      allowNull: false,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: true  
      }
    },
    clasher:{
      type: DataTypes.BOOLEAN
    },
    clashee:{
      type:DataTypes.BOOLEAN
      //probably just use 0 or 1 for one of these to differentiate the two
    }
  }, {
    hooks: {
      beforeCreate: function(input){
        input.password = bcrypt.hashSync(input.password, 10);
      }
    }
  }, {
    classMethods: {
      associate: function(models) {
        // User.hasMany(models.Rating);
        // to keep track of user submissions
        // User.hasMany(models.Bathroom);
      }
    }
  });

  return User;
};
