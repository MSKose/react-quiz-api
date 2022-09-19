import React from 'react'
import Header from './framework/Header'
// import collectData from '../components/api/ConnectApi'
import CollectData from '../components/api/ConnectApi'

export const QuizSelect = () => {
    const API_URL = 'http://127.0.0.1:8000/quiz/';
    const [dataState] = CollectData(API_URL);
    
    console.log(dataState);

  return (
    <>
        <Header/>
    </>
  )
}
