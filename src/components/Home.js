import React, { useState, useEffect } from 'react';
import './Home.css';
import { useNavigate } from 'react-router-dom';
import { Routes, Route } from 'react-router-dom';


const Home = () => {
  const [date, setDate] = useState('');
  const symbol = '\u00A9';
  const names = 'DINESH K'


  useEffect(() => {
    const today = new Date();  
    const year = today.getFullYear();
    setDate(year);
  }, []);

  const isHome = location.pathname == '/'

  const navigate = useNavigate()
  const handleLogin = (e) =>{
    e.preventDefault()
    
    navigate('/login')
    
  }


  return (
    <div className={`home ${isHome ? 'home_page' : 'other_page'}`}>
      <header className='header'>
        <h1>QUIZ GAME</h1>
        <button onClick={handleLogin}>LOGIN</button>
      </header>   
      

      <main className='main'>
        <h3>Welcome to <span className="typing">Quiz Game</span></h3>
        <p>Test your knowledge across fun and challenging quiz!!</p>
        <button onClick={handleLogin}>GET STARTED</button>
      </main>

      <footer className='footer'>
        <p>{symbol}{date} by <span style={{ color: 'orange', fontWeight: 'bold' }}>{names}</span> QuizGame. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Home;
