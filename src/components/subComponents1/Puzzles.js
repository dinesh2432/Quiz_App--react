import React from 'react'
import { useState, useEffect } from 'react'
import './Program.css'
import { useNavigate,useLocation } from 'react-router-dom'

import word_bg from '../../assest/puzzle_bg/word_bg.webp'
import math_bg from '../../assest/puzzle_bg/math_bg.webp'
import logical_bg from '../../assest/puzzle_bg/logical_bg.webp'
import relation_bg1 from '../../assest/puzzle_bg/relation_bg1.webp'

const Puzzles = () => {
  const [date, setDate] = useState('');
  const symbol = '\u00A9';
  const names = 'DINESH K'
  const location = useLocation()
  
  const navigate = useNavigate();

  useEffect(() => {
    const today = new Date();  
    const year = today.getFullYear();
    setDate(year);
  }, []);

  const isProgram = location.pathname == '/puzzles'


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
          <img src={word_bg} alt="word_puzzle_image" />
          <div className='inner_box1'>
            <h3>Word Puzzle</h3>
            <button onClick={() => navigate('/word_quiz')}>Start Quiz</button>
          </div>
        </div>

        {/* 2 */}
        <div className='pro_inner_box'>
          <img src={math_bg} alt="math_puzzle_image" />
          <div className='inner_box1'>
            <h3>Math Puzzle</h3>
            <button onClick={() => navigate('/math_quiz')}>Start Quiz</button>
          </div>
        </div>

        {/* 3 */}
        <div className='pro_inner_box'>
          <img src={logical_bg} alt="logical_puzzle_image" />
          <div className='inner_box1'>
            <h3>Logical Puzzle</h3>
            <button onClick={() => navigate('/logical_quiz')}>Start Quiz</button>
          </div>
        </div>

        {/* 4 */}
        <div className='pro_inner_box'>
          <img src={relation_bg1} alt="relation_puzzle_image" />
          <div className='inner_box1'>
            <h3>Relation Puzzle</h3>
            <button onClick={() => navigate('/relation_quiz')}>Start Quiz</button>
          </div>
        </div>

      </main>
      <footer className='footer'>
        <p>{symbol}{date} by <span style={{ color: 'orange', fontWeight: 'bold' }}>{names}</span> QuizGame. All rights reserved.</p>
      </footer>
    </div>
  )
}

export default Puzzles