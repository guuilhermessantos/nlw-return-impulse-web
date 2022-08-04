import express from 'express'
import nodemailer from 'nodemailer'
import { routes } from './routes';
import cors from 'cors'

const app = express() 

app.use(cors())
app.use(express.json());
app.use(routes);

console.log(process.env.PORT || 3333)


app.listen(process.env.PORT || 3333, () => {
    console.log(`HTTP server running! ${process.env.PORT || 3333} 🎢`)
})