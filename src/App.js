// import Home from './components/Home';
// import './App.css';
// import {Route, Routes} from 'react-router-dom'
// import Login from './components/Login';
// import Dashboard from './components/Dashboard';
// import SignUp from './components/SignUp';
// import Programs from './components/subComponents1/Programs';
// import Puzzles from './components/subComponents1/Puzzles';
// import Series from './components/subComponents1/Series';
// import Detective from './components/subComponents1/Detective';
// import Fact_Hunt from './components/subComponents1/Fact_Hunt';
// import Sports from './components/subComponents1/Sports';



// import CQuiz from './components/subComponents2/CQuiz';
// import C__Sharp_Quiz from './components/subComponents2/C__Sharp_Quiz';
// import C_plusplus_Quiz from './components/subComponents2/C_plusplus_Quiz';
// import Rust_Quiz from './components/subComponents2/Rust_Quiz';
// import Java_Quiz from './components/subComponents2/Java_Quiz';
// import Python_Quiz from './components/subComponents2/Python_Quiz';
// import Javascript_Quiz from './components/subComponents2/Javascript_Quiz';
// import Ruby_Quiz from './components/subComponents2/Ruby_Quiz';



// import Word_Puzzle from './components/subComponents3/Word_Puzzle';
// import Math_Puzzle from './components/subComponents3/Math_Puzzle';
// import Logical_Puzzle from './components/subComponents3/Logical_Puzzle';
// import Relational_Puzzle from './components/subComponents3/Relational_Puzzle';




// import Breaking_Bad_Quiz from './components/subComponents4/Breaking_Bad_Quiz';
// import Friends_Quiz from './components/subComponents4/Friends_Quiz';
// import GOT_Quiz from './components/subComponents4/GOT_Quiz';
// import Squid_Game_Quiz from './components/subComponents4/Squid_Game_Quiz';
// import Stranger_things_Quiz from './components/subComponents4/Stranger_things_Quiz';
// import Wednesday_Quiz from './components/subComponents4/Wednesday_Quiz';


// import Crime_scene_quiz from './components/subComponents5/Crime_scene_quiz';
// import Deduction_Quiz from './components/subComponents5/Deduction_Quiz';
// import Pattern_Identification_quiz from './components/subComponents5/Pattern_Identification_quiz';
// import Witness_statement_quiz from './components/subComponents5/Witness_statement_quiz';


// import History_Mystories from './components/subComponents6/History_Mystories';
// import Human_Fact from './components/subComponents6/Human_Fact';
// import Science_Shock from './components/subComponents6/Science_Shock';
// import Tech_World from './components/subComponents6/Tech_World';
// import Universe_Mystery from './components/subComponents6/Universe_Mystery';
// import World_Wonders from './components/subComponents6/World_Wonders';


// import Chess from './components/subComponents7/Chess';
// import Cricket from './components/subComponents7/Cricket';
// import Football from './components/subComponents7/Football';
// import Hockey from './components/subComponents7/Hockey';

// function App() {
//   return (

//     <Routes>
//         <Route path = '/' element={<Home/>} />
//         <Route path='/login' element={<Login/>}/>
//         <Route path='/dashboard' element={<Dashboard/>}/>
//         <Route path='/signup' element={<SignUp/>}></Route>
//         <Route path='/programs' element={<Programs/>}></Route>
//         <Route path='/puzzles' element={<Puzzles/>}></Route>
//         <Route path='/series' element={<Series/>}></Route>
//         <Route path='/detective' element={<Detective/>}></Route>
//         <Route path='/fact_hunt' element={<Fact_Hunt/>}></Route>
//         <Route path='/sports' element={<Sports/>}></Route>

//         <Route path='/c_quiz' element={<CQuiz/>}></Route>
//         <Route path='/c-sharp_quiz' element={<C__Sharp_Quiz/>}></Route>
//         <Route path='/c-plusplus_quiz' element={<C_plusplus_Quiz/>}></Route>
//         <Route path='/rust_quiz' element={<Rust_Quiz/>}></Route>
//         <Route path='/java_quiz' element={<Java_Quiz/>}></Route>
//         <Route path='/python_quiz' element={<Python_Quiz/>}></Route>
//         <Route path='/javascript_quiz' element={<Javascript_Quiz/>}></Route>
//         <Route path='/ruby_quiz' element={<Ruby_Quiz/>}></Route>



//         <Route path='/word_quiz' element={<Word_Puzzle/>}></Route>
//         <Route path='/math_quiz' element={<Math_Puzzle/>}></Route>
//         <Route path='/logical_quiz' element={<Logical_Puzzle/>}></Route>
//         <Route path='/relation_quiz' element={<Relational_Puzzle/>}></Route>


//         <Route path='/breaking_bad_quiz' element={<Breaking_Bad_Quiz/>}></Route>
//         <Route path='/friends_quiz' element={<Friends_Quiz/>}></Route>
//         <Route path='/games_of_thrones_quiz' element={<GOT_Quiz/>}></Route>
//         <Route path='/squid_game_quiz' element={<Squid_Game_Quiz/>}></Route>
//         <Route path='/stranger_thing_quiz' element={<Stranger_things_Quiz/>}></Route>
//         <Route path='/wednesday_quiz' element={<Wednesday_Quiz/>}></Route>
        

//         <Route path='/crime_analysis_quiz' element={<Crime_scene_quiz/>}></Route>
//         <Route path='/deduction_quiz' element={<Deduction_Quiz/>}></Route>
//         <Route path='/pattern_identify_quiz' element={<Pattern_Identification_quiz/>}></Route>
//         <Route path='/witness_statement_quiz' element={<Witness_statement_quiz/>}></Route>


//         <Route path='/history_mystery_quiz' element={<History_Mystories/>}></Route>
//         <Route path='/human_fact_quiz' element={<Human_Fact/>}></Route>
//         <Route path='/science_shock_quiz' element={<Science_Shock/>}></Route>
//         <Route path='/tech_world_quiz' element={<Tech_World/>}></Route>
//         <Route path='/universe_mystery_quiz' element={<Universe_Mystery/>}></Route>
//         <Route path='/world_wonders_quiz' element={<World_Wonders/>}></Route>
        

//         <Route path='/chess_quiz' element={<Chess/>}></Route>
//         <Route path='/cricket_quiz' element={<Cricket/>}></Route>
//         <Route path='/football_quiz' element={<Football/>}></Route>
//         <Route path='/hockey_quiz' element={<Hockey/>}></Route>


//     </Routes>
//   );
// }

// export default App;
import { Route, Routes, Link } from 'react-router-dom';
import './App.css';

import Home from './components/Home';
import Login from './components/Login';
import Dashboard from './components/Dashboard';
import SignUp from './components/SignUp';
import Programs from './components/subComponents1/Programs';
import Puzzles from './components/subComponents1/Puzzles';
import Series from './components/subComponents1/Series';
import Detective from './components/subComponents1/Detective';
import Fact_Hunt from './components/subComponents1/Fact_Hunt';
import Sports from './components/subComponents1/Sports';

import CQuiz from './components/subComponents2/CQuiz';
import C__Sharp_Quiz from './components/subComponents2/C__Sharp_Quiz';
import C_plusplus_Quiz from './components/subComponents2/C_plusplus_Quiz';
import Rust_Quiz from './components/subComponents2/Rust_Quiz';
import Java_Quiz from './components/subComponents2/Java_Quiz';
import Python_Quiz from './components/subComponents2/Python_Quiz';
import Javascript_Quiz from './components/subComponents2/Javascript_Quiz';
import Ruby_Quiz from './components/subComponents2/Ruby_Quiz';

import Word_Puzzle from './components/subComponents3/Word_Puzzle';
import Math_Puzzle from './components/subComponents3/Math_Puzzle';
import Logical_Puzzle from './components/subComponents3/Logical_Puzzle';
import Relational_Puzzle from './components/subComponents3/Relational_Puzzle';

import Breaking_Bad_Quiz from './components/subComponents4/Breaking_Bad_Quiz';
import Friends_Quiz from './components/subComponents4/Friends_Quiz';
import GOT_Quiz from './components/subComponents4/GOT_Quiz';
import Squid_Game_Quiz from './components/subComponents4/Squid_Game_Quiz';
import Stranger_things_Quiz from './components/subComponents4/Stranger_things_Quiz';
import Wednesday_Quiz from './components/subComponents4/Wednesday_Quiz';

import Crime_scene_quiz from './components/subComponents5/Crime_scene_quiz';
import Deduction_Quiz from './components/subComponents5/Deduction_Quiz';
import Pattern_Identification_quiz from './components/subComponents5/Pattern_Identification_quiz';
import Witness_statement_quiz from './components/subComponents5/Witness_statement_quiz';

import History_Mystories from './components/subComponents6/History_Mystories';
import Human_Fact from './components/subComponents6/Human_Fact';
import Science_Shock from './components/subComponents6/Science_Shock';
import Tech_World from './components/subComponents6/Tech_World';
import Universe_Mystery from './components/subComponents6/Universe_Mystery';
import World_Wonders from './components/subComponents6/World_Wonders';

import Chess from './components/subComponents7/Chess';
import Cricket from './components/subComponents7/Cricket';
import Football from './components/subComponents7/Football';
import Hockey from './components/subComponents7/Hockey';

function App() {
  return (
    <div className="App">
      {/* ✅ Navigation bar with all links */}
      <nav className="navbar">
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/login">Login</Link></li>
          <li><Link to="/signup">Sign Up</Link></li>
          <li><Link to="/dashboard">Dashboard</Link></li>

          {/* Section 1 */}
          <li><Link to="/programs">Programs</Link></li>
          <li><Link to="/puzzles">Puzzles</Link></li>
          <li><Link to="/series">Series</Link></li>
          <li><Link to="/detective">Detective</Link></li>
          <li><Link to="/fact_hunt">Fact Hunt</Link></li>
          <li><Link to="/sports">Sports</Link></li>

          {/* Programming Quizzes */}
          <li><Link to="/c_quiz">C Quiz</Link></li>
          <li><Link to="/c-sharp_quiz">C# Quiz</Link></li>
          <li><Link to="/c-plusplus_quiz">C++ Quiz</Link></li>
          <li><Link to="/rust_quiz">Rust Quiz</Link></li>
          <li><Link to="/java_quiz">Java Quiz</Link></li>
          <li><Link to="/python_quiz">Python Quiz</Link></li>
          <li><Link to="/javascript_quiz">JavaScript Quiz</Link></li>
          <li><Link to="/ruby_quiz">Ruby Quiz</Link></li>

          {/* Puzzle Quizzes */}
          <li><Link to="/word_quiz">Word Puzzle</Link></li>
          <li><Link to="/math_quiz">Math Puzzle</Link></li>
          <li><Link to="/logical_quiz">Logical Puzzle</Link></li>
          <li><Link to="/relation_quiz">Relational Puzzle</Link></li>

          {/* Series Quizzes */}
          <li><Link to="/breaking_bad_quiz">Breaking Bad Quiz</Link></li>
          <li><Link to="/friends_quiz">Friends Quiz</Link></li>
          <li><Link to="/games_of_thrones_quiz">GOT Quiz</Link></li>
          <li><Link to="/squid_game_quiz">Squid Game Quiz</Link></li>
          <li><Link to="/stranger_thing_quiz">Stranger Things Quiz</Link></li>
          <li><Link to="/wednesday_quiz">Wednesday Quiz</Link></li>

          {/* Detective Quizzes */}
          <li><Link to="/crime_analysis_quiz">Crime Scene Quiz</Link></li>
          <li><Link to="/deduction_quiz">Deduction Quiz</Link></li>
          <li><Link to="/pattern_identify_quiz">Pattern Quiz</Link></li>
          <li><Link to="/witness_statement_quiz">Witness Statement</Link></li>

          {/* Fact Hunt */}
          <li><Link to="/history_mystery_quiz">History Mysteries</Link></li>
          <li><Link to="/human_fact_quiz">Human Facts</Link></li>
          <li><Link to="/science_shock_quiz">Science Shock</Link></li>
          <li><Link to="/tech_world_quiz">Tech World</Link></li>
          <li><Link to="/universe_mystery_quiz">Universe Mystery</Link></li>
          <li><Link to="/world_wonders_quiz">World Wonders</Link></li>

          {/* Sports */}
          <li><Link to="/chess_quiz">Chess</Link></li>
          <li><Link to="/cricket_quiz">Cricket</Link></li>
          <li><Link to="/football_quiz">Football</Link></li>
          <li><Link to="/hockey_quiz">Hockey</Link></li>
        </ul>
      </nav>

      {/* ✅ All route definitions */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/programs" element={<Programs />} />
        <Route path="/puzzles" element={<Puzzles />} />
        <Route path="/series" element={<Series />} />
        <Route path="/detective" element={<Detective />} />
        <Route path="/fact_hunt" element={<Fact_Hunt />} />
        <Route path="/sports" element={<Sports />} />

        <Route path="/c_quiz" element={<CQuiz />} />
        <Route path="/c-sharp_quiz" element={<C__Sharp_Quiz />} />
        <Route path="/c-plusplus_quiz" element={<C_plusplus_Quiz />} />
        <Route path="/rust_quiz" element={<Rust_Quiz />} />
        <Route path="/java_quiz" element={<Java_Quiz />} />
        <Route path="/python_quiz" element={<Python_Quiz />} />
        <Route path="/javascript_quiz" element={<Javascript_Quiz />} />
        <Route path="/ruby_quiz" element={<Ruby_Quiz />} />

        <Route path="/word_quiz" element={<Word_Puzzle />} />
        <Route path="/math_quiz" element={<Math_Puzzle />} />
        <Route path="/logical_quiz" element={<Logical_Puzzle />} />
        <Route path="/relation_quiz" element={<Relational_Puzzle />} />

        <Route path="/breaking_bad_quiz" element={<Breaking_Bad_Quiz />} />
        <Route path="/friends_quiz" element={<Friends_Quiz />} />
        <Route path="/games_of_thrones_quiz" element={<GOT_Quiz />} />
        <Route path="/squid_game_quiz" element={<Squid_Game_Quiz />} />
        <Route path="/stranger_thing_quiz" element={<Stranger_things_Quiz />} />
        <Route path="/wednesday_quiz" element={<Wednesday_Quiz />} />

        <Route path="/crime_analysis_quiz" element={<Crime_scene_quiz />} />
        <Route path="/deduction_quiz" element={<Deduction_Quiz />} />
        <Route path="/pattern_identify_quiz" element={<Pattern_Identification_quiz />} />
        <Route path="/witness_statement_quiz" element={<Witness_statement_quiz />} />

        <Route path="/history_mystery_quiz" element={<History_Mystories />} />
        <Route path="/human_fact_quiz" element={<Human_Fact />} />
        <Route path="/science_shock_quiz" element={<Science_Shock />} />
        <Route path="/tech_world_quiz" element={<Tech_World />} />
        <Route path="/universe_mystery_quiz" element={<Universe_Mystery />} />
        <Route path="/world_wonders_quiz" element={<World_Wonders />} />

        <Route path="/chess_quiz" element={<Chess />} />
        <Route path="/cricket_quiz" element={<Cricket />} />
        <Route path="/football_quiz" element={<Football />} />
        <Route path="/hockey_quiz" element={<Hockey />} />
      </Routes>
    </div>
  );
}

export default App;
