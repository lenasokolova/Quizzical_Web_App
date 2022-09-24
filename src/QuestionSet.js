export default function QuestionSet(props) {
  const styles = {
    backgroundColor: props.isChosen ? "#D6DBF5" : "transparent",
  };

  return (
    <section className="quest" key={props.id}>
      <p>{props.question}</p>
      <section className="answer-container">
        <div className="answer-div" style={styles}>
          <p>{props.answers[3].answer}</p>
        </div>
        <div className="answer-div" style={styles}>
          <p>{props.answers[1].answer}</p>
        </div>
        <div className="answer-div" style={styles}>
          <p>{props.answers[2].answer}</p>
        </div>
        <div className="answer-div" style={styles}>
          <p>{props.answers[0].answer}</p>
        </div>
      </section>
    </section>
  );
}
