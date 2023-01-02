module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    id: {
      type: DataTypes.INTEGER(11),
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
    name: {
      type: DataTypes.STRING(255),
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING(255),
      unique: true,
      allowNull: false,
    },
    phoneNumber: {
      type: DataTypes.STRING(255),
      defaultValue: null,
    },
    mobile: {
      type: DataTypes.STRING(255),
      defaultValue: null,
    },
    departament: {
      type: DataTypes.STRING(255),
      defaultValue: null,
    },
    verificationCode: {
      type: DataTypes.STRING(255),
      defaultValue: null,
    },
    emailChecked: {
      type: DataTypes.TINYINT(1),
      defaultValue: 0,
    },
    cashforceAdm: {
      type: DataTypes.TINYINT(1),
      defaultValue: 0,
    },
  }, {
    underscored: false,
    timestamps: true,
    tableName: 'users',
  });

  User.associate = (models) => {
    User.hasMany(models.Order, {
      foreignKey: 'userId',
    });
  };

  return User;
};