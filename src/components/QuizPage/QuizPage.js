import React from 'react';
import { useLoaderData } from 'react-router-dom';
import QuizDetails from '../QuizDetails/QuizDetails';
import './QuizPage.css'

const QuizPage = () => {
    const quizsData = useLoaderData();
    const quizs = quizsData.data.questions;
    const name = quizsData.data.name;
   
    return (
        <div>
            <h2 className='text-center text-2xl font-bold text-red-600 my-8'>Quiz of {name}</h2>
            <div>
                {
                    quizs.map(quiz => <QuizDetails key={quiz.id} quiz={quiz}></QuizDetails>)
                }
            </div>
        </div>
        
    );
};

export default QuizPage;