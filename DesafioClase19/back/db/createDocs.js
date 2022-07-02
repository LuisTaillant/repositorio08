/* --------------------------------- CREATE --------------------------------- */
import "./db.js";
import { ProductModel } from "../models/product.model.js";
import { ChatModel } from "../models/chat.model.js";

const chat1 = {
  author: {
    id: "luis@gmail.com",
    nombre: "Luis",
    apellido: "Taillant",
    alias: "Lucho",
    avatar:
      "https://cdn.pixabay.com/photo/2016/11/18/23/38/child-1837375_960_720.png",
  },
  text: "Hola cabeza!",
  created_at: new Date().toLocaleString(),
};

const chat2 = {
  author: {
    id: "luis@gmail.com",
    nombre: "Luis",
    apellido: "Taillant",
    alias: "Lucho",
    avatar:
      "https://cdn.pixabay.com/photo/2016/11/18/23/38/child-1837375_960_720.png",
  },
  text: "Chau pichu!",
  created_at: new Date().toLocaleString(),
};

const chat3 = {
  author: {
    id: "cele@gmail.com",
    nombre: "Celeste",
    apellido: "Oviedo",
    alias: "Cele",
    avatar:
      "https://cdn.pixabay.com/photo/2014/04/03/10/32/user-310807_960_720.png",
  },
  text: "Hola amor",
  created_at: new Date().toLocaleString(),
};

const prod1 = {
  nombre: "Notebook HP 348 G7 14 HD Intel i5",
  tipo: "notebook",
  precio: 1700,
  imagen: "https://www.pcfactory.cl/public/foto/43833/1.jpg",
  stock: 12,
  quantity: 0,
  total: null,
};
const prod2 = {
  nombre: "Notebook HP Gamer Pavilion Intel i5",
  tipo: "notebook gamer",
  precio: 2100,
  imagen: "https://www.pcfactory.cl/public/foto/38802/1.jpg",
  stock: 13,
  quantity: 0,
  total: null,
};
const prod3 = {
  nombre: "Notebook Acer Gamer Nitro 5 Intel i5",
  tipo: "notebook",
  precio: 1700,
  imagen: "https://www.pcfactory.cl/public/foto/38217/1.jpg",
  stock: 4,
  quantity: 0,
  total: null,
};

const prod4 = {
  nombre: "Notebook HP 240 G8 14 HD Celeron",
  tipo: "notebook",
  precio: 1700,
  imagen: "https://www.pcfactory.cl/public/foto/43505/1.jpg",
  stock: 13,
  quantity: 0,
  total: null,
};

const prod5 = {
  nombre: "Notebook HP 2en1 Spectre x360 13.5 FHD Intel Core i5",
  tipo: "notebook",
  precio: 1700,
  imagen: "https://www.pcfactory.cl/public/foto/42286/1.jpg",
  stock: 12,
  quantity: 0,
  total: null,
};

const prod6 = {
  nombre: "Smartphone Galaxy A12 128GB",
  tipo: "smartphone",
  precio: 1900,
  imagen: "https://www.pcfactory.cl/public/foto/42835/1.jpg",
  stock: 5,
  quantity: 0,
  total: null,
};

const prod7 = {
  nombre: "Smartphone Moto E7 32GB",
  tipo: "smartphone",
  precio: 2100,
  imagen: "https://www.pcfactory.cl/public/foto/41618/1.jpg",
  stock: 3,
  quantity: 0,
  total: null,
};

const prod8 = {
  nombre: "Smartphone Nokia 3.4 64GB",
  tipo: "smartphone",
  precio: 2000,
  imagen: "https://www.pcfactory.cl/public/foto/44961/1.jpg",
  stock: 14,
  quantity: 0,
  total: null,
};

export default async function createDocs() {
  try {
    await ProductModel.create([
      prod1,
      prod2,
      prod3,
      prod4,
      prod5,
      prod6,
      prod7,
      prod8,
    ]);
    await ChatModel.create([chat1, chat2, chat3]);
    console.log("Datos subidos!");
  } catch (error) {
    console.log(error);
  }
}
