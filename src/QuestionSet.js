export default function QuestionSet(props) {
  return (
    <section className="quest" key={props.id}>
      <p>{props.question}</p>
    </section>
  );
}