import React from 'react'
import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import factData from '../../data/factData.json'

const Universe_Mystery = () => {
    const [date, setDate] = useState('');
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [score, setScore] = useState(0);
    const [showScore, setShowScore] = useState(false);
    const [level, setLevel] = useState('beginner');

    const symbol = '\u00A9';
    const names = 'DINESH K'
    
    const navigate = useNavigate();

    useEffect(() => {
        const today = new Date();  
        const year = today.getFullYear();
        setDate(year);
    }, []);

    const handleback = (e) =>{
        e.preventDefault();
        navigate('/fact_hunt')
    } 
    const handleAnswerOptionClick = (isCorrect) => {
        if (isCorrect) {
        setScore(score + 1);
        }

        const nextQuestion = currentQuestion + 1;
        if (nextQuestion < factData.history_mystery[level].length) {
        setCurrentQuestion(nextQuestion);
        } else {
        setShowScore(true);
        }
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
                    <span>Question {currentQuestion + 1}</span> / {factData.universe_mystery[level].length}
                </div>
                <div className='question-text'>
                    {factData.universe_mystery[level][currentQuestion].question.split('\n').map((line, index) => (
                        <div key={index}>{line}</div>
                    ))}
                    </div>

                </div>
                <div className="answer-section">
                {factData.universe_mystery[level][currentQuestion].options.map((option, index) => (
                    <button key={index} onClick={() => handleAnswerOptionClick(option.isCorrect)}>
                    {option.text}
                    </button>
                ))}
                </div>
            </div>
            ) : (
            <div className="score-section">
                <p>You scored {score} out of {factData.universe_mystery[level].length}</p>
                <div style={{ marginTop: '20px', display: 'flex', gap: '15px', justifyContent: 'center' }}>
                <button onClick={handleRetake}>Retake Test</button>
                {level === 'pro' ? (
                    <button onClick={() => navigate('/detective')}>Choose Another Quiz</button>
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

export default Universe_Mystery
