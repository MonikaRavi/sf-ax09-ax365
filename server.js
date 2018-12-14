var express = require('express');
var bodyParser = require('body-parser');
var cors = require('cors');

var favicon = require('serve-favicon');
var path = require('path');

var viewPath = __dirname + '/public/';

var app = express();
app.use(cors());

const port = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use(favicon(path.join(__dirname, '/public', 'favicon.ico')));

app.get('/', (req, res) => {

  res.sendFile(viewPath + "home.html");

});

//Require Routes

//Salesforce

require('./routes/salesforce.routes')(app);

//AX365

require('./routes/avlis.routes')(app);

//AX2009

require('./routes/sparks.route')(app);

//ALL

require('./routes/dashboard.routes')(app);

app.listen(port, () => {
  console.log(`Server started at port ${port}..`);
});


module.exports = { app };

