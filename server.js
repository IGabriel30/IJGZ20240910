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

// Conexión a la base de datos utilizando la variable de entorno
mongoose.connect(process.env.DATABASE_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => console.log('Conectado a la base de datos'))
.catch(err => console.error('Error de conexión a la base de datos:', err));

// Rutas de la API
app.use('/products', productRoutes);

// Iniciar el servidor
app.listen(PORT, () => {
  console.log(`Servidor escuchando en el puerto ${PORT}`);
});
