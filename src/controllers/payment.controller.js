
import axios from "axios"
import { PAYPAL_API, PAYPAL_API_CLIENT, PAYPAL_API_SECRET } from "../config"

export const createOrder = async (req, res) => {

    const order = {
        intent: 'CAPTURE',
        purchase_units: [
            {
                amount: {
                    currency_code: "EUR",
                    value: req.body.value
                },
                description: req.body.description
            }
        ],
        application_context : {
            brand_name: "Classic.com",
            landing_page: "LOGIN",
            user_action: "PAY_NOW",
            return_url: "https://proyectspring-production.up.railway.app/#/orderprocess",
            cancel_url: "http://localhost:3000/cancel"
        }
    }

    const response = await axios.post(`${PAYPAL_API}/v2/checkout/orders`, order, {
        auth:{
            username: PAYPAL_API_CLIENT,
            password: PAYPAL_API_SECRET
        }
    })

    res.send(response.data) // Guardar a BD 
}
export const captureOrder = async (req, res) => {

    const {token, PayerID} = req.query

    const response = await axios.post(`${PAYPAL_API}/v2/checkout/orders/${token}/capture`, {} , {
        auth:{
            username: PAYPAL_API_CLIENT,
            password: PAYPAL_API_SECRET
        }
    })

    res.send('capture order')
}
export const cancelOrder = (req, res) => {
    res.send('cancel order')
}