/* import logo from './logo.svg';
import './App.css'; */
import React, { Fragment, useState } from 'react'
import Header from './components/Header'
import Footer from './components/Footer'
import Producto from './components/Producto'
import Carrito from './components/Carrito'

function App() {
  const [productos, guardarproductos] = useState([
    { id: 1, nombre: "Camisa react", precio: 50 },
    { id: 2, nombre: "Camisa express", precio: 40 },
    { id: 3, nombre: "Camisa electron", precio: 30 },
    { id: 4, nombre: "Camisa vue", precio: 25 },
  ]);

  const [carrito, agregarProducto]= useState([])
  
  const fecha = new Date().getFullYear()
  /* arriba codigo JS */
  return (
    <Fragment>
      <Header 
      titulo='Tienda Virtual'
       />
      <h1>Lista de Productos</h1>
      {productos.map(producto => (
        <Producto
          producto={producto}
          key={producto.id}
          carrito={carrito}
          productos={productos}
          agregarProducto={agregarProducto}
        />
      ))}

      <Carrito
        carrito={carrito}
        agregarProducto={agregarProducto}
      />
      <Footer
        fecha={fecha}
      />
    </Fragment>
  );
}

export default App
