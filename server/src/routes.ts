import express from 'express';
import nodemailer from 'nodemailer';
import { NodemailerMailAdapter } from './adapters/nodemailer/nodemailer-mail-adapter';
import { prisma } from './prisma';
import { PrismaFeedbacksRepository } from './repositories/prisma/prisma-feedbacks-repository';
import { SubmitFeedbackUseCase } from './use-cases/submit-feedback-use-case';

export const routes = express.Router()

routes.post('/feedbacks', async (req, res) => {
   const { type, comment, screenshot } = req.body

   try {
   const prismaFeedbackRepository = new PrismaFeedbacksRepository()
   const nodemailerMailAdapter = new NodemailerMailAdapter()

   const submitFeedbackUseCase = new SubmitFeedbackUseCase(
      prismaFeedbackRepository,
      nodemailerMailAdapter
   )

   await submitFeedbackUseCase.execute({
      type,
      comment,
      screenshot
   })
   

   return res.status(201).send()
   } catch (err) {
      console.log(err)

      return res.status(500).send()
   }
})