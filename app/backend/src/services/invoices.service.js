const { Order, Buyer, Provider } = require('../database/models');

async function getAll() {
  try {
    const result = await Order.findAll({
      attributes: ['nNf',
        'emissionDate',
        'value',
        'orderStatusBuyer'
      ],
      include: [
        {
          model: Buyer,
          as: 'buyer',
          attributes: ['name']
        },
        {
          model: Provider,
          as: 'provider',
          attributes: ['id', 'name']
        },
      ]
    });

    return result;
  } catch (error) {
    error.message = "It's not possible to access this information";
    return error;
  }
};

module.exports = { getAll };