// IMPORTAR EXPRESS Y SU ROUTING
const express = require('express');
const router = express.Router();

// Importar el controllers
const pokemonController = require('../controllers/pokemonController');


router.post('/',
   pokemonController.savePokemon
);


module.exports = router;