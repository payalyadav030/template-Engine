const chalk = require('chalk');
const express = require('express');
const app = express();
const exphbs = require('express-handlebars');

const PORT = 8789;
app.use('/static', express.static('public'));

app.use(express.json());
app.use(express.urlencoded());

// configure handlebars
const hbs = exphbs.create({
    extname: '.hbs',
    helpers : {
        increment : function(value, options){
             return parseInt(value)+ 1; //we can also write it like
            //return "player" + (parseInt(value)+1);
        },
        bold : function(value, options){
            return "<b>" + value + "<b/>"
        }
    }
})
// after writing the configure handlebars we have to write
app.engine('.hbs', hbs.engine)

// app.engine('.hbs', exphbs({ // register handlebars as view engine
//     extname : '.hbs'
// }));

app.set('view engine', '.hbs');

app.get('/', function(req, res){
    var players = [
        {
           // id: 1, WE CAN USE @INDEX FOR INDEING and also see handlebars helpers
            playerName : "virat Kohli",
            score: 22345,
            available: true
        },
        {
           // id: 2,
            playerName : "Ms Dhoni",
            score: 34555,
            available: false
        },
        {
           // id: 3,
            playerName : "Rahul Dravid",
            score: 13445,
            available: false
        },
        {
           // id: 4,
            playerName : "Hardik Pandey",
            score: 7345,
            available: true
        }
    ]
    res.render('homepage', {
         title : "Players Management",
        players : players
    });
})
app.get('/about-us', function(req, res){
    res.render('aboutus',{
        title: "About Us"
    })
})

app.listen(PORT, function(){
    console.log("application has started on port:", PORT);
})