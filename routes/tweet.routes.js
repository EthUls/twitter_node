const { createTweet, deleteTweet } = require('../controllers/tweet.controller');
const router = require('express').Router();

router.post('/new', createTweet) //creation d'un tweet
router.get('/delete/:tweetId', deleteTweet); //suprimer un tweet

module.exports = router