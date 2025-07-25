import Home from './components/Home';
import './App.css';
import {Route, Routes} from 'react-router-dom'
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
    <Routes>
        <Route path = '/' element={<Home/>} />
        <Route path='/login' element={<Login/>}/>
        <Route path='/dashboard' element={<Dashboard/>}/>
        <Route path='/signup' element={<SignUp/>}></Route>
        <Route path='/programs' element={<Programs/>}></Route>
        <Route path='/puzzles' element={<Puzzles/>}></Route>
        <Route path='/series' element={<Series/>}></Route>
        <Route path='/detective' element={<Detective/>}></Route>
        <Route path='/fact_hunt' element={<Fact_Hunt/>}></Route>
        <Route path='/sports' element={<Sports/>}></Route>

        <Route path='/c_quiz' element={<CQuiz/>}></Route>
        <Route path='/c-sharp_quiz' element={<C__Sharp_Quiz/>}></Route>
        <Route path='/c-plusplus_quiz' element={<C_plusplus_Quiz/>}></Route>
        <Route path='/rust_quiz' element={<Rust_Quiz/>}></Route>
        <Route path='/java_quiz' element={<Java_Quiz/>}></Route>
        <Route path='/python_quiz' element={<Python_Quiz/>}></Route>
        <Route path='/javascript_quiz' element={<Javascript_Quiz/>}></Route>
        <Route path='/ruby_quiz' element={<Ruby_Quiz/>}></Route>



        <Route path='/word_quiz' element={<Word_Puzzle/>}></Route>
        <Route path='/math_quiz' element={<Math_Puzzle/>}></Route>
        <Route path='/logical_quiz' element={<Logical_Puzzle/>}></Route>
        <Route path='/relation_quiz' element={<Relational_Puzzle/>}></Route>


        <Route path='/breaking_bad_quiz' element={<Breaking_Bad_Quiz/>}></Route>
        <Route path='/friends_quiz' element={<Friends_Quiz/>}></Route>
        <Route path='/games_of_thrones_quiz' element={<GOT_Quiz/>}></Route>
        <Route path='/squid_game_quiz' element={<Squid_Game_Quiz/>}></Route>
        <Route path='/stranger_thing_quiz' element={<Stranger_things_Quiz/>}></Route>
        <Route path='/wednesday_quiz' element={<Wednesday_Quiz/>}></Route>
        

        <Route path='/crime_analysis_quiz' element={<Crime_scene_quiz/>}></Route>
        <Route path='/deduction_quiz' element={<Deduction_Quiz/>}></Route>
        <Route path='/pattern_identify_quiz' element={<Pattern_Identification_quiz/>}></Route>
        <Route path='/witness_statement_quiz' element={<Witness_statement_quiz/>}></Route>


        <Route path='/history_mystery_quiz' element={<History_Mystories/>}></Route>
        <Route path='/human_fact_quiz' element={<Human_Fact/>}></Route>
        <Route path='/science_shock_quiz' element={<Science_Shock/>}></Route>
        <Route path='/tech_world_quiz' element={<Tech_World/>}></Route>
        <Route path='/universe_mystery_quiz' element={<Universe_Mystery/>}></Route>
        <Route path='/world_wonders_quiz' element={<World_Wonders/>}></Route>
        

        <Route path='/chess_quiz' element={<Chess/>}></Route>
        <Route path='/cricket_quiz' element={<Cricket/>}></Route>
        <Route path='/football_quiz' element={<Football/>}></Route>
        <Route path='/hockey_quiz' element={<Hockey/>}></Route>


    </Routes>
  );
}

export default App;
