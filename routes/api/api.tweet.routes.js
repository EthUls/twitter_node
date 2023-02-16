const router = require('express').Router();
const Tweet = require('../../database/models/Tweet.model');

router.post('/new', (req,res) => { // localhost:3000/api/tweet/new
    const body = req.body;
    const newTweet = new Tweet(body)

    newTweet
        .save()
        .then( _ => res.redirect('/')) // Après avoir avoir écrit le tweet, redirection vers la liste des tweets. // Variable non utiliser = "_"
        .catch(err => {
            const errors = Object.keys(err.errors).map(key => err.errors[key].message);
            Tweet
                .find({})
                .exec()
                .then(tweets => res.status(400).render('tweets/tweet-list', {errors}))            
        })
})


module.exports = router;