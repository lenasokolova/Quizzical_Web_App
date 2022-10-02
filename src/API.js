import { shuffleAnswers } from './shuffleAnswers'

export const Difficulty = {
    "EASY": "easy",
    "MEDIUM": "medium",
    "HARD": "hard",

}

export const fetchQuizQuestions = async (amount, difficulty) => {
    const endpoint = `https://opentdb.com/api.php?amount=${amount}&difficulty=${difficulty}&type=multiple`;
    const data = await (await fetch(endpoint)).json();
    return data.results.map((question) => (
        {
            ...question,
            answers: shuffleAnswers([
                ...question.incorrect_answers,
                question.correct_answer,
            ])
        }
    ))
}