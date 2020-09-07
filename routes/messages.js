const express = require("express");
const bodyParser = require('body-parser');
const router = express.Router();

router.use(bodyParser.urlencoded({ extended: false }));
router.use(bodyParser.json());

class Mensaje {
    constructor(id, Mensaje){
        this.id = id;
        this.Mensaje = Mensaje;
    }
}

let mensajes = [new Mensaje(1,'Hola'), new Mensaje(2,'Mundo')];
let id = 2;

//Get todos los mensajes
router.get('/', function (req, res) {
    res.json(mensajes);
}); 

//Get el mensaje con id indicado
router.get('/:id', function (req, res) {
    const i = mensajes.findIndex(element => element.id == req.params.id);
    if(i != -1){
        const mensaje = mensajes[i];
        res.json(mensaje);
    }
    else res.status(404).json('No existe o no se ha encontrado');
}); 

//Crea un nuevo mensaje
router.post('/', function (req, res) {
    mensajes.push(new Mensaje(++id, req.body.Mensaje));
    res.json(mensajes[mensajes.length-1]);
});        

//Actualiza un mensaje
router.put('/:id', function (req, res) {
    const i = mensajes.findIndex(element => element.id == req.params.id);
    if(i != -1){
        mensajes[i].Mensaje = req.body.Mensaje;
        res.json(mensajes[i]);
    }
    else res.status(404).json('No existe o no se ha encontrado');
}); 

//Borra un mensaje
router.delete('/:id', function (req, res) {
    const i = mensajes.findIndex(element => element.id == req.params.id);
    if(i != -1){
        mensajes.splice(i,1);
    }
    else res.status(404).json('No existe o no se ha encontrado');
}); 

module.exports = router;