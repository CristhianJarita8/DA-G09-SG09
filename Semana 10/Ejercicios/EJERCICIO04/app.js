const express = require('express');
const app = express();

app.set('view engine', 'ejs');

app.get('/', (req, res) => {
    res.render('index', { mensaje: 'Bienvenido al servidor con Express y EJS' });
});

app.listen(4000, () => {
    console.log('Aplicación en ejecución en puerto 4000');
});