const mongoose = require("mongoose");

const EsquemaPirata = new mongoose.Schema({
    nombre: {
        type: String,
        required: [true, "Nombre obligatorio"],
        minLength: [3, "Nombre debe tener al menos 2 caracteres"]
    },
    imagen: {
        type: String,
        required: [true, "Debe de colocar una URL"],
    },
    tesoro: {
        type: String,
        required: [true, "Debe escoger una cantidad"],   
    },
    cargo: {
        type: String,
        required: [true, "Debe escoger un cargo"],
    },
    peg_leg: {
        type: Boolean,
        default: false
    },
    eye_patch: {
        type: Boolean,
        default: false
    },
    hook_hand: {
        type: Boolean,
        default: false
    }

    
}, {timestamps: true, versionKey: false})

//timestamps crea los campos de createAt y updateAt
//versionKey: false elimina el atributo _v

const Pirata = mongoose.model("pirata", EsquemaPirata);

module.exports = Pirata;