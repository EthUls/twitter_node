const router = require('express').Router()

router.get('/', (req, res) => {
    res.render('home.pug');
})

module.exports = router;