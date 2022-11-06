const Pirata = require("../models/pirata.model");

module.exports.get_all = (req, res) => {
    Pirata.find().sort({nombre: 1})
        .then(pirata => res.json(pirata))
        .catch(err => {
            console.log(err);
            res.status(404).json(err);
        });
}

module.exports.create_pirata = (req, res) => {
    Pirata.create(req.body)
        .then(pirata => res.json(pirata))
        .catch(err => {
            console.log(err);
            res.status(400).json(err);
        });
}

module.exports.get_pirata = (req, res) => {
    Pirata.findOne({_id: req.params.id})
        .then(pirata => res.json(pirata))
        .catch(err => res.status(404).json(err));
}

module.exports.update_pirata = (req, res) => {
    //new:true nos regresa el documento ya modificado
    //runValidators: true nos revisa una vez más las validaciones del modelo
    Pirata.findByIdAndUpdate({_id: req.params.id}, req.body, {new:true, runValidators:true})
        .then(pirata => res.json(pirata))
        .catch(err => res.status(400).json(err));
}

module.exports.delete_pirata = (req, res) => {
    Pirata.deleteOne({_id: req.params.id})
        .then(result => res.json(result))
        .catch(err => res.status(400).json(err));
}
