const express = require('express');
const invoicesRouter = require('./invoices.router');
const providersRouter = require('./providers.router');

const router = express.Router();

router.use('/', invoicesRouter);
router.use('/provider', providersRouter);

module.exports = router;
