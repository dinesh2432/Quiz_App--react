import React, { useState, useEffect } from 'react';
import { useNavigate,useLocation } from 'react-router-dom';
import quizData from '../../data/quizData.json';
import './C_Quiz.css';

const CQuiz = () => {
  const [date, setDate] = useState('');
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [level, setLevel] = useState('beginner');

  const [selectedOption, setSelectedOption] = useState(null);
  const [isAnswerClicked, setIsAnswerClicked] = useState(false);
  const location=useLocation()
  const navigate = useNavigate();

  useEffect(() => {
    const today = new Date();
    setDate(today.getFullYear());
  }, []);

  const handleBack = (e) => {
    e.preventDefault();
    navigate('/programs');
  };

  const handleAnswerOptionClick = (isCorrect, index) => {
    setSelectedOption(index);
    setIsAnswerClicked(true);

    if (isCorrect) {
      setScore((prevScore) => prevScore + 1);
    }

    
    setTimeout(() => {
      const nextQuestion = currentQuestion + 1;
      if (nextQuestion < quizData.c[level].length) {
        setCurrentQuestion(nextQuestion);
        setSelectedOption(null);
        setIsAnswerClicked(false);
      } else {
        setShowScore(true);
      }
    }, 1000);
  };


  const handleRetake = () => {
    setCurrentQuestion(0);
    setScore(0);
    setShowScore(false);
  };

  const handleNextLevel = () => {
    const levels = ['beginner', 'intermediate', 'advanced', 'pro'];
    const currentIndex = levels.indexOf(level);
    const nextLevel = levels[currentIndex + 1];
    setLevel(nextLevel);
    setCurrentQuestion(0);
    setScore(0);
    setShowScore(false);
  };

  const symbol = '\u00A9';
  const names = 'DINESH K';

  return (
    <div className="c_quiz">
      <header>
        <h3>QUIZ GAME</h3>
        <button onClick={handleBack} className="btn9">BACK</button>
      </header>

      <main>
        <h1 style={{ textAlign: 'center',fontSize:'35px', marginBottom: '5px', color:'aqua' }}>
            {level.charAt(0).toUpperCase() + level.slice(1)}
        </h1>
        
        {!showScore ? (
          <div className="quiz-container">
            <div className="question-section">
              <div className="question-count">
                <span>Question {currentQuestion + 1}</span> / {quizData.c[level].length}
              </div>
              <div className='question-text'>
                {quizData.c[level][currentQuestion].question.split('\n').map((line, index) => (
                    <div key={index}>{line}</div>
                ))}
                </div>

            </div>
            <div className="answer-section">
              {quizData.c[level][currentQuestion].options.map((option, index) => (
                <button key={index} onClick={() => handleAnswerOptionClick(option.isCorrect)}>
                  {option.text}
                </button>
              ))}
            </div>
          </div>
        ) : (
          <div className="score-section">
            <p>You scored {score} out of {quizData.c[level].length}</p>
            <div style={{ marginTop: '20px', display: 'flex', gap: '15px', justifyContent: 'center' }}>
              <button onClick={handleRetake}>Retake Test</button>
              {level === 'pro' ? (
                <button onClick={() => navigate('/programs')}>Choose Another Quiz</button>
              ) : (
                <button onClick={handleNextLevel}>Next Level</button>
              )}
            </div>
          </div>
        )}
       
      </main>

      <footer className="footer">
        <p>{symbol}{date} by <span style={{ color: 'orange', fontWeight: 'bold' }}>{names}</span> QuizGame. All rights reserved.</p>
      </footer>
    </div>
  );
};
export default CQuiz;



