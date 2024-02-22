const router = require('express').Router();
const filmManager = require('../managers/filmManager');
const { auth } = require('../middlewares/authMiddleware');



router.post('/create', async (req, res) => {
  try {

    const { filmName, filmCategory, filmDescription, filmImgUrl, _ownerId } = req.body;
    console.log(req.body);
    const film = await filmManager.create({
      filmName,
      filmCategory,
      filmDescription,
      filmImgUrl,
      _ownerId,
    });

    res.status(201).json({ message: 'Film created successfully', film });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});


router.get('/', async (req, res) => {
  const films =  await filmManager.getAll(req.query);

    res.json(films);
});


router.get('/:filmId', async (req, res) => {
  try {
      const film = await filmManager.getOne(req.params.filmId);
      res.json(film);
  } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal Server Error' });
  }
});

router.put('/:filmId/edit', async (req,res) => {
  try {
     
    const filmId =req.params.filmId;
    const { filmName, filmCategory, filmDescription, filmImgUrl} = req.body;
    const film = await filmManager.edit(filmId, {
      filmName, 
      filmCategory, 
      filmDescription, 
      filmImgUrl
    });

    res.status(201).json({ message: 'Film created successfully', film });; 
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

router.delete('/:filmId/delete', async(req,res) => {
    await filmManager.delete(req.params.filmId);
})

module.exports = router;