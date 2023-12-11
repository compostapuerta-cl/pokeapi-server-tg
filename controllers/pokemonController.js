//Se importa el modelo
const Pokemon = require("../models/Pokemon");

const savePokemon = (req, res) => {

   const {id, name, height, weight, sprites, abilities: abilitiesArray, moves: movesArray} = req.body;

   const urlImage = sprites.front_default;
   const abilities = abilitiesArray.map((val) => val.ability.name);
   const moves = movesArray.slice(0, 15).map((val) => val.move.name);

   let pokemonSave = new Pokemon();

   pokemonSave.idPokemon = id;
   pokemonSave.name = name;
   pokemonSave.urlImage = urlImage;
   pokemonSave.height = height;
   pokemonSave.weight = weight;
   pokemonSave.abilities = abilities;
   pokemonSave.moves = moves;


   Pokemon.findOne({idPokemon: id}).exec((err, pokemon) => {
      if(err) return res.status(500).json({ msg: 'Server error while processing the request'});

      if(pokemon) return res.status(200).json({ msg: "The Pokemon is already saved in the database"});

      pokemonSave.save((err, pokemon) => {
         if(err) return res.status(500).json({ msg: 'Server error while processing the request'});

         if(!pokemon) return res.status(503).json({ msg: "An error occurred when registering the pokemon in the database"});

         return res.status(201).json({
            msg: "Pokemon successfully registered",
            data: pokemon
         })
      })
   })
}


module.exports = {
   savePokemon
}