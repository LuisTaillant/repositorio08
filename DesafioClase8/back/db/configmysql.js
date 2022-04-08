import _knex from "knex";

const knex = _knex({
  client: "mysql2",
  connection: {
    host: "127.0.0.1", //LOCALHOST del servidor APACHE
    port: 3306,
    user: "root",
    password: "1234", // si no hay password hay que ponerlo igual y dejarlo vacío
    database: "ecommerce", // base de tatos creada en phpmyadmin
  },

  pool: { min: 2, max: 8 }, // va de 0 a 10. Configuración de hilos de consulta (pública)
});

knex.schema
  .createTableIfNotExists("productos", function (table) {
    table.increments("id").primary();
    table.string("nombre");
    table.string("tipo");
    table.float("precio");
    table.string("imagen");
    table.integer("stock");
    table.integer("quantity");
    table.integer("total");
    table.timestamp("created_at").defaultTo(knex.fn.now());
    table.timestamp("updated_at").defaultTo(knex.fn.now());
    table.timestamp("deleted_at").defaultTo(knex.fn.now());
  })
  .then(() => {
    console.log("Tabla de productos conectada");
  })
  .catch((err) => {
    throw err;
  });

//DESCOMENTAR ESTO PARA CREAR TABLA DE PRODUCTOS

knex("productos")
  .insert([
    {
      nombre: "Notebook HP 348 G7 14'HD Intel i5",
      tipo: "notebook",
      precio: 499.99,
      imagen: "https://www.pcfactory.cl/public/foto/43833/1.jpg",
      stock: 12,
      quantity: 0,
      total: null,
    },
    {
      nombre: "Notebook HP Gamer Pavilion Intel i5",
      tipo: "notebookGamer",
      precio: 949.99,
      imagen: "https://www.pcfactory.cl/public/foto/38802/1.jpg",
      stock: 13,
      quantity: 0,
      total: null,
    },
    {
      nombre: "Notebook Acer Gamer Nitro 5 Intel i5",
      tipo: "notebookGamer",
      precio: 779.99,
      imagen: "https://www.pcfactory.cl/public/foto/38217/1.jpg",
      stock: 4,
      quantity: 0,
      total: null,
    },
    {
      nombre: "Notebook HP 240 G8 14'HD Celeron",
      tipo: "notebook",
      precio: 349.99,
      imagen: "https://www.pcfactory.cl/public/foto/43505/1.jpg",
      stock: 13,
      quantity: 0,
      total: null,
    },
    {
      nombre: "Notebook HP 2en1 Spectre x360 13.5'FHD Intel Core i5",
      tipo: "notebook",
      precio: 1449.99,
      imagen: "https://www.pcfactory.cl/public/foto/42286/1.jpg",
      stock: 12,
      quantity: 0,
      total: null,
    },
    {
      nombre: "Smartphone Galaxy A12 128GB",
      tipo: "smartphone",
      precio: 179.99,
      imagen: "https://www.pcfactory.cl/public/foto/42835/1.jpg",
      stock: 5,
      quantity: 0,
      total: null,
    },
    {
      nombre: "Smartphone Moto E7 32GB",
      tipo: "smartphone",
      precio: 1129.99,
      imagen: "https://www.pcfactory.cl/public/foto/41618/1.jpg",
      stock: 3,
      quantity: 0,
      total: null,
    },
    {
      nombre: "Smartphone Nokia 3.4 64GB",
      tipo: "smartphone",
      precio: 158.99,
      imagen: "https://www.pcfactory.cl/public/foto/44961/1.jpg",
      stock: 14,
      quantity: 0,
      total: null,
    },
  ])
  .then(() => {
    console.log("Productos agregados");
  })
  .catch((err) => {
    throw err;
  });

export default knex;
