const express = require('express');
const app = express();

// Middleware para registrar la actividad con detalles estilizados en consola
const logMiddleware = (req, res, next) => {
    console.log(`📅 [${new Date().toLocaleString()}] - Petición a: ${req.url}`);
    next();
};

// Middleware de autenticación simulada
const authMiddleware = (req, res, next) => {
    const autenticado = true; // Simulación de autenticación
    if (autenticado) {
        console.log('🔓 Usuario autenticado. Acceso permitido.');
        next();
    } else {
        console.log('🔒 Usuario no autenticado. Acceso denegado.');
        res.status(403).send(`
            <html>
            <head>
                <style>
                    body { font-family: Arial, sans-serif; text-align: center; padding: 50px; background-color: #ffdddd; color: #b30000; }
                    h1 { font-size: 2.5em; }
                    p { font-size: 1.2em; }
                </style>
            </head>
            <body>
                <h1>🚫 Acceso Denegado</h1>
                <p>No tienes permisos para acceder a esta página.</p>
            </body>
            </html>
        `);
    }
};

// Aplicar middlewares
app.use(logMiddleware);
app.use(authMiddleware);

// Ruta principal con respuesta estilizada
app.get('/', (req, res) => {
    res.send(`
        <html>
        <head>
            <style>
                body { font-family: Arial, sans-serif; background-color: #f0f8ff; color: #333; text-align: center; padding: 50px; }
                h1 { color: #4b8cbf; font-size: 3em; }
                p { font-size: 1.2em; color: #555; }
            </style>
        </head>
        <body>
            <h1>Bienvenido a la Página Principal 🌐</h1>
            <p>Esta página utiliza Middleware para autenticación y registro de actividad.</p>
            <p>Gracias por visitarnos hoy. ¡Explora nuestros servicios!</p>
        </body>
        </html>
    `);
});

// Iniciar el servidor
app.listen(7000, () => {
    console.log('🚀 Servidor escuchando en puerto 7000');
});
