// template engine - enables us to use static teplates files in our application. at runtime the template eng replace
//                   variables in a template file with actual values and transform the template into an html file sent to the client.
// some popular template eng that work with express are - Pug, Mustache and EJS
// EXPRESS APPLICATION GENERATOR USES JADE AS ITS DEFAULT BUT ALSO SUPPORTS OTHERS.
// BUT WE WILL BE USING - HANDLEBARS
// HANDLEBARS ARE BASICALLY PACKAGE WRITTEN IN JAVASRIPT


const chalk = require('chalk');
const express = require('express');
const app = express();
const exphbs = require('express-handlebars');
const PORT = 8899;


app.use(express.json());
app.use(express.urlencoded());

// register handlebars as view engine
// app.engine('handlebars', exphbs({
//     extname : '.hbs'
// }));
app.engine('.hbs', exphbs({
    extname : '.hbs'      //if we want to change the extension from handlebars to hbs we have to change the engine name also as hbs
}))
//app.set('view engine', 'handlebars');
app.set('view engine', '.hbs')  // after using extname as .hbs we have to write like this

app.get('/', function(req, res){
    res.render('homepage01', {
        //layout : false,
        name : "<b>payal</b>",
        age: 20,
        city: "kolkata",
        hobbies: [
            "coding",
            "singing",
            "badminton",
            "dancing"
        ],
        loggedIn : false // here it is a flag- flag is nothing but a true and falsy value and the name
        })
})
app.get('/aboutus', function(req, res){
    res.render('aboutus');
})
// LAYOUTS - it is a layout which needs to be repeated in our entire apllication(for eg- headers)


app.listen(PORT, function(){
    console.log("application is started on port:", PORT);
})
