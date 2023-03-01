const { createTweet, deleteTweet, displayTweet, updateTweet} = require('../controllers/tweet.controller');
const router = require('express').Router();

router.post('/new' ,createTweet) //creation d'un tweet
router.get('/delete/:tweetId', deleteTweet); //suprimer un tweet
router.get('/edit/:tweetId', displayTweet); //Affiche le tweet pour le modifier
router.post('/edit/:tweetId', updateTweet); //Mise a jour du tweet

module.exports = router