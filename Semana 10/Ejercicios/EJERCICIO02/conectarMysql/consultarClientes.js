const mysql = require('mysql');
const readline = require('readline');

const conexion = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'negocio',
    port: 8889
});

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('¿Qué cliente deseas buscar? ', (nombreCliente) => {
    conexion.connect((err) => {
        if (err) throw err;
        console.log('Conectado a la base de datos');

        const consulta = 'SELECT * FROM clientes WHERE nombre = ?';
        conexion.query(consulta, [nombreCliente], (error, resultados) => {
            if (error) throw error;
            if (resultados.length > 0) {
                console.log('Cliente encontrado:', resultados);
            } else {
                console.log('No se encontraron resultados para:', nombreCliente);
            }
            conexion.end();
            rl.close();
        });
    });
});