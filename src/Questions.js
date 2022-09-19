import { useState, useEffect } from "react";
import { nanoid } from "nanoid";

export default function Questions() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

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
      <div key={index}>
        <h2>{item.question}</h2>
      </div>
    );
  });

  return (
    <main>
      {listOfQuestions}
      <button className="btn">Fetch data</button>
      {loading && <div>Loading data...</div>}
      {error && <div>{`There is a problem fetchning data = ${error}`}</div>}
      {/* {data && <div>{listItems}</div>} */}
      {/* ?{homes.map(home => <div>{home.name} */}
    </main>
  );
}
