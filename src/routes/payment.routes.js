import {Router} from 'express'
import { createOrder,captureOrder,cancelOrder } from '../controllers/payment.controller';

const router = Router();

router.post('/create', createOrder)

router.get('/capture', captureOrder)

router.get('/cancelling', cancelOrder)


export default router