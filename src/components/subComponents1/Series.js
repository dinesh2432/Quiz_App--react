import React from 'react'
import { useState, useEffect } from 'react'
import './Program.css'
import { useNavigate } from 'react-router-dom'


import breaking_bad_bg from '../../assest/series_bg/breaking_bad_bg.webp'
import got_bg from '../../assest/series_bg/got_bg.webp'
import squid_game_bg from '../../assest/series_bg/squid_game_bg.webp'
import stranger_thing_bg from '../../assest/series_bg/stranger_thing_bg.webp'
import wednesday_bg from '../../assest/series_bg/wednesday_bg.webp'
import friends_bg from '../../assest/series_bg/friends_bg.webp'


const Series = () => {
  const [date, setDate] = useState('');
  const symbol = '\u00A9';
  const names = 'DINESH K'
  
  const navigate = useNavigate();

  useEffect(() => {
    const today = new Date();  
    const year = today.getFullYear();
    setDate(year);
  }, []);

  const isProgram = location.pathname == '/series'


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
          <img src={got_bg} alt="games_of_thrones_image" />
          <div className='inner_box1'>
            <h3>Games of Thrones</h3>
            <button onClick={() => navigate('/games_of_thrones_quiz')}>Start Quiz</button>
          </div>
        </div>

        {/* 2 */}
        <div className='pro_inner_box'>
          <img src={stranger_thing_bg} alt="stranger_thing_image" />
          <div className='inner_box1'>
            <h3>Stranger Things</h3>
            <button onClick={() => navigate('/stranger_thing_quiz')}>Start Quiz</button>
          </div>
        </div>

        {/* 3 */}
        <div className='pro_inner_box'>
          <img src={squid_game_bg} alt="squid_game_image" />
          <div className='inner_box1'>
            <h3>Squid Game</h3>
            <button onClick={() => navigate('/squid_game_quiz')}>Start Quiz</button>
          </div>
        </div>

        {/* 4 */}
        <div className='pro_inner_box'>
          <img src={wednesday_bg} alt="wednesday_image" />
          <div className='inner_box1'>
            <h3>Wednesday</h3>
            <button onClick={() => navigate('/wednesday_quiz')}>Start Quiz</button>
          </div>
        </div>
        
        {/* 5 */}
        <div className='pro_inner_box'>
          <img src={breaking_bad_bg} alt="breaking_bad_image" />
          <div className='inner_box1'>
            <h3>Breaking Bad</h3>
            <button onClick={() => navigate('/breaking_bad_quiz')}>Start Quiz</button>
          </div>
        </div>


        {/* 6 */}
        <div className='pro_inner_box'>
          <img src={friends_bg} alt="friends_image" />
          <div className='inner_box1'>
            <h3>Friends</h3>
            <button onClick={() => navigate('/friends_quiz')}>Start Quiz</button>
          </div>
        </div>

      </main>
      <footer className='footer'>
        <p>{symbol}{date} by <span style={{ color: 'orange', fontWeight: 'bold' }}>{names}</span> QuizGame. All rights reserved.</p>
      </footer>
    </div>
  )
}

export default Series