import { useState, useEffect } from "react";
import { nanoid } from "nanoid";
import QuestionSet from "./QuestionSet";

export default function Questions() {
  const [question, setQuestions] = useState([]);

  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  console.log(data);

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
    return (
      <section key={index}>
        <QuestionSet
          question={item.question}
          answer_corr={item.correct_answer}
          inc_answ_one={item.incorrect_answers[0]}
          inc_answ_two={item.incorrect_answers[1]}
          inc_answ_three={item.incorrect_answers[2]}
        />
      </section>
    );
  });

  return (
    <main className="quest-box">
      <section className="quest-content">{listOfQuestions}</section>

      <button className="answer-btn">Check Answers</button>
      {loading && <div>Loading data...</div>}
      {error && <div>{`There is a problem fetchning data = ${error}`}</div>}
    </main>
  );
}
