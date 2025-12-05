import React from 'react'
import { useState, useEffect } from 'react'
import './Program.css'
import { useNavigate,useLocation } from 'react-router-dom'


import crime_analysis_bg from '../../assest/detective_bg/crime_scene_analysis_bg.webp'
import deduction_puzzle_bg from '../../assest/detective_bg/deduction_puzzle_bg.webp'
import pattern_identiy_bg from '../../assest/detective_bg/pattern_identification_bg.webp'
import witness_statement_bg from '../../assest/detective_bg/witness_statement_bg.webp'

const Detective = () => {
  const [date, setDate] = useState('');
  const symbol = '\u00A9';
  const names = 'DINESH K'
  const navigate = useNavigate();
  const location =useLocation()
  useEffect(() => {
    const today = new Date();  
    const year = today.getFullYear();
    setDate(year);
  }, []);


  const isProgram = location.pathname == '/detective'


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
          <img src={crime_analysis_bg} alt="crime_analysis_image" />
          <div className='inner_box1'>
            <h3>Crime Analysis</h3>
            <button onClick={() => navigate('/crime_analysis_quiz')}>Start Quiz</button>
          </div>
        </div>

        {/* 2 */}
        <div className='pro_inner_box'>
          <img src={deduction_puzzle_bg} alt="deduction_puzzle_image" />
          <div className='inner_box1'>
            <h3>Deduction Puzzle</h3>
            <button onClick={() => navigate('/deduction_quiz')}>Start Quiz</button>
          </div>
        </div>

        {/* 3 */}
        <div className='pro_inner_box'>
          <img src={pattern_identiy_bg} alt="pattern_identify_image" />
          <div className='inner_box1'>
            <h3>Pattern Solving</h3>
            <button onClick={() => navigate('/pattern_identify_quiz')}>Start Quiz</button>
          </div>
        </div>

        {/* 4 */}
        <div className='pro_inner_box'>
          <img src={witness_statement_bg} alt="witness_statement_image" />
          <div className='inner_box1'>
            <h3>Witness Statement</h3>
            <button onClick={() => navigate('/witness_statement_quiz')}>Start Quiz</button>
          </div>
        </div>

      </main>
      <footer className='footer'>
        <p>{symbol}{date} by <span style={{ color: 'orange', fontWeight: 'bold' }}>{names}</span> QuizGame. All rights reserved.</p>
      </footer>
    </div>
  )
}

export default Detective