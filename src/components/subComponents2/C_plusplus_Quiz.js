import React from 'react'
import { useState, useEffect } from 'react'
import quizData from '../../data/quizData.json';
import { useNavigate,useLocation } from 'react-router-dom'
import './C_Quiz.css'

const C_plusplus_Quiz = () => {
    const [date, setDate] = useState('');
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [score, setScore] = useState(0);
    const [showScore, setShowScore] = useState(false);
    const [level, setLevel] = useState('beginner');
    const [selectedOption, setSelectedOption] = useState(null);
    const [isAnswered, setIsAnswered] = useState(false);
    const symbol = '\u00A9';
    const names = 'DINESH K'
    
    const navigate = useNavigate();
    const location = useLocation()

    useEffect(() => {
        const today = new Date();  
        const year = today.getFullYear();
        setDate(year);
    }, []);

    const handleback = (e) =>{
        e.preventDefault();
        navigate('/programs')
    }    
  const handleAnswerOptionClick = (isCorrect, index) => {
        if (isAnswered) return;

        setSelectedOption(index);
        setIsAnswered(true);

        if (isCorrect) {
            setScore(score + 1);
        }

        setTimeout(() => {
            const nextQuestion = currentQuestion + 1;
            if (nextQuestion < quizData.c_plus_plus[level].length) {
                setCurrentQuestion(nextQuestion);
            } else {
                setShowScore(true);
            }
            setSelectedOption(null);
            setIsAnswered(false);
        }, 1500);
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
    const isc_quiz = location.pathname === '/c_quiz'


    return (
    <div className={`c_quiz ${isc_quiz ? "c_quiz" : ""}`}>
        <header >
            <h3>QUIZ GAME</h3>
            <button onClick={handleback} className='btn9'>BACK</button>
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
                {quizData.c_plus_plus[level][currentQuestion].question.split('\n').map((line, index) => (
                    <div key={index}>{line}</div>
                ))}
                </div>

            </div>
            <div className="answer-section">
                {quizData.c_plus_plus[level][currentQuestion].options.map((option, index) => {
                    let buttonStyle = { transition: 'background-color 0.3s ease' };
                    if (isAnswered) {
                        if (option.isCorrect) {
                            buttonStyle.backgroundColor = '#4CAF50';
                            buttonStyle.color = 'white';
                        } else if (index === selectedOption) {
                            buttonStyle.backgroundColor = '#f44336';
                            buttonStyle.color = 'white';
                        }
                    }

                    return (
                        <button 
                            key={index} 
                            onClick={() => handleAnswerOptionClick(option.isCorrect, index)}
                            style={buttonStyle}
                            disabled={isAnswered}
                        >
                        {option.text}
                        </button>
                    );
                })}
                </div>
          </div>
        ) : (
          <div className="score-section">
            <p>You scored {score} out of {quizData.c_plus_plus[level].length}</p>
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




        <footer className='footer'>
            <p>{symbol}{date} by <span style={{ color: 'orange', fontWeight: 'bold' }}>{names}</span> QuizGame. All rights reserved.</p>
        </footer>

    </div>
  )
}

export default C_plusplus_Quiz
