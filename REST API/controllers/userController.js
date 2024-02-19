const router = require('express').Router();

const userManager = require('../managers/userManager');

// router.post( '/register', async (req, res) => {
//    try {
//     const result = await userManager.register(req.body);
   

//     res.json(result);
//    } catch (error) {
//      console.log(error);
//    };   

// });

router.post('/register', async (req, res) => {
    console.log('Received registration request:', req.body);

    try {
        const result = await userManager.register(req.body);
        res.json(result);
    } catch (error) {
        console.error(error);
        res.status(500).json({
            error: 'Internal Server Error',
            message: error.message || 'An unexpected error occurred during registration.'
        });
    }
});


// router.post('/login', async (req, res) => {
//   console.log('recived user', req.body);
//     try {
//     const result = await userManager.login(req.body);
    
//     res.json(result);
//     } catch (error) {
//         console.log(error);
//         res.status(400).json({
//             message: res.message
//         });
//     }
// });

router.post('/login', async (req, res) => {
    console.log('Received login request:', req.body);
    try {
        const { email, password } = req.body;
        const result = await userManager.login(email, password);
        res.json(result);
    } catch (error) {
        console.error(error);
        res.status(400).json({
            message: error.message,
        });
    }
});


router.get('/logout', (req, res) => {
    res.end();
})

module.exports = router;