const express = require('express');

const routes = require('./routes/index');

const app = express();
app.use(express.json());


// Enable CORS from client-side
app.use((req, res, next) => {
	res.header("Access-Control-Allow-Origin", "*");
	res.header('Access-Control-Allow-Methods', 'PUT, GET, POST, DELETE, OPTIONS');
	res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization, Access-Control-Allow-Credentials");
	res.header("Access-Control-Allow-Credentials", "true");
	next();
});



// Express route handlers

app.get('/', (req, res) => {
  res.send('Working');
});


app.use('/v1', routes);
app.use('*', (req, res)=>{
  res.status(500).send({message: "Something went wrong !"})
})

module.exports = app;