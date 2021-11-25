import express from 'express';

const app = express();


app.get('/', (req, res) => {
  return res.json({ message: "Hello World Ignite!" });
})


app.listen(3333);