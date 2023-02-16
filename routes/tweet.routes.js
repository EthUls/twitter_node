const router = require('express').Router();


router.get('/new', (req, res) => { // Si l'utilisateur appuie sur le boutons Tweet, on le meneras dans la création d'un nouveau Tweet ("Form/Tweet")
    res.render('tweets/tweet-form')
})

module.exports = router
