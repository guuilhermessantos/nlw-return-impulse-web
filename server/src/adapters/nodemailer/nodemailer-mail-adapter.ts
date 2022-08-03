import nodemailer from 'nodemailer'
import { MailAdapter, SendMailData } from "../mail-adapter";

const transport = nodemailer.createTransport({
   host: "smtp.mailtrap.io",
   port: 2525,
   auth: {
      user: "5350f10bcadd19",
      pass: "19924958655c6b"
   }
});
export class NodemailerMailAdapter implements MailAdapter {
   async sendMail({subject, body}: SendMailData) {
      await transport.sendMail({
         from: 'Equipe Feedget <oi@feedget.com>',
         to: 'Guilherme Santos <guuilhermessantos@gmail.com>',
         subject,
         html: body,
      })
   };
}