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
      date_Of_Birth: {
        type: DataTypes.DATE,
        allowNull: false,
      },
      contactNo: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      address: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      nic: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      email: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      bloodGroup: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      guardianName: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      guardian_contactNo: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      guardianAddress: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      statusId: {
        type: DataTypes.BIGINT,
        allowNull: false,
      }
      

      


    });
    return Patients;

  };