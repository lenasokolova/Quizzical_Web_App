import { useState, useEffect } from "react";
import { nanoid } from "nanoid";
import QuestionSet from "./QuestionSet";

export default function Questions() {
  //   const [questions, setQuestions] = useState([]);

  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  //   console.log(question);

  useEffect(() => {
    fetch(
      "https://opentdb.com/api.php?amount=5&category=12&difficulty=easy&type=multiple"
    )
      .then((response) => {
        if (!response.ok) {
          throw new Error(
            `This is an HTTP error: The status is ${response.status}`
          );
        }
        return response.json();
      })
      .then((actualData) => {
        setData(actualData.results);
        setError(null);
      })
      .catch((err) => {
        setError(err.message);
        setData(null);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  const listOfQuestions = data.map((item, index) => {
    const allAnswers = [
      { id: nanoid(), isCorrect: false, answer: item.incorrect_answers[0] },
      { id: nanoid(), isCorrect: false, answer: item.incorrect_answers[1] },
      { id: nanoid(), isCorrect: false, answer: item.incorrect_answers[2] },
      { id: nanoid(), isCorrect: true, answer: item.correct_answer },
    ];
    return {
      id: nanoid(),
      question: item.question,
      answers: allAnswers,
    };
  });

  const questionElm = listOfQuestions.map((question) => {
    return (
      <section key={question.id}>
        <QuestionSet
          question={question.question}
          answers={question.answers}
          isChosen={question.isChosen}
        />
      </section>
    );
  });

  return (
    <main className="quest-box">
      <section className="quest-content">{questionElm}</section>

      <button className="answer-btn">Check Answers</button>
      {loading && <div>Loading data...</div>}
      {error && <div>{`There is a problem fetchning data = ${error}`}</div>}
    </main>
  );
}
