class Usuario {
  constructor(nombre, apellido, libros, mascotas) {
    this.nombre = nombre;
    this.apellido = apellido;
    this.libros = libros;
    this.mascotas = mascotas;
  }

  getFullName() {
    return `Nombre Completo: ${this.nombre} ${this.apellido}`;
  }

  addMascota(nombre) {
    this.mascotas.push(nombre);
  }

  countMascotas() {
    return this.mascotas.length;
  }

  addBook(nombre, autor) {
    this.libros.push({ nombre: nombre, autor: autor });
  }

  getBookNames() {
    return this.libros.map((libro) => libro.nombre);
  }
}

const imprimirDatosUsuario = (usuario) => {
  console.log(`El Usuario se llama ${usuario.getFullName()} 
Tiene ${usuario.countMascotas()} Mascotas.`);
  for (let i = 0; i < usuario.mascotas.length; i++) {
    console.log(`La Mascota ${i + 1} se llama ${usuario.mascotas[i]}.`);
  }
  console.log(`Tiene ${usuario.libros.length} Libros.`);
  if (usuario.libros.length > 0) {
    console.log(`Los Nombres de sus Libros son:`);
    usuario.libros.forEach((libro) => {
      console.log(`${libro.nombre}`);
    });
  }
  console.log(`-----------------------------------------------`);
};

const luis = new Usuario("Luis", "Taillant", [], []);
luis.addBook("Informatica y Programacion 1", "Jhony Perez");
luis.addBook("La vida es bella", "Enrique Forlan");
luis.addMascota("Pepe");
luis.addMascota("Popi");

const juan = new Usuario("Juan", "Lopez", [], []);
juan.addBook("ET", "Pepe Paoloski");
juan.addBook("Economia 2", "Jorge Bucay");
juan.addBook("La comida es sana", "Daniela Toto");
juan.addMascota("Firu");
juan.addMascota("Amy");

imprimirDatosUsuario(luis);
imprimirDatosUsuario(juan);
