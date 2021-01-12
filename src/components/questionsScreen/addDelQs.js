import React, { useState, useContext, useEffect } from "react";
import { Redirect } from "react-router-dom";

import { UserContext } from "../context/user1Context";
import { QuestionContext } from "../context/questionsContext";
import { AdminQuestionContext } from "../context/adminQcontext";

import ShowQ from "./showQuestions";
import { Formik } from "formik";
import * as Yup from "yup";
import firebase from '../../firebase'

import "./questionScreen.css";

function AddDel() {
// user details and scores
  const userContextObject = useContext(UserContext);
  const user = userContextObject.user;

  const [allQs, setAllQs] = useContext(AdminQuestionContext);


  function handleFormSubmit1(values) {
    const correctAnswer = (correctoption) => {
      if (correctoption === 'A') {
        return values.optionA
      }
      if (correctoption === 'B') {
        return values.optionB
      }
      if (correctoption === 'C') {
        return values.optionC
      }
      if (correctoption === 'D') {
        return values.optionD
      }
    };
    
    if (allQs.length > 0) {
      const newQ = {
        questionText: `${values.questionInput}`,
        options: [
          `${values.optionA}`,
          `${values.optionB}`,
          `${values.optionC}`,
          `${values.optionD}`
        ],
        index: allQs[0].index + 1
      };
  
      addNewQ(newQ, correctAnswer(values.correct))
    } else {
      const newQ = {
        questionText: `${values.questionInput}`,
        options: [
          `${values.optionA}`,
          `${values.optionB}`,
          `${values.optionC}`,
          `${values.optionD}`
        ],
        index: 1
      };
  
      addNewQ(newQ, correctAnswer(values.correct))
    }
}

function addNewQ(newQobject, answer) {
  firebase
    .firestore()
    .collection('questions')
    .add({
      ...newQobject,
      createdAt: new Date()
    })
    .then(res => {
      firebase
      .firestore()
      .doc(`answers/${res.id}`)
      .set({
        'answer': answer,
        'questionId': res.id,
        'createdAt': new Date()
      })
      .then(res1 => {
        alert('Question added successfully')
        
      })
      .catch(err => {
        window.alert('Unable to add answer')

      })
    })
    .catch(err => {
      window.alert('Unable to add question')
    });
}

    

  if (!user) return <Redirect to="/" />;
  if (user && user.id !== 'GmGq1t1xkobQLpfQEjv7QQogH022') return <Redirect to="/" />

  if (user.id !== "GmGq1t1xkobQLpfQEjv7QQogH022") {
    return <h1>You are not AUTHORIZED</h1>;
  } else {
    return (
      <div className='AdminAppContainer'>
        <div className='flexCenter'>
        <div className="formDiv wahniBgColor">
        <p className='formHeader'>ADD QUESTIONS</p>
          <Formik
            initialValues={{
              questionInput: "",
              optionA: "",
              optionB: "",
              optionC: "",
              optionD: "",
              correct: "",
            }}
            onSubmit={(values, {resetForm}) => {
              handleFormSubmit1(values)
              resetForm({values: ''})
            }}
            validationSchema={Yup.object().shape({
              questionInput: Yup.string().required("*this is a required field"),
              optionA: Yup.string().required("*this is a required field"),
              optionB: Yup.string().required("*this is a required field"),
              optionC: Yup.string().required("*this is a required field"),
              optionD: Yup.string().required("*this is a required field"),
              correct: Yup.string().required("*choose one option").min(1),
            })}
          >
            {(props) => {
              const {
                values,
                touched,
                errors,
                dirty,
                isSubmitting,
                handleChange,
                handleBlur,
                handleSubmit,
                handleReset,
              } = props;
              return (
                <form onSubmit={handleSubmit}>
                  <input
                    id="questionInput"
                    placeholder="Enter the Question"
                    type="text"
                    value={values.questionInput}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    // className={
                    //   errors.questionInput && touched.questionInput
                    //     ? "text-input error"
                    //     : "text-input"
                    // }
                    className='numberInput fontMontserrat'

                  />
                  {errors.questionInput && touched.questionInput && (
                    <div className="input-feedback">{errors.questionInput}</div>
                  )}

                  <label htmlFor="optionA" className='labelHeader'>
                    Option A
                  </label>
                  <input
                                      className='numberInput fontMontserrat'

                    id="optionA"
                    placeholder="Enter option"
                    type="text"
                    value={values.optionA}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    // className={
                    //   errors.email && touched.email
                    //     ? "text-input error"
                    //     : "text-input"
                    // }
                  />
                  {errors.optionA && touched.optionA && (
                    <div className="input-feedback">{errors.optionA}</div>
                  )}
                  <label htmlFor="optionB" className='labelHeader'>
                    Option B
                  </label>
                  <input
                    className='numberInput fontMontserrat'
                    id="optionB"
                    placeholder="Enter Option"
                    type="text"
                    value={values.optionB}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    // className={
                    //   errors.email && touched.email
                    //     ? "text-input error"
                    //     : "text-input"
                    // }
                  />
                  {errors.optionB && touched.optionB && (
                    <div className="input-feedback">{errors.optionB}</div>
                  )}
                  <label htmlFor="optionC" className='labelHeader'>
                    Option C
                  </label>
                  <input
                                      className='numberInput fontMontserrat'

                    id="optionC"
                    placeholder="Enter option"
                    type="text"
                    value={values.optionC}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    // className={
                    //   errors.email && touched.email
                    //     ? "text-input error"
                    //     : "text-input"
                    // }
                  />
                  {errors.optionC && touched.optionC && (
                    <div className="input-feedback">{errors.optionC}</div>
                  )}
                  <label htmlFor="optionD" className='labelHeader'>
                    Option D
                  </label>
                  <input
                                      className='numberInput fontMontserrat'

                    id="optionD"
                    placeholder="Enter Option"
                    type="text"
                    value={values.optionD}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    // className={
                    //   errors.email && touched.email
                    //     ? "text-input error"
                    //     : "text-input"
                    // }
                  />
                  {errors.optionD && touched.optionD && (
                    <div className="input-feedback">{errors.optionD}</div>
                  )}

                  <div className='flexCenter sellectOptionNbutton'>
                  <select
                    name="correct"
                    value={values.correct}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    style={{ display: "block" }}
                    className='selector'
                  >
                    <option value="" label="Choose the Right option" />
                    <option value="A" label="A" />
                    <option value="B" label="B" />
                    <option value="C" label="C" />
                    <option value="D" label="D" />
                  </select>
                  {errors.correct && touched.correct && (
                    <div className="input-feedback">{errors.correct}</div>
                  )}

                  <button type="submit" className='submitButton1'>Submit</button>

                  </div>
                  {/* <DisplayFormikState {...props} /> */}
                </form>
              );
            }}
          </Formik>
        </div>
        </div>
        <div className='questionsMainDiv'>
            <ShowQ allQs={allQs} setAllQs={setAllQs} />
        </div>
      </div>
    );
  }
}

export default AddDel;
