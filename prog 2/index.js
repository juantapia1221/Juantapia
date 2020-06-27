const Bajo = require("./Bajo");
const Guitarra = require("./Guitarra");
const Bateria = require("./Bateria");


const bajo1 = new Bajo("Bajo", "Cordófono","Leonard");
const guitarra1 = new Guitarra("Guitarra", "Cordófono","Smit");
const bateria1 = new Bateria("Bateria", "Percucion ","Pearl");

bajo1.tocar();
guitarra1.tocar();
bateria1.tocar();
