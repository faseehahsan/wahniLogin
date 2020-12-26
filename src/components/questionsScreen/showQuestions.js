import React, {useState, useContext, useEffect } from 'react';
import './questionScreen.css'
import firebase from '../../firebase'

function ShowQ(props) {
    const { allQs, setAllQs } = props;
    const [correctAnswers, setCorrectAnswers] = useState([
      {
        'id': '123',
        'answer': 'sdasda'       
      }, 
      {
        'id': '456',
        'answer': 'second'
      },
      {
        'id': '789',
        'answer': 'third'
      },
    ]);
    // const [newQs, setnewQs] = useState(AllQs)
    

    function getAnswer(id ,index) {
      firebase
      .firestore()
      .doc(`answers/${id}`)
      .get().then((docData => {
        const answersingle = docData.data().answer;
        setAllQs(prevCorrectAnswer => [...prevCorrectAnswer.slice(0,index), {...prevCorrectAnswer[index], 'answer': answersingle}, ...prevCorrectAnswer.slice(index+1,3)]);


        // const list = [];
        // documentSnapshots.forEach((doc) => {
        //   list.push({ ...doc.data(), id: doc.id });
        // })
        // // setCorrectAnswers(prevCorrectAnswer => [...prevFullnotes, ...list]);
        // setAllQs(prevCorrectAnswer => [...prevCorrectAnswer.slice(0,index), {...prevCorrectAnswer[index], 'answer': list[0].answer}, ...prevCorrectAnswer.slice(index+1,3)]);
      }))
      .catch(err => {
        window.alert('Unable to get Answer')
      });
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

    function AnswersView(props) {
        const {answers} = props
        return (
          <div>
            
            {answers ? (
              answers.map((a, i) => (
                  
                <span>
                  
                    <p>{a}</p>
                </span>
              ))
            ) : (
              <div></div>
            )}
          </div>
        );
}

    function QuestionsView() {
        return (
          <div className='questonsSubMainDiv'>
            {allQs ? (
              allQs.map((q, i) => (
                <div className='insideQuestionsView'>
                  {/* <p>Question:</p> */}
                    <p style={{fontWeight: 'bold'}}>Q : {q.questionText}</p>
                    <AnswersView answers={q.options} />
                    The Answer is {q.answer}
                    <button onClick={() => getAnswer(q.id, i)}>show answer</button>
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
