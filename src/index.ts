import express from 'express';
import bookRoute from './routes/bookRoute';

const app = express();
const port = 3005;

app.use(express.json());
app.use('/books', bookRoute);

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});