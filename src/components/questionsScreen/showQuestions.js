import React, {useState, useContext, useEffect } from 'react';
import './questionScreen.css'
import firebase from '../../firebase'
import QuestionCardGlobal from '../../globalComponents/questionCardGlobal';
import Loader from '../../globalComponents/loader';

function ShowQ(props) {

    const { allQs, setAllQs } = props;
    const [correctAnswers, setCorrectAnswers] = useState([]);
    // const [newQs, setnewQs] = useState(AllQs)
    const [answerIsLoading, setanswerIsLoading] = useState(false)
    
    function getAnswer(id ,index) {
      setanswerIsLoading(true)
      if(correctAnswers[index]) {
        console.log('not fetching');
        setanswerIsLoading(false)
      } else {
        firebase
      .firestore()
      .doc(`answers/${id}`)
      .get().then((docData => {
        const answersingle = docData.data().answer;
        const list = correctAnswers;
        list[index] = answersingle;
        // list[index] = answersingle;
        setCorrectAnswers(list);
        console.log(list)
        setanswerIsLoading(false)


        // const list = [];
        // documentSnapshots.forEach((doc) => {
        //   list.push({ ...doc.data(), id: doc.id });
        // })
        // // setCorrectAnswers(prevCorrectAnswer => [...prevFullnotes, ...list]);
        // setAllQs(prevCorrectAnswer => [...prevCorrectAnswer.slice(0,index), {...prevCorrectAnswer[index], 'answer': list[0].answer}, ...prevCorrectAnswer.slice(index+1,3)]);
      }))
      .catch(err => {
        window.alert('Unable to get Answer')
        setanswerIsLoading(false)
      });
      }
    }

    function deleteQuestion(id) {
      firebase
      .firestore()
      .doc(`questions/${id}`)
      .delete()
      .then(res => console.log('question deleted'))
      .catch(err => console.log(err));
      firebase
      .firestore()
      .doc(`answers/${id}`)
      .delete()
      .then(res => console.log('answer deleted'))
      .catch(err => console.log(err));
      setCorrectAnswers([])
    }

    
  const colorConst = (iscorrect) => {
      if(iscorrect) {
          return 'green'
      } else {
          return 'black'
      }
  }
  const fontWeightConst = (iscorrect) => {
    if(iscorrect) {
        return 'bold'
    } else {
        return 'normal'
    }
}


const idNameBasedOnAnswer = (option, answer) => {
  if (option === answer) {
      return 'answerButton2'
  } else {
      return 'answerButton1'
  }
}

    function QuestionsView() {
        return (
          <div className='questonsSubMainDiv'>
            {allQs ? (
              allQs.map((q, i) => (
                // <div className='insideQuestionsView'>
                //   {/* <p>Question:</p> */}
                //     <p style={{fontWeight: 'bold'}}>Q : {q.questionText}</p>
                //     <AnswersView answers={q.options} />
                //     The Answer is {q.answer}
                //     <button onClick={() => getAnswer(q.id, i)}>show answer</button>
                // </div>
                // <QuestionCardGlobal clickToSeeAnswer={getAnswer} question={q} answer={q.answer} index={i} />
                <div className='questionDiv1'>
                <div className="flexContainFull fontMontserrat">
        <div>

          <div className="questionHeadText1">Question
          <img onClick={() => deleteQuestion(q.id)} src='https://www.iconsdb.com/icons/preview/white/delete-xxl.png' />
          </div>
        </div>

        <div className="question-and-answer-section1">
          <div className="question-text1">
            {q.questionText}
          </div>

          <div className="answer-section1 wahniColor">
            {q.options.map((option) => (
              <div
                className="buttonOne"
                id={idNameBasedOnAnswer(option, correctAnswers[i])}
              >
                {option}
              </div>
            ))}
            {
              answerIsLoading ? 
              <div
                  className="buttonOne flexCenter"
                  id='loadingButton1'
                >
                  <Loader width='15px' borderWidth='5px'/>
                </div>
              :
              <div>
              {
                correctAnswers[i] ? 
                <div
                  className="buttonOne showAnswerButton"
                  id='answerButton1'
                >
                  Answer is {correctAnswers[i]}
                </div>
                :
                <div
                  className="buttonOne showAnswerButton"
                  id='answerButton1'
                  onClick={() => getAnswer(q.id, i)}
                >
                  Click to See Answer {correctAnswers[i]}
                </div>
              }
              </div>
            }
              
          </div>
          
        </div>

      </div>
            </div>
              ))
            ) : (
              <div></div>
            )}
          </div>
        );
}


    return (
        <div className='questionsView'>
        <QuestionsView />
        <hr />
        </div>
        
    )

}

export default ShowQ;
