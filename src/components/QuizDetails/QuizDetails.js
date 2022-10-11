import React from 'react';
import './QuizDetails.css'
import { EyeIcon } from '@heroicons/react/24/solid'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const QuizDetails = ({quiz}) => {
    // console.log(quiz)
    const {options, question, correctAnswer, id} = quiz;
    
    // console.log(0)

    const iconClick = (correctAnswer) =>{
        toast(correctAnswer)

    }

    const optionHandler = (e) =>{
        // console.log(e.target.innerText)
        const rightAnswer = e.target.innerText;
        // console.log(correctAnswer)
        if(correctAnswer === rightAnswer){
            toast('Right Answer!!!')
        }else{
            toast('Rong Answer!!!')
        }

    }






    return (
        <div className='lg:px-80 my-5'>
                <div className="card bg-base-100 shadow-xl">
            <figure className="px-10 pt-10 flex justify-between">
                <div className='text-center'>{question}</div>
                <div> <EyeIcon onClick={()=>iconClick(correctAnswer)} className="h-6 w-6 text-blue-500"/></div>
            </figure>
            <div className="card-body text-center">
                <div>
                    {
                        options.map((option, idx) => <p key={idx} onClick={(e)=>optionHandler(e)} className='border-2 hover:bg-slate-300 border-rose-900 py-3 rounded lg:mx-40 mb-3'>{option}</p>)
                    }


                    {/* <p className='border-2 border-rose-900 py-3 rounded mx-40'>{options[0]}</p>
                    <p>{options[1]}</p>
                    <p>{options[2]}</p>
                    <p>{options[3]}</p> */}
                </div>
                
                
            </div>
            </div>
            <ToastContainer></ToastContainer>
        </div>
    );
};

export default QuizDetails;