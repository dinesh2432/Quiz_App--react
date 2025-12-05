import React from 'react'
import { useState, useEffect } from 'react'
import './Program.css'
import { useNavigate,useLocation } from 'react-router-dom'



import history_mystery_bg from '../../assest/fact_hunt_bg/history_mystery_bg.webp'
import human_fact_bg from '../../assest/fact_hunt_bg/human_fact_bg.webp'
import science_shock_bg from '../../assest/fact_hunt_bg/science_shock.webp'
import space_universe_bg from '../../assest/fact_hunt_bg/space_universe_bg.webp'
import tech_world_bg from '../../assest/fact_hunt_bg/tech_world.webp'
import world_wonders_bg from '../../assest/fact_hunt_bg/world_wonders_bg.webp'


const Fact_Hunt = () => {
  const [date, setDate] = useState('');
  const symbol = '\u00A9';
  const names = 'DINESH K'
  const location=useLocation()
  
  const navigate = useNavigate();

  useEffect(() => {
    const today = new Date();  
    const year = today.getFullYear();
    setDate(year);
  }, []);

  const isProgram = location.pathname == '/fact_hunt'


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
          <img src={history_mystery_bg} alt="history_mystery_image" />
          <div className='inner_box1'>
            <h3>History Mystery</h3>
            <button onClick={() => navigate('/history_mystery_quiz')}>Start Quiz</button>
          </div>
        </div>

        {/* 2 */}
        <div className='pro_inner_box'>
          <img src={human_fact_bg} alt="human_fact_image" />
          <div className='inner_box1'>
            <h3>Human Facts</h3>
            <button onClick={() => navigate('/human_fact_quiz')}>Start Quiz</button>
          </div>
        </div>

        {/* 3 */}
        <div className='pro_inner_box'>
          <img src={science_shock_bg} alt="science_shock_image" />
          <div className='inner_box1'>
            <h3>Science Shock</h3>
            <button onClick={() => navigate('/science_shock_quiz')}>Start Quiz</button>
          </div>
        </div>

        {/* 4 */}
        <div className='pro_inner_box'>
          <img src={tech_world_bg} alt="tech_world_image" />
          <div className='inner_box1'>
            <h3>Tech World</h3>
            <button onClick={() => navigate('/tech_world_quiz')}>Start Quiz</button>
          </div>
        </div>
        
        {/* 5 */}
        <div className='pro_inner_box'>
          <img src={space_universe_bg} alt="space_universe_image" />
          <div className='inner_box1'>
            <h3>Universe Mystery</h3>
            <button onClick={() => navigate('/universe_mystery_quiz')}>Start Quiz</button>
          </div>
        </div>


        {/* 6 */}
        <div className='pro_inner_box'>
          <img src={world_wonders_bg} alt="world_wonders_image" />
          <div className='inner_box1'>
            <h3>World Wonders</h3>
            <button onClick={() => navigate('/world_wonders_quiz')}>Start Quiz</button>
          </div>
        </div>

      </main>
      <footer className='footer'>
        <p>{symbol}{date} by <span style={{ color: 'orange', fontWeight: 'bold' }}>{names}</span> QuizGame. All rights reserved.</p>
      </footer>
    </div>
  )
}

export default Fact_Hunt