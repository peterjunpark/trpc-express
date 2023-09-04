import express from 'express';

const app = express();
const PORT: number = Number(process.env.PORT) || 3001;

app.get('/', (req, res) => {
  res.json({ message: 'hi' });
});

console.log('hi');

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
