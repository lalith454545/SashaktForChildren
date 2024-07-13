import './App.css';
import Navbar from './components/Navbar';
import React from 'react';
import { Route } from 'react-router-dom';
import GameButtons from './components/GameButtons';
import { Routes } from 'react-router-dom';
import AboutSashakt from './components/About';
import Game from './components/CardGame';
import WhatsAppButton from './components/ContactUs';
// import CreditPage from './components/Creditpage';
// import AppY from './components/AppY';
import NicknameGenerator from './components/Nickname';
import MysteryBox from './components/MysteryBox';
import LandingPage from './components/Decide';
import SimpleLoginPage from './components/Login';
import Memory from './components/Memory';

import 'firebase/compat/auth';
import 'firebase/compat/firestore';

import WordScramble from './components/Word';
import Carousel from './components/Carousel';
import FaqComponent from './components/FAQs';
import BoyDialogComponentthank from './components/ThankYou';
import ChildRightsComponent from './components/Videos';
import CBot from './components/Chatbot';
import Cross from './components/Crossword';
import AppFooter from './components/Footer';
import Jig from './components/Jigsaw';
import Helpline from './components/Emergency';
import Parenta from './components/Parenta';
import Spin from './components/Wheel';





function App() {
  return (
    <div className="App">
      <Navbar/>
      {/* <BoyDialogComponent/> */}

      
      
      <Routes>
        <Route path='/' element={<MysteryBox/>}/>
        <Route path='/logsign' element={<LandingPage/>}/>
        <Route path='/game' element={<GameButtons/>}/>
        <Route path='/about' element={<AboutSashakt/>}/>
        <Route path='contact' element={<WhatsAppButton/>}/>
        <Route path='/cardgame' element={<Game/>}/>
        <Route path='/memory' element={<Memory/>}/>
        <Route path='/Mysterybox' element={<MysteryBox/>}/>
        <Route path='/login' element={<SimpleLoginPage/>}/>
        <Route path='/register' element={<NicknameGenerator/>}/>
        {/* <Route path='/ParentalLogin' element={<Parenta/>}/> */}
        <Route path='/thank' element={<BoyDialogComponentthank/>}/>
        <Route path='/Unscramble' element={<WordScramble/>}/>
        
        
        <Route path='/rights' element={<Carousel/>}/>
        <Route path='/faqs' element={<FaqComponent/>}/>
        <Route path='/story' element={<ChildRightsComponent/>}/>
       <Route path='/chat' element={<CBot/>}/>
       <Route path='/Cross'element={<Cross/>}/>
        <Route path='/emergency' element={<Helpline/>}/>
        <Route path='/Jigsaw' element={<Jig/>}/>
        <Route path='/Parenta' element={<Parenta/>}/>
        <Route path='/Spin' element={<Spin/>}/>
        
      </Routes>
      <AppFooter/>

      
    </div>
  );
}

export default App;
