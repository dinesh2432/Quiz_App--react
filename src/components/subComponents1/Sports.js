import React from 'react'
import { useState, useEffect } from 'react'
import './Program.css'
import { useNavigate } from 'react-router-dom'


import chess_bg from '../../assest/sports/chess_bg.webp'
import cricket_bg from '../../assest/sports/cricket_bg.webp'
import football_bg from '../../assest/sports/football_bg.webp'
import hockey_bg from '../../assest/sports/hockey_bg.webp'


const Sports = () => {
  const [date, setDate] = useState('');
  const symbol = '\u00A9';
  const names = 'DINESH K'
  
  const navigate = useNavigate();

  useEffect(() => {
    const today = new Date();  
    const year = today.getFullYear();
    setDate(year);
  }, []);

  const isProgram = location.pathname == '/sports'


  const handleback = (e) =>{
    e.preventDefault();
    navigate('/dashboard')
  }


  return (
    <div className={`programs ${isProgram ? 'program_page' : 'other_page'}`}>
      <header className='header'>
        <h3>QUIZ GAME</h3>
        <button onClick={handleback}>BACK</button>
      </header>
      <main className='pro_outer_box'>
        {/* 1 */}
        <div className='pro_inner_box'>
          <img src={cricket_bg} alt="cricket_image" />
          <div className='inner_box1'>
            <h3>Cricket Quiz</h3>
            <button onClick={() => navigate('/cricket_quiz')}>Start Quiz</button>
          </div>
        </div>

        {/* 2 */}
        <div className='pro_inner_box'>
          <img src={chess_bg} alt="chess_image" />
          <div className='inner_box1'>
            <h3>Chess Quiz</h3>
            <button onClick={() => navigate('/chess_quiz')}>Start Quiz</button>
          </div>
        </div>

        {/* 3 */}
        <div className='pro_inner_box'>
          <img src={football_bg} alt="football_image" />
          <div className='inner_box1'>
            <h3>Football Quiz</h3>
            <button onClick={() => navigate('/football_quiz')}>Start Quiz</button>
          </div>
        </div>

        {/* 4 */}
        <div className='pro_inner_box'>
          <img src={hockey_bg} alt="hockey_image" />
          <div className='inner_box1'>
            <h3>Hockey Quiz</h3>
            <button onClick={() => navigate('/hockey_quiz')}>Start Quiz</button>
          </div>
        </div>

      </main>
      <footer className='footer'>
        <p>{symbol}{date} by <span style={{ color: 'orange', fontWeight: 'bold' }}>{names}</span> QuizGame. All rights reserved.</p>
      </footer>
    </div>
  )
}

export default Sports