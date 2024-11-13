const express = require('express');
const router = express.Router();

// Ruta principal con un mensaje de bienvenida estilizado
router.get('/', (req, res) => {
    res.send(`
        <html>
        <head>
            <style>
                body { font-family: Arial, sans-serif; background-color: #f0f8ff; color: #333; text-align: center; padding: 50px; }
                h1 { color: #4b8cbf; font-size: 3em; }
                p { font-size: 1.2em; }
            </style>
        </head>
        <body>
            <h1>🌟 Bienvenido a Nuestra Página Principal 🌟</h1>
            <p>Explora nuestro sitio y conoce nuestros productos y servicios innovadores.</p>
            <p><a href="/productos/123" style="color: #4b8cbf;">Ver un producto específico</a> | <a href="/servicios" style="color: #4b8cbf;">Nuestros servicios</a></p>
        </body>
        </html>
    `);
});

// Ruta para mostrar detalles de un producto con un diseño dinámico y un mensaje único
router.get('/productos/:id', (req, res) => {
    const idProducto = req.params.id;
    res.send(`
        <html>
        <head>
            <style>
                body { font-family: Arial, sans-serif; background-color: #faf2e7; color: #333; text-align: center; padding: 50px; }
                h1 { color: #ff7f50; font-size: 2.5em; }
                .highlight { font-weight: bold; color: #ff4500; }
                p { font-size: 1.1em; }
            </style>
        </head>
        <body>
            <h1>🔍 Detalles del Producto</h1>
            <p>Estás viendo los detalles del producto con ID: <span class="highlight">${idProducto}</span></p>
            <p><a href="/" style="color: #ff4500;">Volver a la Página Principal</a></p>
        </body>
        </html>
    `);
});

// Ruta para la lista de servicios con un diseño visualmente atractivo y descriptivo
router.get('/servicios', (req, res) => {
    res.send(`
        <html>
        <head>
            <style>
                body { font-family: Arial, sans-serif; background-color: #eef9f4; color: #333; text-align: center; padding: 50px; }
                h1 { color: #28a745; font-size: 3em; }
                ul { list-style: none; padding: 0; font-size: 1.2em; }
                li { background-color: #d4edda; margin: 10px 0; padding: 15px; border-radius: 5px; }
                a { color: #28a745; text-decoration: none; }
            </style>
        </head>
        <body>
            <h1>💼 Nuestros Servicios</h1>
            <ul>
                <li>🔧 Servicio de Mantenimiento</li>
                <li>📦 Gestión de Productos</li>
                <li>📈 Consultoría de Negocios</li>
                <li>🚀 Desarrollo Personalizado</li>
            </ul>
            <p><a href="/" style="color: #28a745;">Volver a la Página Principal</a></p>
        </body>
        </html>
    `);
});

module.exports = router;

