const express = require('express');
const loggerMiddleware = require('./loggerMiddleware');

const app = express();
const PORT = process.env.PORT || 3000;

// Register the logger middleware so it runs on every request
app.use(loggerMiddleware);

app.get('/', (req, res) => {
  res.send('Hello from IFT458 Module 5 Lab 1!');
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
