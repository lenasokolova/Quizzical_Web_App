import React, { useState } from "react";
import { fetchQuizQuestions } from "./API";
// Components
import QuestionCard from "./components/QuestionCard";
//Types
import { Difficulty } from "./API";

const TOTAL_QUESTIONS = 5;

const App = () => {
  const [loading, setLoading] = useState(false);
  const [questions, setQuestions] = useState([]);
  const [number, setNumber] = useState(0);
  const [userAnswers, setUserAnswers] = useState([]);
  const [score, setScore] = useState(0);
  const [gameOver, setGameOver] = useState(true);


  const startTrivia = async () => {
    setLoading(true);
    setGameOver(false);

    const newQuestions = await fetchQuizQuestions(TOTAL_QUESTIONS, Difficulty.EASY);
    setQuestions(newQuestions);
    setScore(0);
    setUserAnswers([]);
    setNumber(0);
    setLoading(false);
  }

  const checkAnswer = (e) => {

  }

  const nextQuestion = () => {
    //change to checkAnswers
  }



  return (
    <div className="App">
      <h1>Quizzical</h1>
      {gameOver || userAnswers.length === TOTAL_QUESTIONS ? (
        <button className="start" onClick={startTrivia}>
          Start
        </button>
      ) : null}

      {!gameOver ? <p>Score:</p> : null}
      {loading && <p>Loading Questions...</p>}
      {!loading && !gameOver && (
        <QuestionCard
          questionNr={number + 1}
          totalQuestions={TOTAL_QUESTIONS}
          question={questions[number].question}
          answers={questions[number].answers}
          userAnswer={userAnswers ? userAnswers[number] : undefined}
          callback={checkAnswer}
        />
      )}
      {!gameOver &&
        !loading &&
        userAnswers.length === number + 1 &&
        number !== TOTAL_QUESTIONS - 1 ? (
        <button
          className="next"
          onClick={nextQuestion}>
          Next Question
        </button>
      ) : null}
    </div >)
}

export default App;


















/* import { useState } from "react";
// import QuestionSet from "./QuestionSet";
// import Answers from "./Answers";
import { shuffleAnswers } from "./shuffleAnswers";

function App() {
  const [isQuesLoaded, setIsQuesLoaded] = useState(false);
  const [questions, setQuestions] = useState([]);
  const [loading, setLoading] = useState(true);
  // const [error, setError] = useState(null);

  console.log(questions)

  async function startQuiz() {
    try {
      setIsQuesLoaded(!isQuesLoaded);
      const response = await fetch(
        "https://opentdb.com/api.php?amount=5&category=12&difficulty=easy&type=multiple"
      );
      const data = await (response).json();
      const allQuestions = data.results;
      const listOfQuestions = allQuestions.map((question) => ({
        ...question,
        answers: shuffleAnswers([...question.incorrect_answers, question.correct_answer]),

      }))
      setQuestions(listOfQuestions);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  }

  function holdAnswer(questionId, answerId) {
    console.log({ questionId, answerId });
    // setQuestions((prevQuestion) =>
    //   prevQuestion.map((question) =>
    //     question.id === questionId
    //       ? {
    //         ...question,
    //         answers: question.answers.map((answer) =>
    //           answer.id === answerId
    //             ? { ...answer, isChosen: !answer.isChosen }
    //             : answer
    //         )
    //       }
    //       : question
    //   )
    // );
  }

  const questionElm = questions.map((question, index) => {
    return (
      <section key={index}>
        <QuestionSet question={question.question} key={question.id} />
        <Answers
          answers={question.answers}
          // isChosen={question.answers.isChosen}
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
*/