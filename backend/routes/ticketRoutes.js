import express from 'express';
import { bookticket } from '../utils/ticketController.js';

const router = express.Router();

router.post("/book",bookticket);

export default router;