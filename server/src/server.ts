import express from 'express'
import nodemailer from 'nodemailer'
import { routes } from './routes';
import cors from 'cors'


const app = express() 
console.log(process.env.PORT)
const PORT = process.env.PORT;

app.use(cors())
app.use(express.json());
app.use(routes);

app.listen(PORT, () => {
    console.log(`HTTP server running! 🎢 ${PORT}`)
})