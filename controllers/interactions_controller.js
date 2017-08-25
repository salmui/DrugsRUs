module.exports = function(sequelize, DataTypes) {
    var Meds_Interactions = sequelize.define("Meds_Interactions", {
      med1_id: DataTypes.INTEGER,
      med2_id: DataTypes.INTEGER,
      med1_name: DataTypes.STRING(500),
      med2_name: DataTypes.STRING(500),
      interaction: DataTypes.STRING(2000)
    });
    return Meds_Interactions;
  };