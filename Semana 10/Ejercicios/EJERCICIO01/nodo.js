const http = require('http');

const mensajes = [
    '¡Bienvenidos a Node.js!',
    '¡Explora el mundo de JavaScript del lado del servidor!',
    '¡Node.js es asombroso para construir aplicaciones web!',
    '¡Diviértete programando con Node.js!'
];

function manejarSolicitud(req, res) {
    const mensajeAleatorio = mensajes[Math.floor(Math.random() * mensajes.length)];
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.write(mensajeAleatorio);
    res.end();
}

const server = http.createServer(manejarSolicitud);

server.listen(4000, () => {
    console.log('Servidor ejecutándose en el puerto 4000');
});
