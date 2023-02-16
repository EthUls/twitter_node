const mongoose = require('mongoose');

mongoose.connect('mongodb://guillaumed:admin@127.0.0.1:27017/twitter_dwwm', {
    useNewUrlParser: true, // Permet de revenir à l'ancien analyseur si ont trouvent un bug.
    useUnifiedTopology: true //Pour unifier les documents.
}).then(() => {
    console.log("Connexion a la DB établie")
}).catch(err => {
    console.log(err);
})