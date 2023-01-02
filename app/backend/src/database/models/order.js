module.exports = (sequelize, DataTypes) => {
  const Order = sequelize.define('Order', {
    id: {
      type: DataTypes.INTEGER(11),
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
    orderNfId: {
      type: DataTypes.STRING(255),
      allowNull: false,
    },
    orderNumber: {
      type: DataTypes.STRING(255),
      allowNull: false,
    },
    orderPath: {
      type: DataTypes.STRING(255),
      defaultValue: null,
    },
    orderFileName: {
      type: DataTypes.STRING(255),
      defaultValue: null,
    },
    orderOriginalName: {
      type: DataTypes.STRING(255),
      defaultValue: null,
    },
    emissionDate: {
      type: DataTypes.STRING(255),
      defaultValue: null,
    },
    pdfFile: {
      type: DataTypes.STRING(255),
      defaultValue: null,
    },
    emitedTo: {
      type: DataTypes.STRING(255),
      allowNull: false,
    },
    nNf: {
      type: DataTypes.STRING(255),
      defaultValue: null,
    },
    CTE: {
      type: DataTypes.STRING(255),
      defaultValue: null,
    },
    value: {
      type: DataTypes.STRING(255),
      defaultValue: null,
    },
    cnpjId: {
      type: DataTypes.INTEGER(11),
      defaultValue: null,
    },
    userId: {
      type: DataTypes.INTEGER(11),
      defaultValue: null,
    },
    buyerId: {
      type: DataTypes.INTEGER(11),
      defaultValue: null,
    },
    providerId: {
      type: DataTypes.INTEGER(11),
      defaultValue: null,
    },
    orderStatusBuyer: {
      type: DataTypes.STRING(255),
      defaultValue: '0',
    },
    orderStatusProvider: {
      type: DataTypes.STRING(255),
      defaultValue: '0',
    },
    deliveryReceipt: {
      type: DataTypes.STRING(255),
      defaultValue: null,
    },
    cargoPackingList: {
      type: DataTypes.STRING(255),
      defaultValue: null,
    },
    deliveryCtrc: {
      type: DataTypes.STRING(255),
      defaultValue: null,
    },
  }, {
    underscored: false,
    timestamps: true,
    tableName: 'orders',
    initialAutoIncrement: 540,
  });

  Order.associate = (models) => {
    Order.belongsTo(models.Buyer, {
      as: 'buyer',
      foreignKey: 'buyerId',
    });
    Order.belongsTo(models.Cnpj, {
      as: 'cnpj',
      foreignKey: 'cnpjId',
    });
    Order.belongsTo(models.Provider, {
      as: 'provider',
      foreignKey: 'providerId',
    });
    Order.belongsTo(models.User, {
      as: 'user',
      foreignKey: 'userId',
    });
  };

  return Order;
};
