require('dotenv').config();

const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

const constructionRoutes = require('./routes/construction');
const servicesRoutes = require('./routes/services');
const app = express();

app.use(
  cors({
    origin: '*',
  })
);

app.use(express.json());

app.use((req, res, next) => {
  console.log(req.method, req.url);
  next();
});

app.use('/api/construction', constructionRoutes);
app.use('/api/service', servicesRoutes);

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    app.listen(process.env.PORT, () => {
      console.log(
        `Server running at port http://localhost:${process.env.PORT}`
      );
    });
  })
  .catch((error) => {
    console.log(error);
  });
