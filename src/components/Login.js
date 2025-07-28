// // import React, { useEffect } from 'react';
// // import { GoogleAuthProvider, signInWithPopup, onAuthStateChanged, signInWithEmailAndPassword,fetchSignInMethodsForEmail, createUserWithEmailAndPassword } from 'firebase/auth';
// // import { auth } from '../firebase/firebaseConf';
// // import { useNavigate } from 'react-router-dom';
// // import { useState } from 'react';
// // import { FaGoogle } from "react-icons/fa";
// // import { useLocation } from 'react-router-dom';
// // import './Login.css'

// // const Login = () => {
// //   const [email, setEmail] = useState('')
// //   const [password, setPassword] = useState('')
// //   const [date, setDate] = useState('');
// //   const symbol = '\u00A9';
// //   const names = 'DINESH K'
  
  
// //   useEffect(() => {
// //     const today = new Date();  
// //     const year = today.getFullYear();
// //     setDate(year);
// //   }, []);

// //   const handleBack = (e) =>{
// //     e.preventDefault()
// //     navigate('../')
// //   }

// //   const handleNext =(e) =>{
// //     e.preventDefault()
// //     navigate('/signup')
// //   }
// //   const location = useLocation();
// //   const isLogin = location.pathname == '/login'
// //   const navigate = useNavigate();
// //   const handleLogin = async (e) => {
// //     e.preventDefault();
// //     try {
      
// //       await signInWithEmailAndPassword(auth, email, password);
// //       navigate('/dashboard');
// //     } catch (err) {
// //       if (err.code === 'auth/invalid-credential') 
// //         try {
// //           const methods = await fetchSignInMethodsForEmail(auth, email);
// //           if (methods.includes('google.com')) {
// //             alert("This email is registered with Google. Please sign in with Google instead.");
// //             return;
// //           }
// //           if (methods.length === 0) {
// //             alert("No account found with this email. Please sign up first.");
// //             return;
// //           }
// //           alert("Incorrect password.");
// //         } catch (fetchError) {
// //           console.error("Error checking sign-in methods:", fetchError);
// //           alert("Authentication error. Please try again.");
// //         }
// //     }
// //   };

// //   const handleGoogle = async (e) => {
// //     e.preventDefault();
// //     const provider = new GoogleAuthProvider();
// //     provider.setCustomParameters({ prompt: 'select_account' });

// //     try {
// //       const result = await signInWithPopup(auth, provider);
// //       navigate('/dashboard');
// //     } catch (error) {
// //       console.error("Google Sign-In Error:", error);
      
// //       if (error.code === 'auth/account-exists-with-different-credential') {
// //         alert("This email is already registered with email/password. Please sign in that way instead.");
// //       } else {
// //         alert('Google sign-in failed. Please try again.');
// //       }
// //     }
// //   };
    
  


// //   return (
// //     <div className={`login ${isLogin ? 'login_page' : 'other_page'}`}>
// //       <header className='header'>
// //         <h1>QUIZ GAME</h1>
// //         <button onClick={handleBack}>BACK</button>
// //       </header>   

// //       <main className='main'>
// //         <form className='form'>
// //           <h3>WELCOME BUDDY</h3>

// //           <div className="input-border">
// //             <input type="text" placeholder="enter email id" name='email' required  value={email} onChange={(e)=>setEmail(e.target.value)}/>
// //           </div>

// //           <div className="input-border">
// //             <input type="password" placeholder="enter your password" name='password' required value={password} onChange={(e) => setPassword(e.target.value)} />
// //           </div>

// //           <button type='button' onClick={handleLogin} className='btn1'>LOG IN</button>
// //           <hr />
// //           <button onClick={handleGoogle} className='btn2'><FaGoogle className='google_logo' />Sign in with Google</button>
// //           <p className='sign_up'>Don't have an account? <span className='span' style={{textDecoration:'underline', color:'blue'}} onClick={handleNext}> Sign Up</span></p>

// //         </form>
// //       </main>


// //       <footer className='footer'>
// //         <p >{symbol}{date} by <span style={{ color: 'orange', fontWeight: 'bold' }}>{names}</span> QuizGame. All rights reserved.</p>
// //       </footer>
// //     </div>
// //   );
// // };

// // export default Login;


// import React, { useEffect, useState } from 'react';
// import {
//   GoogleAuthProvider,
//   signInWithRedirect,
//   getRedirectResult,
//   signInWithEmailAndPassword,
//   fetchSignInMethodsForEmail,
// } from 'firebase/auth';
// import { auth } from '../firebase/firebaseConf';
// import { useNavigate, useLocation } from 'react-router-dom';
// import { FaGoogle } from "react-icons/fa";
// import './Login.css';

// const Login = () => {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [date, setDate] = useState('');
//   const symbol = '\u00A9';
//   const names = 'DINESH K';

//   const navigate = useNavigate();
//   const location = useLocation();
//   const isLogin = location.pathname === '/login';

//   useEffect(() => {
//     const today = new Date();
//     const year = today.getFullYear();
//     setDate(year);

//     // ✅ Handle Google redirect sign-in result
//     getRedirectResult(auth)
//       .then((result) => {
//         if (result) {
//           navigate('/dashboard');
//         }
//       })
//       .catch((error) => {
//         console.error("Redirect result error:", error);
//         alert("Google sign-in failed. Please try again.");
//       });
//   }, []);

//   const handleBack = (e) => {
//     e.preventDefault();
//     navigate('../');
//   };

//   const handleNext = (e) => {
//     e.preventDefault();
//     navigate('/signup');
//   };

//   const handleLogin = async (e) => {
//     e.preventDefault();
//     try {
//       await signInWithEmailAndPassword(auth, email, password);
//       navigate('/dashboard');
//     } catch (err) {
//       if (err.code === 'auth/invalid-credential') {
//         try {
//           const methods = await fetchSignInMethodsForEmail(auth, email);
//           if (methods.includes('google.com')) {
//             alert("This email is registered with Google. Please sign in with Google instead.");
//             return;
//           }
//           if (methods.length === 0) {
//             alert("No account found with this email. Please sign up first.");
//             return;
//           }
//           alert("Incorrect password.");
//         } catch (fetchError) {
//           console.error("Error checking sign-in methods:", fetchError);
//           alert("Authentication error. Please try again.");
//         }
//       } else {
//         console.error("Login error:", err);
//         alert("Login failed. Please try again.");
//       }
//     }
//   };

//   const handleGoogle = async (e) => {
//     e.preventDefault();
//     const provider = new GoogleAuthProvider();
//     provider.setCustomParameters({ prompt: 'select_account' });

//     try {
//       await signInWithRedirect(auth, provider); // ✅ mobile-friendly
//     } catch (error) {
//       console.error("Google Redirect Sign-In Error:", error);
//       alert('Google sign-in failed. Please try again.');
//     }
//   };

//   return (
//     <div className={`login ${isLogin ? 'login_page' : 'other_page'}`}>
//       <header className='header'>
//         <h1>QUIZ GAME</h1>
//         <button onClick={handleBack}>BACK</button>
//       </header>

//       <main className='main'>
//         <form className='form'>
//           <h3>WELCOME BUDDY</h3>

//           <div className="input-border">
//             <input
//               type="text"
//               placeholder="Enter email id"
//               name='email'
//               required
//               value={email}
//               onChange={(e) => setEmail(e.target.value)}
//             />
//           </div>

//           <div className="input-border">
//             <input
//               type="password"
//               placeholder="Enter your password"
//               name='password'
//               required
//               value={password}
//               onChange={(e) => setPassword(e.target.value)}
//             />
//           </div>

//           <button type='button' onClick={handleLogin} className='btn1'>LOG IN</button>
//           <hr />
//           <button onClick={handleGoogle} className='btn2'>
//             <FaGoogle className='google_logo' /> Sign in with Google
//           </button>

//           <p className='sign_up'>
//             Don't have an account? <span className='span' style={{ textDecoration: 'underline', color: 'blue' }} onClick={handleNext}>Sign Up</span>
//           </p>
//         </form>
//       </main>

//       <footer className='footer'>
//         <p>{symbol}{date} by <span style={{ color: 'orange', fontWeight: 'bold' }}>{names}</span> QuizGame. All rights reserved.</p>
//       </footer>
//     </div>
//   );
// };

// export default Login;


import React, { useEffect, useState } from 'react';
import {
  GoogleAuthProvider,
  signInWithRedirect,
  getRedirectResult,
  signInWithEmailAndPassword,
  fetchSignInMethodsForEmail,
} from 'firebase/auth';
import { auth } from '../firebase/firebaseConf';
import { useNavigate, useLocation } from 'react-router-dom';
import { FaGoogle } from "react-icons/fa";
import './Login.css';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [date, setDate] = useState('');
  const symbol = '\u00A9';
  const names = 'DINESH K';

  const navigate = useNavigate();
  const location = useLocation();
  const isLogin = location.pathname === '/login';

useEffect(() => {
  const checkRedirectResult = async () => {
    try {
      const result = await getRedirectResult(auth);
      if (result && result.user) {
        console.log("✅ Google Sign-In Success:", result.user.email);
        navigate('/dashboard');
      } else {
        console.log("⏳ No redirect result found yet.");
      }
    } catch (error) {
      console.error("❌ Google Redirect Sign-In Error:", error.message);
      alert("Google sign-in failed: " + error.message);
    }
  };

  checkRedirectResult();
}, [navigate]);
useEffect(() => {
  const unsubscribe = auth.onAuthStateChanged((user) => {
    const currentPath = location.pathname;
    if (user && currentPath === '/login') {
      navigate('/dashboard');
    }
  });
  return () => unsubscribe();
}, [location, navigate]);

  const handleBack = (e) => {
    e.preventDefault();
    navigate('../');
  };

  const handleNext = (e) => {
    e.preventDefault();
    navigate('/signup');
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      await signInWithEmailAndPassword(auth, email, password);
      navigate('/dashboard');
    } catch (err) {
      if (err.code === 'auth/invalid-credential') {
        try {
          const methods = await fetchSignInMethodsForEmail(auth, email);
          if (methods.includes('google.com')) {
            alert("This email is registered with Google. Please sign in with Google instead.");
            return;
          }
          if (methods.length === 0) {
            alert("No account found with this email. Please sign up first.");
            return;
          }
          alert("Incorrect password.");
        } catch (fetchError) {
          console.error("Error checking sign-in methods:", fetchError);
          alert("Authentication error. Please try again.");
        }
      } else {
        console.error("Login error:", err);
        alert("Login failed. Please try again.");
      }
    }
  };

  const handleGoogle = async (e) => {
    e.preventDefault();
    const provider = new GoogleAuthProvider();
    provider.setCustomParameters({ prompt: 'select_account' });

    try {
      await signInWithRedirect(auth, provider);
    } catch (error) {
      console.error("Google Redirect Sign-In Error:", error);
      alert('Google sign-in failed. Please try again.');
    }
  };

  return (
    <div className={`login ${isLogin ? 'login_page' : 'other_page'}`}>
      <header className='header'>
        <h1>QUIZ GAME</h1>
        <button onClick={handleBack}>BACK</button>
      </header>

      <main className='main'>
        <form className='form'>
          <h3>WELCOME BUDDY</h3>

          <div className="input-border">
            <input
              type="text"
              placeholder="Enter email id"
              name='email'
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div className="input-border">
            <input
              type="password"
              placeholder="Enter your password"
              name='password'
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <button type='button' onClick={handleLogin} className='btn1'>LOG IN</button>
          <hr />
          <button onClick={handleGoogle} className='btn2'>
            <FaGoogle className='google_logo' /> Sign in with Google
          </button>

          <p className='sign_up'>
            Don't have an account? <span className='span' style={{ textDecoration: 'underline', color: 'blue' }} onClick={handleNext}>Sign Up</span>
          </p>
        </form>
      </main>

      <footer className='footer'>
        <p>{symbol}{date} by <span style={{ color: 'orange', fontWeight: 'bold' }}>{names}</span> QuizGame. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Login;
