const router = require('express').Router();
const tweetRoute = require('./tweet.routes');
const userRoute = require('./user.routes');
const { tweetList } = require('../controllers/tweet.controller');

// PAR DEFAUT, LE LANCEMENT SE FAIT SUR INDEX.JS
router.use('/tweet', tweetRoute); // Si l'utilisateur fait un "/tweet" il se retrouvera sur la route /tweet.route.js
router.use('/user', userRoute);


router.get('/', tweetList);

module.exports = router;