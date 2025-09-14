"use client"
import React, { useState } from "react";
import styles from "../styles/page.module.css";
import Game from "../app/game";

export default function Home() {

  const [page, setPage] = useState(0);
  const [site, setSite] = useState(true);
  const [message, setMessage] = useState("");

  function handlePageClick(page: number){
    setPage(page);
  }

  function switchSite(text: string = ""){
    setSite(!site);
    setMessage(text);
  }

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
