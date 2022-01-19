require('dotenv').config();
const express = require('express');
const hbs = require('hbs');

const app = express();


// Handlesbars
app.set('view engine', 'hbs');
hbs.registerPartials(__dirname + '/views/partials');


// servir contenido estatico y publico
app.use(express.static('public'))

app.get('/', function (req, res) {
    res.render('home', {
        titlePage: 'Desarrolladora full stack',
        title: 'lorena Parra',
        name: ''
    })
})

app.get('/generic', function (req, res) {
    // asi envia un archivo que ese encintre en el path que enviamos en el parentesis
    // res.sendFile(__dirname +'/public/generic.html')
    res.render('generic', {
        titlePage: 'Desarrolladora full stack',
        title: 'lorena Parra',
        name: ''
    })
})

app.get('/elements', function (req, res) {
    // asi envia un archivo que ese encintre en el path que enviamos en el parentesis
    //res.sendFile(__dirname +'/public/elements.html')
    res.render('elements', {
        titlePage: 'Desarrolladora full stack',
        title: 'lorena Parra',
        name: ''
    })
})

// toma todas las rutas que no esten declaradas antes 
//app.get('*', function (req, res) {
// asi envia un archivo que ese encintre en el path que enviamos en el parentesis
// res.sendFile('/carpeta/archivo')
// })

app.listen(process.env.PORT);