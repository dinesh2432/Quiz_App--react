import React from 'react'
import {useState, useEffect} from 'react'
import './Dashboard.css'
import { useNavigate,useLocation } from 'react-router-dom';
import { CgLogOut } from "react-icons/cg";
import program_img from '../assest/program_img.webp'
import puzzle_img from '../assest/puzzle_img.webp'
import movie_img from '../assest/movie_img.webp'
import sport_img from '../assest/sport_img.webp'
import gen_know_img from '../assest/gk_img.webp'
import detective_img from '../assest/detective_img.webp'
import { BsEmojiWink } from "react-icons/bs";

const Dashboard = () => {
  const [logout, setLogOut] = useState(false)
  const [date, setDate] = useState('');
  const symbol = '\u00A9';
  const names = 'DINESH K'
  const navigate = useNavigate()
  const location = useLocation()
  
  useEffect(() => {
    const today = new Date();  
    const year = today.getFullYear();
    setDate(year);
  }, []);
  
  // handleLogout Function
  const handleLogout = () =>{
    setLogOut(true)
  }
  const handleLogBack = () =>{
    navigate('/')
  }
  const handleNoLogBack = () =>{
    setLogOut(false)
  }

  const isDashboard = location.pathname == '/dashboard'
  return (
    <div className={`dashboard ${isDashboard ? 'dashboard_page' : 'other_page'}`}>
      <header className='header'>
        <h3>QUIZ GAME</h3>
        <button onClick={handleLogout}><CgLogOut />Logout</button>
      </header>
      
      <main className={`main ${logout ? 'blurred':'dashboard_page'}`}>
        
        <p>SELECT CATEGORY</p>
        <hr />

        <div className='outer_box'>

          {/* 1 */}
          <div className='inner_box'>
            <img src={program_img} alt="program_img" />
            <div className='inner_box1'>
            <h2>Programs</h2>
            <button onClick={() => navigate('/programs')}>Start Quiz</button>
            </div>
          </div>

          {/* 2 */}
          <div className='inner_box'>
            <img src={puzzle_img} alt="puzzle_img" />
            <div className='inner_box1'>
            <h2>Puzzles</h2>
            <button onClick={() => navigate('/puzzles')}>Start Quiz</button>
            </div>
          </div>

          {/* 3 */}
          <div className='inner_box'>
            <img src={movie_img} alt="movies_img" />
            <div className='inner_box1'>
            <h2>Series</h2>
            <button onClick={()=> navigate('/series')}>Start Quiz</button>
            </div>
          </div>

          {/* 4 */}
          <div className='inner_box'>
            <img src={detective_img} alt="detective_img" />
            <div className='inner_box1'>
            <h2>Detective</h2>
            <button onClick={() => navigate('/detective')}>Start Quiz</button>
            </div>
          </div>
          

          {/* 5 */}
          <div className='inner_box'>
            <img src={gen_know_img} alt="fact_hunt_img" />
            <div className='inner_box1'>
            <h2>Fact Hunt</h2>
            <button onClick={()=>navigate('/fact_hunt')}>Start Quiz</button>
            </div>
          </div>


          {/* 6 */}          
          <div className='inner_box'>
            <img src={sport_img} alt="sport_img" />
            <div className='inner_box1'>
            <h2>Sports</h2>
            <button onClick={()=>navigate('/sports')}>Start Quiz</button>
            </div>
          </div>

          
        </div>
      </main>
      

      <footer className='footer'>
        <p >{symbol}{date} by <span style={{ color: 'orange', fontWeight: 'bold' }}>{names}</span> QuizGame. All rights reserved.</p>
      </footer>


      {logout && (
        <div className='outer_logout'> 
          <div className='inner_logout'>
            <h5>Hey buddy <BsEmojiWink /></h5>
            <hr />
            <p>ARE YOU SURE YOU WANT TO LOGOUT??</p>
            <div className='inner_logout1'>
              <button onClick={handleLogBack}>yes</button>
              <button onClick={handleNoLogBack}>no</button>
            </div>
          </div>
        </div>)}
    </div>
  )
}

export default Dashboard