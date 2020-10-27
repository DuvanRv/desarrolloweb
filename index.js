'use strict'
const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const mongoose = require('mongoose')
var persona_routes = require('./routes/personaRoute.js');


app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json())



app.use('/api',persona_routes);

mongoose.connect('mongodb+srv://duvanrosales:96737139a@cluster0.blwel.mongodb.net/taller?retryWrites=true&w=majority', (err, res) => {

    if(err){
        console.log("NO CONECTA")
    }
    app.listen(3000, () => {

        console.log("Esta corriendo en puerto 5000")
    })
})