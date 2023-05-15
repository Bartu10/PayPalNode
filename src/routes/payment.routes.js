import {Router} from 'express'
import { createOrder,captureOrder,cancelOrder } from '../controllers/payment.controller';
import { sendMail } from '../controllers/mail.controller';

const router = Router();

router.post('/sendMail', sendMail)

router.post('/create', createOrder)

router.get('/capture', captureOrder)

router.get('/cancelling', cancelOrder)


export default router