module.exports = (sequelize, DataTypes) => {
  const Provider = sequelize.define('Provider', {
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
    tradingName: {
      type: DataTypes.STRING(255),
      defaultValue: null,
    },
    cashforceTax: {
      type: DataTypes.STRING(255),
      defaultValue: null,
    },
    responsibleName: {
      type: DataTypes.STRING(255),
      defaultValue: null,
    },
    responsibleEmail: {
      type: DataTypes.STRING(255),
      defaultValue: null,
    },
    responsiblePosition: {
      type: DataTypes.STRING(255),
      defaultValue: null,
    },
    responsiblePhone: {
      type: DataTypes.STRING(255),
      defaultValue: null,
    },
    responsibleMobile: {
      type: DataTypes.STRING(255),
      allowNull: false,
    },
    website: {
      type: DataTypes.STRING(255),
      defaultValue: null,
    },
    postalCode: {
      type: DataTypes.STRING(255),
      defaultValue: null,
    },
    address: {
      type: DataTypes.STRING(255),
      defaultValue: null,
    },
    number: {
      type: DataTypes.STRING(255),
      defaultValue: null,
    },
    complement: {
      type: DataTypes.STRING(255),
      defaultValue: null,
    },
    neighborhood: {
      type: DataTypes.STRING(255),
      defaultValue: null,
    },
    city: {
      type: DataTypes.STRING(255),
      defaultValue: null,
    },
    state: {
      type: DataTypes.STRING(255),
      defaultValue: null,
    },
    bank: {
      type: DataTypes.STRING(255),
      defaultValue: null,
    },
    bankAgency: {
      type: DataTypes.STRING(255),
      defaultValue: null,
    },
    account: {
      type: DataTypes.STRING(255),
      defaultValue: null,
    },
    documents: {
      type: DataTypes.STRING(255),
      defaultValue: null,
    },
    phoneNumber: {
      type: DataTypes.STRING(255),
      defaultValue: null,
    },
    situation: {
      type: DataTypes.STRING(255),
      defaultValue: null,
    },
    situationDate: {
      type: DataTypes.STRING(255),
      defaultValue: null,
    },
    cnpjId: {
      type: DataTypes.INTEGER(11),
      defaultValue: null,
    },
    email: {
      type: DataTypes.STRING(255),
      defaultValue: null,
    },
  }, {
    underscored: false,
    timestamps: true,
    tableName: 'providers',
    initialAutoIncrement: 235,
  });

  Provider.associate = (models) => {
    Provider.hasMany(models.Order, {
      foreignKey: 'providerId',
    });
    Provider.belongsTo(models.Cnpj, {
      as: 'cnpj',
      foreignKey: 'cnpjId',
    });
  };

  return Provider;
};
