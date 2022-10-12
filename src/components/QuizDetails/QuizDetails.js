import React from 'react';
import './QuizDetails.css'
import { EyeIcon } from '@heroicons/react/24/solid'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const QuizDetails = ({quiz}) => {
    const {options, question, correctAnswer} = quiz;

    const iconClick = (correctAnswer) =>{
        toast(correctAnswer,{
            position:"top-center"
        })

    }

    

    const optionHandler = (option) =>{
        if(correctAnswer === option){ 
            toast.success('Right Answer!!!',{
                position:"top-center"
            })
        }else{
            toast.warn('Rong Answer!!!',{
                position:"top-center"
            })
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
                        options.map((option, idx) => <p key={idx} onClick={()=>optionHandler(option)} className='border-2 hover:bg-slate-300 border-rose-900 py-3 rounded lg:mx-20 mb-3'>{option}</p>)
                    }

                </div>
                
            </div>
            </div>
            <ToastContainer></ToastContainer>
        </div>
    );
};

export default QuizDetails;