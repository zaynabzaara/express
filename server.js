var express = require('express');
var app = express();

app.set('view engine', 'ejs');

//Time middleware
const time = new Date();
const hour = time.getHours();
const day = time.getDay();

app.use(function (req,res,next) {
    if((day>=1 && day<6) && (hour>=9 && hour<=17))
      {
        next()
      }
    else{
        console.log('error')
        res.send('<h1 style="text-align:center;color:red" > Sorry we are not working now</h1> <p style="text-align:center"> We are available from monday to friday, from 9 to 17 </p> ')
    }
  })
// End of middleware

app.get('/', function(req, res) {
    res.render('pages/index');
});

app.get('/about', function(req, res) {
    res.render('pages/about');
});

app.get('/contact', function(req, res) {
    res.render('pages/contact');
});



app.listen(8080);
console.log('Welcome to port 8080');
