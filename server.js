const express = require('express');
const bodyParser = require('body-parser');
const productRoutes = require('./src/routes/productIJGZRoute');
const mongoose = require('./src/config/database');  // Aquí cargas la conexión a la BD
require('dotenv').config();  // Cargar variables de entorno

const app = express();

// Puerto de la variable de entorno o 3000 como predeterminado
const PORT = process.env.PORT || 3000;

// Middleware para analizar JSON
app.use(bodyParser.json());

// Rutas de la API
app.use('/products', productRoutes);

// Iniciar el servidor
app.listen(PORT, () => {
  console.log(`Servidor escuchando en el puerto ${PORT}`);
});
