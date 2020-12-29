const express = require('express');
const { registerUser, viewAllUsers, updateuserByUsername, changePassword, login } = require('../controller/userController');
const router = express.Router();

router.post('/register', registerUser);
router.get('/allusers', viewAllUsers);
router.post('/changeusername', updateuserByUsername);
router.post('/changepassword', changePassword);
router.post('/login', login);

module.exports = router;