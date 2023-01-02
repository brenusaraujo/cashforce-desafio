const invoicesService = require('../services/invoices.service');

async function getAll(_req, res) {
  try {
    const data = await invoicesService.getAll();
    return res.status(200).json(data);
  } catch (error) {
    return res.status(500).json({ message: data.message });
  }
}

module.exports = { getAll };
