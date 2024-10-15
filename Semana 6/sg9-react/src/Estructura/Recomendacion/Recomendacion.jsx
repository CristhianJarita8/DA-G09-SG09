import React from 'react';
import Producto from '../Producto';
import './Recomendacion.css';

function Recomendacion() {
    // Arreglo de productos
    const productos = [
        {
            nombre:"ASUS ROG Strix SCAR 18 (2024)",
            descripcion:"Intel Core i9 14900HX (14va Gen), 24 núcleos, NVIDIA GeForce RTX 4090, 32GB RAM, 2TB de disco sólido",
            imagen:"/Componentes/Imagenes/Portatiles/ASUS ROG Scar 18 (2024).png",
            precioDesc:"$2,500",
            precioNormal:"$3,000",
            valoracion:"4.5",
            opiniones:"200",
            link:""
        },
        {
            nombre : "MSI Titan 18 HX A14V",
            descripcion : "Intel Core i9 14900HX, NVIDIA GeForce RTX 4090 de hasta 16GB GDDR6, 4TB NVMe PCIe Gen4x4 ",
            imagen : "/Componentes/Imagenes/Portatiles/MSI Titan 18 HX.png",
            precioDesc : "$2,800",
            precioNormal : "$3,300",
            valoracion : "4.7",
            opiniones : "150",
            link : ""
        },
        {
            nombre : "ACER Predator Helios 18",
            descripcion : "INTEL CORE I7 13700HX / 16GB RAM / 1TB SSD / 18” WUXGA (1920×1200) 165HZ / NVIDIA RTX 4060 8GB",
            imagen : "/Componentes/Imagenes/Portatiles/ACER Predator Helios 18.png",
            precioDesc : "$2,400",
            precioNormal : "$2,900",
            valoracion : "4.6",
            opiniones : "180",
            link : ""
        },
        {
            nombre : "LENOVO Legion 9i 16 9na Gen",
            descripcion : "Intel Core i9-14900HX Hasta 5.8 GHz, RAM 32GB, 2TB, Video 16GB NVIDIA GeForce RTX 4090",
            imagen : "/Componentes/Imagenes/Portatiles/LENOVO Legion 9i pro.png",
            precioDesc : "$2,200",
            precioNormal : "$2,700",
            valoracion : "4.4",
            opiniones : "120",
            link : ""
        },
        {
            nombre:"HP Omen Gaming 16",
            descripcion:"Intel Core™ i7-13700HX hasta 5,4 GHz, 36 MB de caché L3, 24 núcleos, 32 subprocesos)",
            imagen:"/Componentes/Imagenes/Portatiles/HP OMEN 16.png",
            precioDesc:"$2,000",
            precioNormal:"$2,500",
            valoracion:"4.3",
            opiniones:"140",
            link:""
        }
    ];

    return (
        <div>
            <h2>RECOMENDACIONES</h2>
            <div id="grid_main_reco">
                <a href="">
                    <img className="img_produ" src="/Componentes/Imagenes/Portatil.png" alt="Portatil ref" />
                    <h4>PORTATILES</h4>
                </a>
                {productos.map((producto, index) => (
                    <Producto
                        key={index}
                        nombre={producto.nombre}
                        descripcion={producto.descripcion}
                        imagen={producto.imagen}
                        precioDesc={producto.precioDesc}
                        precioNormal={producto.precioNormal}
                        valoracion={producto.valoracion}
                        opiniones={producto.opiniones}
                        link={producto.link}
                    />
                ))}
            </div>
        </div>
    );
}

export default Recomendacion;