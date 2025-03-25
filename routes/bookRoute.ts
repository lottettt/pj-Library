import express from 'express';
import { getAllBooks } from '../services/bookService'

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
});

export default router; 