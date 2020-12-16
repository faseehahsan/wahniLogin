import React, { useContext, useEffect, useCallback, useState } from 'react';


export const QuestionContext = React.createContext({});

const QuestionProvider = QuestionContext.Provider;
const QuestionConsumer = QuestionContext.Consumer;

// function onAuthStateChange(callback) {
// make sure user register or login
// }

  // user is added or logged in and sent to all the components of this site through this context


export function QuestionContextProvider(props) {


    // on useEffect fetch questions from the backend and save it in 'qs'

    const [qs, setqs] = useState([
            {
                questionText: 'What is the capital of France?',
                answerOptions: [
                    { answerText: 'New York', isCorrect: false },
                    { answerText: 'London', isCorrect: false },
                    { answerText: 'Paris', isCorrect: true },
                    { answerText: 'Dublin', isCorrect: false },
                ],
            },
            {
                questionText: 'Who is CEO of Tesla?',
                answerOptions: [
                    { answerText: 'Jeff Bezos', isCorrect: false },
                    { answerText: 'Elon Musk', isCorrect: true },
                    { answerText: 'Bill Gates', isCorrect: false },
                    { answerText: 'Tony Stark', isCorrect: false },
                ],
            },
            {
                questionText: 'The iPhone was created by which company?',
                answerOptions: [
                    { answerText: 'Apple', isCorrect: true },
                    { answerText: 'Intel', isCorrect: false },
                    { answerText: 'Amazon', isCorrect: false },
                    { answerText: 'Microsoft', isCorrect: false },
                ],
            },
            {
                questionText: 'How many Harry Potter books are there?',
                answerOptions: [
                    { answerText: '1', isCorrect: false },
                    { answerText: '4', isCorrect: false },
                    { answerText: '6', isCorrect: false },
                    { answerText: '7', isCorrect: true },
                ],
            },
            {
                questionText: 'How many Harry Potter books are there?',
                answerOptions: [
                    { answerText: '1', isCorrect: false },
                    { answerText: '4', isCorrect: false },
                    { answerText: '6', isCorrect: false },
                    { answerText: '7', isCorrect: true },
                ],
            },
            {
                questionText: 'What is the capital of France?',
                answerOptions: [
                    { answerText: 'New York', isCorrect: false },
                    { answerText: 'London', isCorrect: false },
                    { answerText: 'Paris', isCorrect: true },
                    { answerText: 'Dublin', isCorrect: false },
                ],
            },
            {
                questionText: 'Who is CEO of Tesla?',
                answerOptions: [
                    { answerText: 'Jeff Bezos', isCorrect: false },
                    { answerText: 'Elon Musk', isCorrect: true },
                    { answerText: 'Bill Gates', isCorrect: false },
                    { answerText: 'Tony Stark', isCorrect: false },
                ],
            },
            {
                questionText: 'The iPhone was created by which company?',
                answerOptions: [
                    { answerText: 'Apple', isCorrect: true },
                    { answerText: 'Intel', isCorrect: false },
                    { answerText: 'Amazon', isCorrect: false },
                    { answerText: 'Microsoft', isCorrect: false },
                ],
            },
            {
                questionText: 'How many Harry Potter books are there?',
                answerOptions: [
                    { answerText: '1', isCorrect: false },
                    { answerText: '4', isCorrect: false },
                    { answerText: '6', isCorrect: false },
                    { answerText: '7', isCorrect: true },
                ],
            },
    ])
  
  return (
    <QuestionProvider value={[qs, setqs]}>
    {props.children}      
    </QuestionProvider>
  );
}

