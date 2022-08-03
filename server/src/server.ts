import express from 'express'
import nodemailer from 'nodemailer'
import { routes } from './routes';
import cors from 'cors'


const app = express() 
const PORT = process.env.PORT || 3333;

app.use(cors())
app.use(express.json());
app.use(routes);

app.listen(PORT, () => {
    console.log(`HTTP server running! 🎢 ${PORT}`)
})