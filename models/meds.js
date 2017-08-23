module.exports = function(sequelize, DataTypes) {
  var Meds = sequelize.define('Meds', {
    id: {
      type: DataTypes.INTEGER(11).UNSIGNED,
      autoIncrement: true,
      primaryKey: true
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1]
      }
    }
  });

  Meds.associate = function(models) {
    Meds.belongsTo(models.User, {
     onDelete: 'cascade'
    });
  };

  return Meds;
};