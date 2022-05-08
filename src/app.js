const express = require('express');

const app = express();

app.use(express.json());

const PORT = 3000;

app.get('/', (req, res) => {
  res.status(200).json({ message: 'ok' });
});

app.listen(PORT, () => {
  console.log(`Api running at port ${PORT}`);
});
