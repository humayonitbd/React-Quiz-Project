import React from 'react';
import './QuizDetails.css'

const QuizDetails = ({quiz}) => {
    // console.log(quiz)
    const {options, question, correctAnswer, id} = quiz;
    console.log(correctAnswer)
    //  const [0] = options;
    // console.log(0)
    return (
        <div className='lg:px-80 my-5'>
                <div className="card bg-base-100 shadow-xl">
            <figure className="px-10 pt-10">
                <div>{question}</div>
            </figure>
            <div className="card-body text-center">
                <div>
                    {
                        options.map(option => <p className='border-2 hover:bg-slate-300 border-rose-900 py-3 rounded lg:mx-40 mb-3'>{option}</p>)
                    }


                    {/* <p className='border-2 border-rose-900 py-3 rounded mx-40'>{options[0]}</p>
                    <p>{options[1]}</p>
                    <p>{options[2]}</p>
                    <p>{options[3]}</p> */}
                </div>
                
                
            </div>
            </div>
        </div>
    );
};

export default QuizDetails;