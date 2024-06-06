import React, { useState } from 'react';

const BirdQuiz = () => {
  const questions = [
    { question: 'Jak nazywa się ptak, który potrafi mówić?', answer: 'Papuga' },
    { question: 'Jaki ptak jest symbolem pokoju?', answer: 'Gołąb' },
    { question: 'Jak nazywa się najmniejszy ptak na świecie?', answer: 'Koliber' },
    { question: 'Jaki ptak jest symbolem mądrości?', answer: 'Sowa' },
  ];

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [userAnswer, setUserAnswer] = useState('');
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (userAnswer.toLowerCase() === questions[currentQuestion].answer.toLowerCase()) {
      setScore(score + 1);
    }
    setUserAnswer('');
    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setShowScore(true);
    }
  };

  return (
    <div className="quiz-page">
      <h1>Quiz o Ptakach</h1>
      {showScore ? (
        <div>
          <h2>Twój wynik: {score} na {questions.length}</h2>
        </div>
      ) : (
        <form onSubmit={handleSubmit}>
          <h2>{questions[currentQuestion].question}</h2>
          <input
            type="text"
            value={userAnswer}
            onChange={(e) => setUserAnswer(e.target.value)}
          />
          <button type="submit">Odpowiedz</button>
        </form>
      )}
    </div>
  );
};

export default BirdQuiz;
