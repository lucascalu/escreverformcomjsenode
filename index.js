const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', (req, res) => {
  res.send(
    index.html
  );
});

app.post('/process', (req, res) => {
  const inputData = req.body.data;
  res.send(`Data received: ${inputData}`);
  console.log(inputData);
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
