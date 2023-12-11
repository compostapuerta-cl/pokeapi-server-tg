const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const pokemonSchema = new Schema({

   idPokemon: {
      type: Number,
      required: true
   },
   name: {
      type: String,
      required: true
   },
   urlImage: {
      type: String,
      required: true
   },
   height: {
      type: Number,
      required: true
   },
   weight: {
      type: Number,
      required: true
   },
   abilities: {
      type: [String],
      required: true
   },
   moves: {
      type: [String],
      required: true
   },
   createAt: {
      type: Date,
      default: Date.now()
   }
});

module.exports = mongoose.model('pokemones', pokemonSchema);