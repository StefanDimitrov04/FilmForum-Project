const Film = require('../models/Film');

exports.create = (filmData) => Film.create(filmData);
 
exports.getAll = () => Film.find();

exports.getOne = (filmId) => Film.findById(filmId);

exports.edit = (filmId, filmData) => Film.findByIdAndUpdate(filmId, filmData);

exports.delete = (filmId) => Film.findByIdAndDelete(filmId);