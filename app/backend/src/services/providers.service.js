const { Provider, Cnpj } = require('../database/models');

async function getById(id) {
  try {
    const providerDetails = await Provider.findOne({
      where: { id },
      attributes: ['name', 'tradingName'],
      include: [
        { model: Cnpj, as: 'cnpj', attributes: ['cnpj'] },
      ]
    });

    return providerDetails;

  } catch (error) {
    error.message = "It's not possible to access this information";
    return error;
  }
}

module.exports = { getById };
