import express from 'express'
import nodemailer from 'nodemailer'
import { routes } from './routes';
import cors from 'cors'

const PORT = process.env.PORT || 3333;

const app = express() 

app.use(cors())
app.use(express.json());
app.use(routes);

app.listen(PORT, () => {
    console.log('HTTP server running! 🎢')
})