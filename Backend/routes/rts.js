const express = require('express');
const router = express.Router();
const {mid} = require('../middleware/mdw')
const {verifyAuth} = require('../middleware/auth')
const {signup} = require('../controllers/signup')
const {login} = require('../controllers/login')
const {home, about, details} = require('../controllers/users')
const {resetPassword} = require('../controllers/resetPaaword')

router.get('/', home)           
router.get('/login',mid, login)    
router.get('/details',verifyAuth, details)    
router.get('/reset', resetPassword)    
router.post('/signup', signup)



module.exports= {router};
