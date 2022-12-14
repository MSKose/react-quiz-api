import React from 'react';
// import Header from './components/framework/Header';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import {QuizSelect} from './components/QuizSelect';
import RandomQuiz from './components/RandomQuiz';

function App() {
  return (
    <BrowserRouter>
        <Routes>
          <Route path="/" element={<QuizSelect/>} /> 
          <Route path="/r/:topic" element={<RandomQuiz/>} />
        </Routes>
      </BrowserRouter>
  );
}

export default App;
