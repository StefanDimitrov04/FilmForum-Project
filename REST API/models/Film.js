const mongoose = require('mongoose');

const filmSchema = new mongoose.Schema({


    filmName: {
        type: String,
        required: true,
    },
    filmCategory: {
        type: String,
        required: true,
    },
    filmDescription: {
        type: String,
        required: true,
    },
    filmImgUrl: {
        type: String,
        required: true,
    },
    _ownerId: {
        type: mongoose.Types.ObjectId,
        ref: "User"
    },
    likes: [{
        type: mongoose.Types.ObjectId,
        ref: "User",
    }],
    // _id: {
        type: mongoose.Types.ObjectId
 //   }
});

const Film = mongoose.model('Film', filmSchema);

module.exports = Film;