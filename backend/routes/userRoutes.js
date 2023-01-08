const express = require('express');

const {
  registerUser,
  getme,
  loginUser,
} = require('../controllers/userController');

const { protect } = require('../Middleware/authmiddleware');
const router = express.Router();

router.post('/', registerUser);
router.post('/login', loginUser);
router.get('/me', protect, getme);

module.exports = router;
