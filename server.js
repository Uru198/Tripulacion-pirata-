const express = require("express");
const cors = require("cors");
const app = express();

//Para poder usar json y obtener datos de la URL
app.use(express.json(), express.urlencoded({extended: true}));

//Permite acceder de un origen distinto 
app.use(
    cors ({
        //URL de front end
        origin: "http://localhost:3000"
    }),
);

//Pendiente inicializar base de datos
require("./server/config/mongoose.config");

//Pendiente importar las rutas
const misRutas = require("./server/routes/pirata.routes");
misRutas(app);

app.listen(8000, () => console.log("servidor listo!"));