import { useState } from "react";
import QuestionSet from "./components/QuestionSet";
import Answers from "./components/Answers";
import { nanoid } from "nanoid";

function App() {
  const [isQuesLoaded, setIsQuesLoaded] = useState(false);
  const [questions, setQuestions] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  async function startQuiz() {
    try {
      setIsQuesLoaded(!isQuesLoaded);
      const response = await fetch(
        "https://opentdb.com/api.php?amount=5&category=12&difficulty=easy&type=multiple"
      );
      const data = await response.json();
      const allQuestions = data.results;
      const listOfQuestions = allQuestions.map((item) => {
        const allAnswers = [
          {
            id: nanoid(),
            isCorrect: false,
            isChosen: false,
            answer: item.incorrect_answers[0]
          },
          {
            id: nanoid(),
            isCorrect: false,
            isChosen: false,
            answer: item.incorrect_answers[1]
          },
          {
            id: nanoid(),
            isCorrect: false,
            isChosen: false,
            answer: item.incorrect_answers[2]
          },
          {
            id: nanoid(),
            isCorrect: true,
            isChosen: false,
            answer: item.correct_answer
          }
        ];
        return {
          id: nanoid(),
          question: item.question,
          answers: allAnswers
        };
      });
      setQuestions(listOfQuestions);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  }

  function holdAnswer(questionId, answerId) {
    console.log({ questionId, answerId });
    setQuestions((prevQuestion) =>
      prevQuestion.map((question) =>
        question.id === questionId
          ? {
            ...question,
            answers: question.answers.map((answer) =>
              answer.id === answerId
                ? { ...answer, isChosen: !answer.isChosen }
                : answer
            )
          }
          : question
      )
    );
  }

  const questionElm = questions.map((question, index) => {
    return (
      <section key={index}>
        <QuestionSet question={question.question} key={question.id} />
        <Answers
          answers={question.answers}
          isChosen={question.answers.isChosen}
          holdAnswer={(answerId) => holdAnswer(question.id, answerId)}
        />
      </section>
    );
  });

  return (
    <div className="App">
      {!isQuesLoaded ? (
        <main>
          <h1 className="title-app">Quizzical</h1>
          <p className="desc-app">Some description if needed</p>
          <button className="btn" onClick={startQuiz}>
            Start Quiz
          </button>
        </main>
      ) : (
        <main className="quest-box">
          {loading && <div>Loading data...</div>}
          {error && <div>{`There is a problem fetchning data = ${error}`}</div>}
          <section className="quest-content">{questionElm}</section>

          <button className="answer-btn">Check Answers</button>
        </main>
      )}
    </div>
  );
}

export default App;
