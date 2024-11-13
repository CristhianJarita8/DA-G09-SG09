const http = require('http');
const fs = require('fs');

http.createServer((req, res) => {
    fs.readFile('./inicio.html', (err, data) => {
        if (err) {
            res.writeHead(404, { 'Content-Type': 'text/plain' });
            res.write('404: Página no encontrada');
            res.end();
            return;
        }
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.write(data);
        res.end();
    });
}).listen(5000, () => {
    console.log('Servidor en puerto 5000');
});