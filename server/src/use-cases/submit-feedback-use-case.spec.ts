import { SubmitFeedbackUseCase } from "./submit-feedback-use-case"

// spies = espiões

const createFeedbackSpy = jest.fn();
const sendMailSpy = jest.fn();

const submitFeedback = new SubmitFeedbackUseCase(
   { create: createFeedbackSpy },
   { sendMail: sendMailSpy }
)

describe('Submit Feedback', () => {
   it('should be able to submit a feedback', async () => {
      await expect(submitFeedback.execute({
         type: 'Bug',
         comment: 'example comment',
         screenshot: 'data:image/png;base64,aushuiahsdiah',
      })).resolves.not.toThrow()

      expect(createFeedbackSpy).toHaveBeenCalled()
      expect(sendMailSpy).toHaveBeenCalled()
   });

   // testando erro do tipo
   it('should not be able to submit a feedback without type', async () => {
      await expect(submitFeedback.execute({
         type: '',
         comment: 'example comment',
         screenshot: 'data:image/png;base64,812egsu8afhasufhn12i3u',
      })).rejects.toThrow()
   })

      // testando erro do comentario
   it('should not be able to submit a feedback without comment', async () => {
      await expect(submitFeedback.execute({
         type: 'BUG',
         comment: '',
         screenshot: 'data:image/png;base64,812egsu8afhasufhn12i3u',
      })).rejects.toThrow()
   })

   // testando erro da screenshot
   it('should not be able to submit a feedback with an invalid screenshot', async () => {
      await expect(submitFeedback.execute({
         type: 'BUG',
         comment: 'ta tudo bugado',
         screenshot: '123',
      })).rejects.toThrow()
   })
});