import { useState } from "react";
import { frequentlyAskedQuestions } from "../../../utils/content";
import FAQlist from "./FAQlist";

const FAQs = () => {
  const [category, setCategory] = useState("General");
  const [activeQuestion, setActiveQuestion] = useState(null);

  const categoryObject = frequentlyAskedQuestions.find(
    (obj) => obj.category === category,
  );

  const questionsArr = categoryObject?.questions || [];

  const handleQuestionClick = (id) =>
    id === activeQuestion ? setActiveQuestion(null) : setActiveQuestion(id);

  const handleCategoryClick = (categoryName) => {
    setActiveQuestion(null);
    setCategory(categoryName);
  };

  return (
    <section className="bg-gradient-to-bottom justify-items-center">
      <div className="w-full max-w-[90rem] py-32">
        <h2 className="text-primary-50 mb-8 text-center text-6xl/18 font-semibold tracking-tighter">
          Frequently Asked Questions
        </h2>
        <div className="mb-8 text-xl/loose font-light">
          <p className="text-primary-100 text-center">
            The most commonly asked questions about NoteFlow. <br /> Have any
            other questions?{" "}
            <a href="#" className="underline decoration-1 underline-offset-3">
              Chat with our expert tech team
            </a>
          </p>
        </div>

        {/* Category buttons */}
        <ul className="mb-16 flex flex-wrap justify-center gap-x-3 gap-y-4">
          {frequentlyAskedQuestions.map((obj) => (
            <li
              key={obj.id}
              className={`border-primary-50 text-primary-50 transition-properties cursor-pointer rounded-full border-2 px-8 py-3.5 text-lg/8 ${
                obj.category === category
                  ? "bg-primary-500 text-primary-1300 border-primary-500 primary-glow"
                  : "hover:bg-primary-50 hover:text-primary-1300"
              }`}
            >
              <button onClick={() => handleCategoryClick(obj.category)}>
                {obj.category}
              </button>
            </li>
          ))}
        </ul>

        {/* FAQ List */}
        <FAQlist
          category={category}
          questions={questionsArr}
          activeQuestion={activeQuestion}
          handleQuestionClick={handleQuestionClick}
        />
      </div>
    </section>
  );
};

export default FAQs;
