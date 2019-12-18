// var express = require('express');
// var app = express();

// // set the port of our application
// // process.env.PORT lets the port be set by Heroku
// var port = process.env.PORT || 8080;

// // set the view engine to ejs
// app.set('view engine', 'ejs');

// // make express look in the public directory for assets (css/js/img)
// app.use(express.static(__dirname + '/public'));

// // set the home page route
// app.get('/', function(req, res) {

// 	// ejs render automatically looks in the views folder
// 	res.render('index');
// });

// app.listen(port, function() {
// 	console.log('Our app is running on http://localhost:' + port);
// });


// const express = require('express')
// const app = express()
// const util = require('util')
// const port = process.env.PORT || 8080;
// if (process.env.NODE_ENV === 'production') {
// 	app.use(express.static('client/build'));
// }
// // const port = 8080;
var express = require('express');
var app = express();

// set the port of our application
// process.env.PORT lets the port be set by Heroku
var port = process.env.PORT || 8080;

// set the view engine to ejs
app.set('view engine', 'ejs');

// make express look in the public directory for assets (css/js/img)
app.use(express.static(__dirname + '/public'));

// set the home page route
app.get('/', function(req, res) {

	// ejs render automatically looks in the views folder
	res.render('index');
	console.log(req.ip);
  	console.log(req.originalUrl);
  	console.log(util.inspect(req.body, {showHidden: false, depth: null}));
  	res.send("OK")
});

var bodyParser = require('body-parser');

app.use(bodyParser.json());

// app.get('*',(req, res) => {
//     res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
// });
// app.get('*', (req, res) => {
//   console.log(req.ip);
//   console.log(req.originalUrl);
//   console.log(util.inspect(req.body, {showHidden: false, depth: null}));
//   res.send("OK")
// })

app.post('*', (req,res) => {
  console.log(req.ip);
  console.log(req.originalUrl);
  console.log(util.inspect(req.body, {showHidden: false, depth: null}));
  if(req.originalUrl = "/refresh") {
    res.json({
      access_token:"eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJtYXR0aGV3LmFsbGVuQGJsdWV3b2xmZ3JvdXAuY29tIiwic3ViIjoiU0ZEQyB0ZWFtIC0gYmx1ZSB3b2xmICAiLCJqdGkiOiJVTklRVUVJRC1tYXR0aGV3LmFsbGVuIiwic2NvcGUiOlsic2VsZiIsImFkbWlucyJdLCJpYXQiOjE1MjIyNzU4NzYsImV4cCI6MTUzODA4NzA3Nn0.lWBLx0rptkGDNHiSuXoPKClwFvPGgG4GBQAOtSldQyo",
      token_type: "Bearer",
      expires_in: 300,
      scope: "offline_access",
      refresh_token: "test_Refresh_token"
    })
  } else {
    res.json({status:"ok"})
  }

})

app.listen(port, () => console.log(`Example app listening on port ${port}!`))