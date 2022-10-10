import React from 'react';
import { useLoaderData } from 'react-router-dom';
import QuizDetails from '../QuizDetails/QuizDetails';
import './QuizPage.css'

const QuizPage = () => {
    const quizsData = useLoaderData();
    const quizs = quizsData.data.questions;
    // console.log(quizs)
    return (
        <div>
            {
                quizs.map(quiz => <QuizDetails key={quiz.id} quiz={quiz}></QuizDetails>)
            }
        </div>
    );
};

export default QuizPage;