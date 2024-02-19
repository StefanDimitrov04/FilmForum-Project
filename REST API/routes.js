const router = require('express').Router();

const userController = require('./controllers/userController');
const filmsController = require('./controllers/filmsController');

router.use('/users', userController);
router.use('/films', filmsController);

module.exports = router;