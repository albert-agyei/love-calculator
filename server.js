const express = require('express');
const bodyparser = require('body-parser');

const app = express();
app.use(bodyparser.urlencoded({
  extended: true
}));

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

app.post('/', (req, res) => {

  var firstname = req.body.name1;
  var secondname = req.body.name2;

  var calc = Math.random();
  calc = calc * 100;
  calc = Math.floor(calc);

  if (calc >= 80) {
    res.send("<h2>Congratulations!!! " + firstname + " loves " + secondname + " at " + calc + "%.</h2>");
  } else if (calc >= 50) {
    res.send("<h2>It can get better, More room for improvement. You had " + calc + "%, " + firstname + " and " + secondname +".</h2>");
  } else {
    res.send("<h2>" + calc+"%" + " Below average!!! "+ firstname + " and " + secondname + ".</h2>");
  }
});

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
