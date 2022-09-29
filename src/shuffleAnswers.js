export function shuffleAnswers(array) {
  [...array].sort(() => Math.random() - 0.5);
}
