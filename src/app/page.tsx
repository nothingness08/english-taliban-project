"use client"
import React, { useState, useEffect } from "react";
import styles from "../styles/page.module.css";
import Game from "../app/game";

export default function Home() {

  const [page, setPage] = useState(0);
  const [site, setSite] = useState(true);
  const [message, setMessage] = useState("");
  const [restartButton, setRestartButton] = useState(false);

  function handlePageClick(page: number){
    setPage(page);
  }

  function restartClick(){
    switchSite();
    setRestartButton(false);
  }

  function switchSite(text: string = ""){
    setSite(!site);
    if(text !== ""){
      setRestartButton(false);
    }
    setMessage(text);
  }

   useEffect(() => {
    if (message !== "") {
      const timer = setTimeout(() => {
        setRestartButton(true);
      }, 4000);
      return () => clearTimeout(timer);
    }
  }, [message]); 

  const renderContent = () => {
    switch(page){
      case 0:
        return <Game switchSite={switchSite}/>;
      case 1:
        return <div>Page 2</div>;
      case 2:
        return <div>Page 3</div>;
      default:
        return <div>Error</div>;
    }
  }

  const renderSite = () => {
    if(site){
      return (
        <div>
          <div className={styles.title}>The Taliban</div>
          <div className={styles.menuContainer}>
            <button className={styles.menuButton} onClick={() => handlePageClick(0)}>Game</button>
            <button className={styles.menuButton} onClick={() => handlePageClick(1)}>History</button>
            <button className={styles.menuButton} onClick={() => handlePageClick(2)}>Fornite</button>
          </div>
          <div className={styles.container}>
            {renderContent()}
          </div>
        </div>
      );
    }
    else{
      return(
        <div className={styles.fullScreen}>
          <div className={styles.fadeText}>{message}</div>
          <button 
            className={`${styles.fadeButton} ${restartButton ? styles.visible : styles.hidden}`}
            onClick={() => restartClick()}>
            Restart
          </button>
        </div>
      );
    }
  }

  return (
    <div>
      {renderSite()}
    </div>
  );
}
