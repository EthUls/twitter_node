const router = require('express').Router();
const tweetRoute = require('./tweet.routes');
const userRoute = require('./user.routes');
const authRoute = require('./auth.routes');
const { tweetList } = require('../controllers/tweet.controller');
const { ensureAuthenticated } = require('../config/security.config');

// PAR DEFAUT, LE LANCEMENT SE FAIT SUR INDEX.JS
router.use('/tweet', ensureAuthenticated, tweetRoute); // Si l'utilisateur fait un "/tweet" il se retrouvera sur la route /tweet.route.js
router.use('/user', userRoute);
router.use('/auth', authRoute);

router.get('/', tweetList);

module.exports = router;