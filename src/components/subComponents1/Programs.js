import React from 'react'
import { useState, useEffect } from 'react'
import './Program.css'
import { useNavigate } from 'react-router-dom'

import c_bg from '../../assest/program_bg/c_bg.webp'
import cstar_bg from '../../assest/program_bg/cc_bg.webp'
import cplusplus_bg from '../../assest/program_bg/c++_bg.webp'
import java_bg from '../../assest/program_bg/java_bg.webp'
import js1_bg from '../../assest/program_bg/js1_bg.webp'
import python_bg from '../../assest/program_bg/python_bg.webp'
import ruby_bg from '../../assest/program_bg/ruby_bg.webp'
import rust_bg from '../../assest/program_bg/rust_bg.webp'

const Programs = () => {
  const [date, setDate] = useState('');
  const symbol = '\u00A9';
  const names = 'DINESH K'
  
  const navigate = useNavigate();

  useEffect(() => {
    const today = new Date();  
    const year = today.getFullYear();
    setDate(year);
  }, []);

  const isProgram = location.pathname == '/programs'


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
          <img src={c_bg} alt="c_image" />
          <div className='inner_box1'>
            <h3>C program</h3>
            <button onClick={() => navigate('/c_quiz')}>Start Quiz</button>
          </div>
        </div>

        {/* 2 */}
        <div className='pro_inner_box'>
          <img src={cstar_bg} alt="c#_image" />
          <div className='inner_box1'>
            <h3>C# program</h3>
            <button onClick={() => navigate('/c-sharp_quiz')}>Start Quiz</button>
          </div>
        </div>

        {/* 3 */}
        <div className='pro_inner_box'>
          <img src={cplusplus_bg} alt="c++_image" />
          <div className='inner_box1'>
            <h3>C++ program</h3>
            <button onClick={() => navigate('/c-plusplus_quiz')}>Start Quiz</button>
          </div>
        </div>

        {/* 4 */}
        <div className='pro_inner_box'>
          <img src={rust_bg} alt="rust_image" />
          <div className='inner_box1'>
            <h3>Rust program</h3>
            <button onClick={() => navigate('/rust_quiz')}>Start Quiz</button>
          </div>
        </div>
        
        {/* 5 */}
        <div className='pro_inner_box'>
          <img src={java_bg} alt="java_image" />
          <div className='inner_box1'>
            <h3>Java program</h3>
            <button onClick={() => navigate('/java_quiz')}>Start Quiz</button>
          </div>
        </div>


        {/* 6 */}
        <div className='pro_inner_box'>
          <img src={python_bg} alt="python_image" />
          <div className='inner_box1'>
            <h3>Python program</h3>
            <button onClick={() => navigate('/python_quiz')}>Start Quiz</button>
          </div>
        </div>
        
        {/* 7 */}
        <div className='pro_inner_box'>
          <img src={ruby_bg} alt="ruby_image" />
          <div className='inner_box1'>
            <h3>Ruby program</h3>
            <button onClick={() => navigate('/ruby_quiz')}>Start Quiz</button>
          </div>
        </div>

        {/* 8 */}        
        <div className='pro_inner_box'>
          <img src={js1_bg} alt="javascript_image" />
          <div className='inner_box1'>
            <h3>JS program</h3>
            <button onClick={() => navigate('/javascript_quiz')}>Start Quiz</button>
          </div>
        </div>

      </main>
      <footer className='footer'>
        <p>{symbol}{date} by <span style={{ color: 'orange', fontWeight: 'bold' }}>{names}</span> QuizGame. All rights reserved.</p>
      </footer>
    </div>
  )
}

export default Programs