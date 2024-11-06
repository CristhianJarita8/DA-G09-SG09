var mysql = require('mysql');

var conexion = mysql.createConnection({
    host:'localhost',
    port:'8889',
    database: 'musicdb',
    user: 'root',
    password: 'root',
});

conexion.connect(function(err){
    if(err){
        console.log("Error de conexion" + err.stack);
        return;
    }
    console.log("Conectado al ID " + conexion.threadId);
});

conexion.query('SELECT * FROM albums', function(error,results){
    if(error)
        throw error;
    results.foreach(element => {
        console.log(element);
    });
});

conexion.end();