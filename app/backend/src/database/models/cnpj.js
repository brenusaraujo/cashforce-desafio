module.exports = (sequelize, DataTypes) => {
  const Cnpj = sequelize.define('Cnpj', {
    id: {
      type: DataTypes.INTEGER(11),
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
    cnpj: {
      type: DataTypes.STRING(255),
      allowNull: false,
    },
    companyType: {
      type: DataTypes.STRING(255),
      allowNull: false,
    },
  }, {
    underscored: false,
    timestamps: true,
    tableName: 'cnpjs',
    initialAutoIncrement: 437,
  });

  Cnpj.associate = (models) => {
    Cnpj.hasMany(models.Order, {
      foreignKey: 'cnpjId',
    });
    Cnpj.hasOne(models.Buyer, {
      foreignKey: 'cnpjId',
    });
    Cnpj.hasOne(models.Provider, {
      foreignKey: 'cnpjId',
    });
  };

  return Cnpj;
};
