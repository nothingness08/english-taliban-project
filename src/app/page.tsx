"use client"
import React, { useState } from "react";
import styles from "../styles/page.module.css";
import Game from "../app/game";

export default function Home() {

  const [page, setPage] = useState(0);

  function handlePageClick(page: number){
    setPage(page);
  }

  const renderContent = () => {
    switch(page){
      case 0:
        return <Game />;
      case 1:
        return <div>Page 2</div>;
      case 2:
        return <div>Page 3</div>;
      default:
        return <div>Error</div>;
    }
  }
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
