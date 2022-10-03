function Answer(props) {
  const styles = {
    backgroundColor: props.answer.isChosen ? "#D6DBF5" : "transparent"
  };
  return (
    <div
      className="answer-div"
      style={styles}
      id={props.answer.id}
      onClick={() => props.holdAnswer(props.answer.id)}
    >
      <p>{props.answer.answer}</p>
    </div>
  );
}

export default function Answers(props) {
  return (
    <section className="answer-container">
      {props.answers.map((answer) => (
        <Answer holdAnswer={props.holdAnswer} answer={answer} key={answer.id} />
      ))}
    </section>
  );
}
