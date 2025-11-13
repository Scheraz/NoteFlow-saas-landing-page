import { motion, AnimatePresence } from "motion/react";
import CaretUp from "../../icons/CaretUp";

const FAQ = ({ question, activeQuestion, handleQuestionClick }) => {
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };
  const isActive = activeQuestion === question.id;
  console.log("FAQ", question.id, "isActive:", isActive);

  return (
    <motion.li variants={itemVariants} className="shrink-0 grow-0">
      <button
        className="flex w-full cursor-pointer items-center"
        onClick={() => handleQuestionClick(question.id)}
      >
        <div className="border-primary-50 mr-6 rounded-xl border-2 p-3.5">
          <question.Icon
            className="stroke-primary-50"
            width={2}
            alt={question.alt}
          />
        </div>
        <p className="text-primary-50 mr-auto pr-4 text-left text-xl/loose font-medium tracking-tight">
          {question.question}
        </p>
        <div className="flex h-12 w-12 shrink-0 items-center justify-center">
          <CaretUp
            className="stroke-primary-50"
            activeQuestion={isActive}
            width={2.5}
            alt="caret up icon"
          />
        </div>
      </button>

      <AnimatePresence initial={false}>
        {activeQuestion === question.id && (
          <motion.p
            key="answer"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: "easeIn" }}
            className="text-primary-100 mt-2 overflow-hidden"
          >
            {question.answer}
          </motion.p>
        )}
      </AnimatePresence>
    </motion.li>
  );
};

export default FAQ;
