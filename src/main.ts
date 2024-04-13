import express from 'express';
import path from 'path';

const PORT = 3000;
const app = express();

app.get('/', (_, res) => {
  console.log("GET /")
  res.status(200);
  res.sendFile(path.resolve('src/index.html'));
});

app.listen(PORT, () => {
  console.log(`Server listening at http://localhost:${PORT}/`);
});