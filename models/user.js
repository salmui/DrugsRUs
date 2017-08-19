module.exports = function(sequelize, DataTypes) {
  var user = sequelize.define("User", {
    id: {
      type: Sequelize.INTEGER(11).UNSIGNED,
      autoIncrement: true,
      primaryKey: true
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1, 50]
      }
    },
    email: {
      type: DataTypes.String,
      isUnique: true,
      allowNull: false,
      validate: {
        isEmail: {msg: 'Reason'}
      }
    },
    password: {
      
    }
  });
  return User;
};