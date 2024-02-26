const Film = require('../models/Film');

exports.create = (filmData) => Film.create(filmData);
 
exports.getAll = async (qs) => {

    let query = Film.find();
    if(qs.where) {
        let [remainingString, ownerId] = qs.where.split('=');
        ownerId = ownerId.replaceAll('""', '');
        query = query.where('_ownerId').eq(ownerId);
    };

    const result = await query;
    return result;
}
exports.getOne = (filmId) => Film.findById(filmId);

exports.edit = (filmId, filmData) => Film.findByIdAndUpdate(filmId, filmData);

exports.delete = (filmId) => Film.findByIdAndDelete(filmId);

// exports.like = (likes, filmId) => Film.findByIdAndUpdate(filmId, likes);