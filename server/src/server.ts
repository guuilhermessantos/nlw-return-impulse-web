import express from 'express'
import nodemailer from 'nodemailer'
import { routes } from './routes';
import cors from 'cors'


const app = express() 
console.log(process.env.PORT)
const PORTA = process.env.PORT || 3333;

app.use(cors())
app.use(express.json());
app.use(routes);

app.listen(PORTA, () => {
    console.log(`HTTP server running! 🎢 ${PORTA}`)
})