export default function QuestionSet(props) {
  const styles = {
    backgroundColor: props.isChosen ? "#D6DBF5" : "transparent",
  };

  return (
    <section className="quest" key={props.id}>
      <p>{props.question}</p>
      <section className="answer-container">
        <div className="answer-div" style={styles}>
          <p>{props.answer_corr}</p>
        </div>
        <div className="answer-div" style={styles}>
          <p>{props.inc_answ_one}</p>
        </div>
        <div className="answer-div" style={styles}>
          <p>{props.inc_answ_two}</p>
        </div>
        <div className="answer-div" style={styles}>
          <p>{props.inc_answ_three}</p>
        </div>
      </section>
    </section>
  );
}
