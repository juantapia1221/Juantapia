const Instrumento = require("./Instrumento");

class Guitarra extends Instrumento{
    constructor(nombre,tipo,marca){
        super(nombre,tipo);
        this.marca= marca
               
    }
    tocar(){
        return console.log(`Usted esta tocando ${this.nombre}, tipo ${this.tipo}, marca ${this.marca} `) 
    }

    }

module.exports = Guitarra;