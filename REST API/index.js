const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const { auth } = require('./middlewares/authMiddleware');
const routes = require('./routes');


const app = express();
app.use(cors({
    origin: 'http://localhost:4200', // Adjust this to your Angular app's origin
    credentials: true, // Allow sending cookies with the request
  }));

// app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended: false}));



app.use('/api', routes);
// app.use(auth);


mongoose.connect('mongodb://127.0.0.1:27017/filmForum')
.then( () => {
    console.log('db connected');
})
.catch((err) => {
    console.log(err);
})

app.get( '/', (req,res) => {
    res.send('hello world');
});

app.listen(process.env.PORT || 3000, () => {
    console.log('app is listening on port 3000');
})
