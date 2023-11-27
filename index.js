const mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1:27017/moviesApp')
.then(() => {
  console.log('Connected');  
})
.catch(err => {
    console.log('Error!!!!!');
})


const movieSchema = new mongoose.Schema({
    title: String,
    year: Number,
    score: Number,
    rating: String
});

const Movie = mongoose.model('Movie', movieSchema);
const amadeus = new Movie({
    title: 'Amadeus',
    year: 1998,
    score: 9,
    rating: 'R'
});

const rock = new Movie({
    title: 'rock',
    year: 1998,
    score: 9,
    rating: 'R'
});