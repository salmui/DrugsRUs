module.exports = function(sequelize, DataTypes) {
  var Meds = sequelize.define('Meds', {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1]
      }
    },
  });

  Meds.associate = function(models) {
    Meds.belongsTo(models.User, {
      foreignKey: {
        allowNull: false
      }
    });
  };

  return Meds;
};