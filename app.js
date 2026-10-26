const express = require('express');

const app = express();
const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.send('Hello from IFT458 Module 5 Lab 1!');
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
