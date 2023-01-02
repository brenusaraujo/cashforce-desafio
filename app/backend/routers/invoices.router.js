const express = require('express');
const invoicesController = require('../controllers/invoices.controller');

const router = express.Router();

router.get('/', invoicesController.getAll);

module.exports = router;
