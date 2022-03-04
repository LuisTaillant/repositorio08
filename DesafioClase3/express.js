const express = require("express");
const Contenedor = require("./contenedor.js");

const app = express();
const PORT = 8080;

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max + 1 - min)) + min;
}

const srv = app.listen(PORT, () => {
  const prod1 = {
    name: "Laptop Lenovo",
    price: 200,
    imag: "./img/product01.png",
  };

  const prod2 = {
    name: "Auriculares Sony",
    price: 210,
    imag: "./img/product02.png",
  };

  const prod3 = {
    name: "Laptop HP",
    price: 310,
    imag: "./img/product03.png",
  };

  console.log(`Servidor http escuchando en el puerto ${srv.address().port}`);
});

srv.on("error", (error) => console.log(`Error en servidor ${error}`));

function contenedorProd(name, price, imag) {
  let html = `<h1 style="background-color: blue;">Producto SELECCIONADO</h1>`;
  html += `<br>`;
  html += `<ul>`;
  html += `   <li>Nombre: ${name}</li>`;
  html += `   <li>Precio USD: ${price}</li>`;
  html += `<ul>`;
  html += `<img style="width: 500px" src="${imag}" alt="${name}"</td>`;
  html += `<br>`;
  html += `<a href="/"> Inicio</a>`;
  html += `<br>`;
  html += `<a href="/productos"> Ver Productos</a>`;
  return html;
}

app.get("/", (req, res) => {
  res.send(`
        <h1> Bienvenido al Portal Tech.</h1>
        <br>
        <br>
        <a href="/productos"> Ver Productos</a>
        <br>
        <a href="/productoRandom"> Ver un Producto</a>
    `);
});

app.get("/productos", async (req, res) => {
  const productos = new Contenedor("productos.json");
  const prods = await productos.getAll();
  let html = `<h1 style="background-color: red;">Productos en Stock</h1>`;
  html += `<br>`;
  html += `<table>`;
  html += `   <tr>`;
  html += `       <th>Nombre</th>`;
  html += `       <th>Precio</th>`;
  html += `       <th>Foto</th>`;
  html += `   </tr>`;
  for (let p of prods) {
    html += `<tr>`;
    html += ` <td>${p.name}</td>`;
    html += ` <td> USD ${p.price}</td>`;
    html += ` <td><img style="width: 50px" src="${p.imag}" alt="${p.name}"</td>`;
    html += `</tr>`;
  }
  html += `</table>`;
  html += `<br>`;
  html += `<a href="/"> Inicio</a>`;
  html += `<br>`;
  html += `<a href="/productoRandom"> Ver un Producto</a>`;
  res.send(html);
});

app.get("/productoRandom", async (req, res) => {
  const productos = new Contenedor(`productos.json`);
  const prods = await productos.getAll();
  const id = getRandomInt(1, prods.length);
  const prod = prods[id];
  console.log(id);
  console.log(prod);
  res.send(contenedorProd(prod.name, prod.price, prod.imag));
});
