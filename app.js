// require express qui est dans le node_modules
let express = require('express');

// require moiddleware morgan dans le node_module
// >> permet de logger toutes les requeetes HTTP
let morgan = require('morgan');

// Charge le middleware de favicon
let favicon = require('serve-favicon');


// on définit une variable app qui appelle la fonction express
let app = express();

// faire attention à l'ordre d'appel des middleware

app.use(morgan('combined')) // 1er !! Active le middleware de logging
.use(express.static(__dirname + '/public')) // Indique que le dossier /public contient des fichiers statiques (middleware chargé de base)
.use(favicon(__dirname + '/public/favicon.ico')) // Active la favicon indiquée
.use(function(req, res){ // Répond enfin
    res.send('Hello');
});

app.listen(8080);
