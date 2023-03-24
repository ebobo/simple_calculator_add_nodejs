const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
app.use(cors());

app.use(bodyParser.json());

const port = process.env.PORT || 5011;

app.post('/add', (req, res) => {
  const a = req.body.a;
  const b = req.body.b;
  const result = a + b;
  res.json({ result });
});

app.get('/health', (req, res) => {
  res.status(200).send('plus server is running!');
});

app.listen(port, () => {
  console.log('plus server started on port ' + port);
});
