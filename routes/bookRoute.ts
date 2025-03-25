import express, { Request, Response } from "express";
import { 
  getAllBooks,
  searchBooksByTitle,
  getBooksDueOnDate
} from '../services/bookService'

const router = express.Router();

router.get('/', async (req: Request, res: Response) => {
  try {
    const response = await getAllBooks();
    res.json(response);
    return;
  } catch (error) {
    res.status(400).send(error);
    return;
  }
})

router.get('/search', async (req: Request, res: Response) => {
  try {
    const { title } = req.query;
    if (!title || typeof title !== 'string') {
      return res.status(400).json({ error: 'Title query param is required' });
    }
    const books = await searchBooksByTitle(title);
    res.json(books);
  } catch (error) {
    res.status(400).send(error);
    return;
  }
})

router.get('/due', async (req: Request, res: Response) => {
  const dates = req.query;
  if (!dates || typeof dates !== 'string') {
    res.status(400).json({ error: 'Date query param is required' });
    return 
  }
    const dueDate = new Date(dates);
    const booksDue = await getBooksDueOnDate(dueDate);

    res.json(booksDue);
    return;
})

export default router;