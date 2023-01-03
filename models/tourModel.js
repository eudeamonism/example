//Mongoose at main file and Model folder
const mongoose = require('mongoose');

//Schemas
const tourSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'A tour must have a name'],
    unique: true,
  },
  rating: { type: Number, default: 4.5 },
  price: {
    type: Number,
    required: [true, 'A tour must have a price'],
  },
});

//Models
const Tour = mongoose.model('Tour', tourSchema);

//Creating documents, CRUD, will happen in the Controller's folder

module.exports = Tour;
