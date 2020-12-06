var express = require("express");

var PORT = process.env.PORT || 8080;

var app = express();

app.use(express.urlencoded({extended: true }));
app.use(express.json());

var expressHandlebars = require("express-handlebars");

app.engine("handlebars", expressHandlebars({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

app.use(express.static("public"));

var router = require("./controllers/burgers_controller.js");

app.use(router);

app.listen(PORT, function() {
    console.log("Server listening on: http://localhost:" + PORT);
})