import express from 'express';
const app = express();
const port = process.env.PORT || 4000;

app.use(express.json());

app.get('/api/hello', (req, res) => {
  res.json({ message: 'Hello from Express backend!' });
});

app.listen(Number(port), () => {
  console.log(`Backend listening at http://localhost:${port}`);
});
