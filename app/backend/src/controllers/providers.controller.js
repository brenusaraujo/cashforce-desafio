const providersService = require("../services/providers.service");

async function getById(req, res) {
  try {
    const { id } = req.params;
    const data = await providersService.getById(id);
    return res.status(200).json(data);

  } catch (error) {
    return res.status(500).json({ message: data.message });

  }
}

module.exports = { getById };
