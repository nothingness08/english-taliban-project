import React, { useState } from "react";
import styles from "../styles/game.module.css";
import { questions, endings }from "../const/details";

export default function Game(){
    const [currentQuestion, setCurrentQuestion] = useState(0);

    function onAnswer(){
        if(currentQuestion === questions.length -1){
            return;
        }
        let newCurrentQuestion = currentQuestion + 1;
        setCurrentQuestion(newCurrentQuestion);
    }
    return(
    <div className={styles.questionContainer}>
      <h2 className={styles.promptText}>{questions[currentQuestion].prompt}</h2>
      <div className={styles.answerList}>
        {questions[currentQuestion].answers.map((ans, idx) => (
          <button
            key={idx}
            className={styles.answer}
            onClick={() => onAnswer()}
          >
            {ans}
          </button>
        ))}
      </div>
    </div>
    );
}   

