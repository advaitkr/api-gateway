const express = require('express');
const { signUp, signIn } = require('../controllers/authController');
const {authMiddleware} = require('../middleware/authMiddleware')
const router = express.Router();

router.post('/signup', signUp);
router.post('/signin',authMiddleware,signIn);

module.exports = router;
