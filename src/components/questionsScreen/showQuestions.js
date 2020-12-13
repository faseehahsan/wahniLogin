import React, {useState, useContext, useEffect } from 'react';
import './questionScreen.css'

function ShowQ(props) {
    const { questions } = props;

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
                  
                    <p style={{color: colorConst(a.isCorrect), fontWeight: fontWeightConst(a.isCorrect)}}>{a.answerText}</p>
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
            {questions ? (
              questions.map((q, i) => (
                <div className='insideQuestionsView'>
                  {/* <p>Question:</p> */}
                    <p style={{fontWeight: 'bold'}}>Q : {q.questionText}</p>
                    <AnswersView answers={q.answerOptions} />
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
