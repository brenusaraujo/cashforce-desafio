const express = require('express');
const providersController = require('../controllers/providers.controller');

const router = express.Router();

router.get('/:id', providersController.getById);

module.exports = router;
