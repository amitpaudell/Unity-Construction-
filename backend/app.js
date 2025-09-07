require('dotenv').config();

const express = require('express');

const app = express();

app.use((req, res, next) => {
  console.log(req.method, req.url);
  next();
});

app.get('/', (req, res, next) => {
  res.send('<h1>  Welcome to home page </h1>');
});

const PORT = process.env.PORT;
app.listen(PORT, () => {
  console.log(`Server running at port http://localhost:${PORT}`);
});
