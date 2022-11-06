const PirataControllers = require("../controllers/pirata.controller");

module.exports = app => {
    app.get("/api/piratas", PirataControllers.get_all);
    app.post("/api/piratas", PirataControllers.create_pirata);
    app.get("/api/piratas/:id", PirataControllers.get_pirata);
    app.put("/api/piratas/:id", PirataControllers.update_pirata);
    app.delete("/api/piratas/:id", PirataControllers.delete_pirata);
}
