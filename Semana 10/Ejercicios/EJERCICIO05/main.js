const express = require('express');
const app = express();
const rutas = require('./rutas');

// Usar las rutas definidas en el archivo rutas.js
app.use('/', rutas);

// Puerto de escucha
app.listen(6000, () => {
    console.log('🚀 Servidor escuchando en el puerto 6000');
});
