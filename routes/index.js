const router = require('express').Router()
const tweet = require('./tweet.routes')
const { tweetList } = require('../controllers/tweet.controller');

// PAR DEFAUT, LE LANCEMENT SE FAIT SUR INDEX.JS
router.use('/tweet', tweet); // Si l'utilisateur fait un "/tweet" il se retrouvera sur la route /tweet.route.js
router.get('/', tweetList);

module.exports = router;