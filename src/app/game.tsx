import React, { useState } from "react";
import styles from "../styles/game.module.css";
import { questions, endings, gameExplanation }from "../const/details";

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
    const [page, setPage] = useState(0);
    const buttonText = ["Game Explanation", "Return to Game"];

    function onAnswer(idx: number){
        if(currentQuestion === questions.length -1){
            switchSite(endings[4]);
            return;
        }
        let num = probabilities(questions[currentQuestion].percentages[idx]);
        if(num || num ===0){
            switchSite(endings[num]);
        }
        else{
            let newCurrentQuestion = currentQuestion + 1;
            setCurrentQuestion(newCurrentQuestion);
        }
    }

    function switchPage(){
      if(page === 0){
        setPage(1);
      }
      else{
        setPage(0);
      }
    }
    const renderPage = () => {
      switch (page) {
        case 0:
          return(
            <div>
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
        case 1:
          return(
            <div>
              <h2 className={styles.promptText}>Game Explanation</h2>
              <div className={styles.textBody}>{gameExplanation}</div>
            </div>
            
          );
        default:
          return <div>error</div>
      }
    };

    return(
      <div>
        <div className={styles.questionContainer}>{renderPage()}</div>
        <button className={styles.explanationButton} onClick={switchPage} style={{marginTop: '80px'}}>{buttonText[page]}</button>
      </div>
    

    );
}   

