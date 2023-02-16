const router = require('express').Router()
const tweet = require('./tweet.routes')
const api = require('./api');
const Tweet = require('../database/models/Tweet.model');

// PAR DEFAUT, LE LANCEMENT SE FAIT SUR INDEX.JS
router.use('/tweet', tweet); // Si l'utilisateur fait un "/tweet" il se retrouvera sur la route /tweet.route.js
router.use('/api', api) // Si l'utilisateur fait un "/api", il se retrouvera sur la route /api/api.tweet.routes.js

router.get('/', (req, res) => { // Si l'utilisateur fait un "/"", il arrive sur le menu du site.

    Tweet
        .find({})
        .exec()
        .then(tweets => {
            res.render('tweets/tweet-list', {tweets});
        })
})

module.exports = router;