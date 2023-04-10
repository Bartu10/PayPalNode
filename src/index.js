import express from 'express'
import paymentRoutes from './routes/payment.routes'

const app = express();

app.use(express.json());

app.use(paymentRoutes)

app.listen(3000);
console.log("server on port", 3000);
