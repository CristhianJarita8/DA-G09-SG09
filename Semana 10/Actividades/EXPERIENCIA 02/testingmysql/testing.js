// Solicitando paquete de MySQL
var mysql = require('mysql');

// Configurando parámetros de conexión (puede variar según instalación)
var conexion = mysql.createConnection({
  host: 'localhost',
  port: '3306', // Cambia este puerto si usas otro (por defecto MySQL suele estar en el puerto 3306)
  database: 'musicdb', // Asegúrate de que esta base de datos exista
  user: 'root', // Usuario predeterminado de MySQL
  password: 'angela19*' // Cambia esto si tu contraseña es diferente
});

// Realizando conexión o verificando si sucedió un error
conexion.connect(function(err) {
  if (err) {
    console.log("Error de conexion: " + err.stack);
    return;
  }
  console.log("Conectado al ID " + conexion.threadId);
});

// Realizando consulta a la base de datos
conexion.query('SELECT * FROM albums', function(error, results) {
  if (error) throw error;
  results.forEach(element => {
    console.log(element);
  });
});

// Cerrar la conexión
conexion.end();
