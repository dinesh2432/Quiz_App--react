import React from 'react'
import {useState, useEffect} from 'react'
import { GoogleAuthProvider, signInWithPopup, onAuthStateChanged, signInWithEmailAndPassword, createUserWithEmailAndPassword } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import { auth } from '../firebase/firebaseConf';  

import './SignUp.css'
import { FaGoogle } from "react-icons/fa";

const SignUp = () => {
  const [date, setDate] = useState('');
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [pass, setPass] = useState('')
  const [confPass, setConfPass] = useState('')
  const symbol = '\u00A9';
  const names = 'DINESH K'
  
  const navigate = useNavigate()
  useEffect(() => {
    const today = new Date();  

    const year = today.getFullYear();
      setDate(year);
  }, []);

  const handleGoogle = async (e) => {
    e.preventDefault()
    const provider = new GoogleAuthProvider();

    provider.setCustomParameters({
      prompt: 'select_account'
    });

    try {
      await signInWithPopup(auth, provider);
      navigate('/dashboard');
    } catch (error) {
      alert('Popup was closed before signing in.');
    }
  };
  const handleSignUp = async (e) => {
    e.preventDefault();

    if (!name || !email || !pass || !confPass) {
      alert("All fields are required.");
      return;
    }

    if (pass !== confPass) {
      alert("Passwords do not match.");
      return;
    }

    try {
      await createUserWithEmailAndPassword(auth, email, pass);
      navigate('/dashboard');
    } catch (error) {
      alert("Sign Up Failed: " + error.message);
    }
  };  
  const handleBack = (e) =>{
    e.preventDefault()
    navigate('../')
  }

  const handleNext = (e) =>{
    e.preventDefault()
    navigate('/login')
  }

  return (
    <div className='login_page'>
      <header className='header'>
        <h1>QUIZ GAME</h1>
        <button onClick={handleBack}>BACK</button>
      </header>   
      <main className='main1'>
        <form>
          <h4>Create Account</h4>
          <div className="input-borde">
            <input type="text" placeholder="Full Name" name='name' value={name} onChange={(e)=>setName(e.target.value)}/>
          </div>
          <div className="input-borde">
            <input type="text" placeholder="Email" name='email' value={email} onChange={(e)=>setEmail(e.target.value)}/>
          </div>
          <div className="input-borde">
            <input type="password" placeholder="Password" name='password' value={pass} onChange={(e)=>setPass(e.target.value)}/>
          </div>
          <div className="input-borde">
            <input type="password" placeholder="Conform Password" name='email' value={confPass} onChange={(e)=>setConfPass(e.target.value)}/>
          </div>
          <button type='button' className='btn1' onClick={handleSignUp}>Sign Up</button>
          
          <hr />

          <button onClick={handleGoogle} className='btn2'><FaGoogle className='google_logo' />Sign in with Google</button>
          <p className='sign_u'>Already have an account? <span className='span' style={{textDecoration:'underline', color:'blue'}} onClick={handleNext}> Login</span></p>
        </form>
      </main>
     
      <footer className='footer'>
        <p >{symbol}{date} by <span style={{ color: 'orange', fontWeight: 'bold' }}>{names}</span> QuizGame. All rights reserved.</p>
      </footer>
    </div>
    
  )
}

export default SignUp