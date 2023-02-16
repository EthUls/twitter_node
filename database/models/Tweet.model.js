const mongoose = require('mongoose'); // Importation du module MonGoose
const schema = mongoose.Schema; // Recupération pour création du schema

const tweetSchema = schema({
    content: {
        type: String,
        maxlength: [146,'le tweet est trop long'],
        minlength: [5, 'le tweet est trop court'],
        required: [true, "Le contenu ne peux être vide " ]
    }
}, {
    timestamps: true
})

const Tweet = mongoose.model('tweet', tweetSchema);

module.exports = Tweet;