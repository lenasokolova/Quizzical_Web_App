import { useState } from "react";
import Questions from "./Questions";

function App() {
  const [isQuesLoaded, setIsQuesLoaded] = useState(false);

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
