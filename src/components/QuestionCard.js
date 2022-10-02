import React from "react";

const QuestionCard = ({ question, answers, callback, userAnswer, questionNr, totalQuestions }) => (
    <div>
        <p className="number">
            Question: {questionNr} /{totalQuestions}
        </p>
        <div>
            <p dangerouslySetInnerHTML={{ __html: question }}>
            </p>
            <div>
                {answers.map((answer) => (
                    <div>
                        <button className=".answer-btn" disabled={userAnswer} onClick={callback}>
                            <span dangerouslySetInnerHTML={{ __html: answer }}></span>
                        </button>
                    </div>
                ))}

            </div>
        </div>
    </div>
);


export default QuestionCard