const app = require('./app');

app.listen(process.env.APIPORT, err => {
  console.log('Server Listening NOW');
});