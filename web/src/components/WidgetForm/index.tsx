import { CloseButton } from "../CloseButton";
import bugImageUrl from '../../assets/Bug.svg'
import ideaImageUrl from '../../assets/Idea.svg'
import thoughtImageUrl from '../../assets/Thought.svg'
import { useState } from "react";
import { FeedbackTypeStep } from "./Steps/FeedbackTypeStep";
import { FeedbackContentStep } from "./Steps/FeedbackContentStep";
import { FeedbackSuccessStep } from "./Steps/FeedbackSucessStep";
import { FEEDBACK_TYPES } from "../../mocks";

export type FeedbackType = keyof typeof FEEDBACK_TYPES

export function WidgetForm() {
   const [feedbackType, setFeedbackType] = useState<FeedbackType | null>(null)
   const [feedbackSent, setFeedbackSent] = useState(false);
   
   function handleRestartFeedback() {
      setFeedbackSent(false)
      setFeedbackType(null)
   }
   
   return (
      <div className="bg-zinc-900 p-4 relative rounded-2xl mb-4 flex flex-col items-center shadow-lg w-[calc(100vw-2rem)] md:w-auto">
      
      { feedbackSent ? (
         <FeedbackSuccessStep
         onFeedbackRestartRequested={handleRestartFeedback}
         />
         ) : (
            <>
            {!feedbackType ? (
               <FeedbackTypeStep onFeedbackTypeChanged={setFeedbackType}/>
               ) : (
                  <FeedbackContentStep
                  feedbackType={feedbackType}
                  onFeedbackRestartRequested={handleRestartFeedback}
                  onFeedbackSent={() => setFeedbackSent(true)}
                  />
               )}
            </>
         )}
         <footer className="text-xs text-neutral-400">
            Feito com ♥ pela <a className="underline underline-offset-2" href="https://rocketseat.com.br">Rocketseat</a>
         </footer>
      </div>
   );
}