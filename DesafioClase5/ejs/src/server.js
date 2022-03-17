const express = require("express");
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("./public"));
app.set("views", "./src/views");
app.set("view engine", "ejs");

const productos = [
  {
    title: 'Notebook HP 348 G7 14" HD Intel i5',
    price: 499.99,
    thumbnail: "https://www.pcfactory.cl/public/foto/43833/1.jpg?t=1647480649",
  },
];

const PORT = 8083;
const srv = app.listen(PORT, () => {
  console.log(`Servidor http escuchando en http://localhost:${PORT}`);
});
srv.on("error", (error) => console.log(`Error en servidor ${error}`));

app.get("/", (req, res) => {
  res.render("index", {
    productos,
    cargar: true,
  });
});

app.get("/productos", (req, res) => {
  res.render("index", {
    productos,
    cargar: false,
  });
});

app.post("/productos", (req, res) => {
  const { body } = req;
  productos.push(body);
  res.render("index", {
    productos,
    cargar: false,
  });
});
