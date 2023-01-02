const express = require('express');
const invoicesRouter = require('./invoices.router');

const router = express.Router();

router.use('/', invoicesRouter);

module.exports = router;
