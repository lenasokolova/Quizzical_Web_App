import { useState, useEffect } from "react";
import { nanoid } from "nanoid";
import Questions from "./Questions";

// function fetchData() {
//   fetch("https://opentdb.com/api.php?amount=5&type=multiple")
//     .then((response) => response.json())
//     .then((data) => setQuestions(data));
//   console.log(questions);
// }

function App() {
  const [isQuesLoaded, setIsQuesLoaded] = useState(false);
  const [questions, setQuestions] = useState([]);

  function handleClick() {
    return setIsQuesLoaded(!isQuesLoaded);
  }

  return (
    <div className="App">
      {isQuesLoaded ? (
        <Questions />
      ) : (
        <main>
          <h1 className="title-app">Quizzical</h1>
          <p className="desc-app">Some description if needed</p>
          <button className="btn" onClick={handleClick}>
            Start Quiz
          </button>
        </main>
      )}
    </div>
  );
}

export default App;
