const express = require("express");

const app = express();

const connectDB = require("./db/config");

// Importar CORS
const cors = require('cors');

// Habilitar leer los valores de un body en formato JSON
app.use(express.json({limit: '50mb'}));

// Habilitar CORS
app.use(cors());

connectDB();

/* ROUTES */
const pokemonRoutes = require("./routes/pokemon");

app.use("/api/pokemon", pokemonRoutes);


// Arrancar la App
app.listen(4000, '0.0.0.0', () => {
   console.log(`El servidor esta funcionando en el puerto 4000`);
});