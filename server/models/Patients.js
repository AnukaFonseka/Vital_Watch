

module.exports = (sequelize, DataTypes) => {
    const Patients = sequelize.define("Patients", {
      hospitalId: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      firstName: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      lastName: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    });
    return Patients;

  };