import React, { useState, useContext, useEffect } from "react";
import { Redirect } from "react-router-dom";

import { UserContext } from "../context/user1Context";
import { QuestionContext } from "../context/questionsContext";

import ShowQ from "./showQuestions";
import { Formik } from "formik";
import * as Yup from "yup";

import "./questionScreen.css";

function AddDel() {
  const user = useContext(UserContext);
  const [qs, setqs] = useContext(QuestionContext);

  function handleFormSubmit(values) {
    const correctAnswer = (val) => {
      if (values.correct === val) {
        return true;
      } else {
        return false;
      }
    };
    const newQ = {
      questionText: `${values.questionInput}`,
      answerOptions: [
        { answerText: `${values.optionA}`, isCorrect: correctAnswer("A") },
        { answerText: `${values.optionB}`, isCorrect: correctAnswer("B") },
        { answerText: `${values.optionC}`, isCorrect: correctAnswer("C") },
        { answerText: `${values.optionD}`, isCorrect: correctAnswer("D") },
      ],
    };

    const newqsArray = [...qs, newQ];

    console.log(newqsArray);
    setqs(newqsArray);
  }

  if (!user) return <Redirect to="/myAccount" />;

  if (user.id !== "zOOj1gwSb7WQA7dwMBgW2EYJOk52") {
    return <h1>You are not AUTHORIZED</h1>;
  } else {
    return (
      <div className='AdminAppContainer'>

        <div className='questionsMainDiv'>
            <ShowQ questions={qs} />
        </div>

        <div className="formDiv">
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
            onSubmit={(values) => handleFormSubmit(values)}
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
                    className={
                      errors.questionInput && touched.questionInput
                        ? "text-input error"
                        : "text-input"
                    }
                  />
                  {errors.questionInput && touched.questionInput && (
                    <div className="input-feedback">{errors.questionInput}</div>
                  )}

                  <label htmlFor="optionA" className='labelHeader'>
                    Option A
                  </label>
                  <input
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

                  {/* <DisplayFormikState {...props} /> */}
                </form>
              );
            }}
          </Formik>
        </div>
      </div>
    );
  }
}

export default AddDel;
