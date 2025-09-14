import React, { useState } from "react";
import styles from "../styles/game.module.css";
import { questions, endings }from "../const/details";

function probabilities(probs: Array<number>){
    let rand = Math.random()*100;

    for (let i = 0; i < probs.length; i++) {
        if (rand <= probs[i]) {
            return i;
        }
    }
    return null; 
}


export default function Game({switchSite}: any){
    const [currentQuestion, setCurrentQuestion] = useState(0);

    function onAnswer(idx: number){
        if(currentQuestion === questions.length -1){
            switchSite(endings[4]);
            return;
        }
        let num = probabilities(questions[currentQuestion].percentages[idx]);
        if(num){
            switchSite(endings[num]);
        }
        else{
            let newCurrentQuestion = currentQuestion + 1;
            setCurrentQuestion(newCurrentQuestion);
        }
    }

    return(
    <div className={styles.questionContainer}>
      <h2 className={styles.promptText}>{questions[currentQuestion].prompt}</h2>
      <div className={styles.answerList}>
        {questions[currentQuestion].answers.map((ans, idx) => (
          <button
            key={idx}
            className={styles.answer}
            onClick={() => onAnswer(idx)}
          >
            {ans}
          </button>
        ))}
      </div>
    </div>
    );
}   

