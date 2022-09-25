export default function Answers(props) {
  const styles = {
    backgroundColor: props.isChosen ? "#D6DBF5" : "transparent",
  };

  return (
    <section className="answer-container">
      {/* {answerOptions} */}
      <div
        className="answer-div"
        style={styles}
        id={props.answers[3].id}
        onClick={props.holdAnswer}
      >
        <p>{props.answers[3].answer}</p>
      </div>
      <div
        className="answer-div"
        style={styles}
        id={props.answers[1].id}
        onClick={props.holdAnswer}
      >
        <p>{props.answers[1].answer}</p>
      </div>
      <div
        className="answer-div"
        style={styles}
        id={props.answers[2].id}
        onClick={props.holdAnswer}
      >
        <p>{props.answers[2].answer}</p>
      </div>
      <div
        className="answer-div"
        style={styles}
        id={props.answers[0].id}
        onClick={props.holdAnswer}
      >
        <p>{props.answers[0].answer}</p>
      </div>
    </section>
  );
}
