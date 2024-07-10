const express = require('express');
const { handleRequest } = require('../controllers/gatewayController');
const authMiddleware = require('../middleware/authMiddleware');

const router = express.Router();

router.use('*', authMiddleware, handleRequest);

module.exports = router;
