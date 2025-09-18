"use client"
import React, { useState, useEffect } from "react";
import styles from "../styles/page.module.css";
import Game from "../app/game";
import { homeSummary, currentEvents, history, kiteRunner } from "../const/details"

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
        return (
        <div>
          <div className={styles.pageHeader}>Home</div>
          <div className={styles.textBody} style={{marginTop: '30px', fontSize: '60px'}}>Welcome to Our Website</div>
          <div className={styles.textBody} style={{marginTop: '30px'}}>{homeSummary}</div>
        </div>
        );
      case 1:
        return (
        <div>
          <div className={styles.pageHeader}>History</div>
          <div className={styles.row}>
            <div className={styles.textBody} style={{fontSize: '20px', maxWidth: '600px'}}>{history[0]}</div>
            <div className={styles.box}>
              <img src='quran.webp' style={{maxWidth: '400px', maxHeight: '400px'}}></img>
              <div>The Quran, the central religious text of Islam</div>
            </div>
          </div>
          <div className={styles.row} style={{marginTop: '30px'}}>
            <div className={styles.box}>
              <img src='northernAllianceFlag.png' style={{maxWidth: '400px', maxHeight: '400px'}}></img>
              <div>Northern Alliance Flag</div>
            </div>
            <div className={styles.textBody} style={{fontSize: '20px', maxWidth: '600px'}}>{history[1]}</div>
          </div>
          <div className={styles.row} style={{marginTop: '30px'}}>
            <div className={styles.textBody} style={{fontSize: '20px', maxWidth: '600px'}}>{history[2]}</div>
            <div className={styles.box}>
              <img src='USSoldiers.jpg' style={{maxWidth: '400px', maxHeight: '400px'}}></img>
              <div>US Soldiers in the War in Afghanistan</div>
            </div>
          </div>
        </div>
        );
      case 2:
        return(
        <div>
          <div className={styles.pageHeader}>Kite Runner</div>
          <div className={styles.row}>
            <div className={styles.textBody} style={{fontSize: '20px', maxWidth: '600px'}}>{kiteRunner[0]}</div>
            <div className={styles.box}>
              <img src='kabulRuins.jpg' style={{maxWidth: '400px', maxHeight: '400px'}}></img>
              <div>A destroyed market in Kabul under Taliban rule</div>
            </div>
          </div>
          <div className={styles.row} style={{marginTop: '30px'}}>
            <div className={styles.box}>
              <img src='talibanFighters.jpg' style={{maxWidth: '400px', maxHeight: '400px'}}></img>
              <div>Taliban members</div>
            </div>
            <div className={styles.textBody} style={{fontSize: '20px', maxWidth: '600px'}}>{kiteRunner[1]}</div>
          </div>
          <div className={styles.row} style={{marginTop: '30px'}}>
            <div className={styles.textBody} style={{fontSize: '20px', maxWidth: '600px'}}>{kiteRunner[2]}</div>
            <div className={styles.box}>
              <img src='Assef.webp' style={{maxWidth: '400px', maxHeight: '400px'}}></img>
              <div>Depiction of Assef in Kite Runner movie</div>
            </div>
          </div>
        </div>
        );
      case 3:
        return(
        <div>
          <div className={styles.pageHeader}>Current Events</div>
          <div className={styles.row}>
            <div className={styles.textBody} style={{fontSize: '20px', maxWidth: '600px'}}>{currentEvents[0]}</div>
            <div className={styles.box}>
              <img src='womenProtest.webp' style={{maxWidth: '400px', maxHeight: '400px'}}></img>
              <div>Women protesting Taliban restrictions</div>
            </div>
          </div>
          <div className={styles.row} style={{marginTop: '30px'}}>
            <div className={styles.box}>
              <img src='foodCrisis.jpg' style={{maxWidth: '400px', maxHeight: '400px'}}></img>
              <div>Food shortages are common and severe througout Afghanistan</div>
            </div>
            <div className={styles.textBody} style={{fontSize: '20px', maxWidth: '600px'}}>{currentEvents[1]}</div>
          </div>
          <div className={styles.row} style={{marginTop: '30px'}}>
            <div className={styles.textBody} style={{fontSize: '20px', maxWidth: '600px'}}>{currentEvents[2]}</div>
            <div className={styles.box}>
              <img src='economyData.png' style={{maxWidth: '500px', maxHeight: '500px'}}></img>
              <div>After the Taliban took over in 2021, there was a large dip in the economy</div>
            </div>
          </div>
        </div>
        );
      case 4:
        return <Game switchSite={switchSite}/>;
      case 5:
        return(
          <div>
          <div className={styles.pageHeader}>Sources</div>
            <div className={styles.textBody} style={{fontSize: '20px'}}>
              https://www.cfr.org/backgrounder/taliban-afghanistan
              https://www.britannica.com/topic/Taliban
              https://www.dni.gov/nctc/groups/afghan_taliban.html
              https://www.macrotrends.net/global-metrics/countries/afg/afghanistan/gdp-gross-domestic-product 
            </div>
            <div className={styles.textBody} 
              style={{marginTop: '60px'}}>
              Website by: 
              Jordan Bailey, Madison Silva, Javier Silva, and Daniel Gonzales Sanders
            </div>
            <a target="_blank" href='https://github.com/nothingness08/english-taliban-project'><img src='gitHub.png' style={{height: '50px', width: '50px', marginTop: '20px'}}></img></a>
        </div>
        );
      default:
        return <div>Error</div>;
    }
  }

  const renderSite = () => {
    if(site){
      return (
        <div style={{backgroundColor: '#000000ff'}}>
          <div className={styles.title}>The Taliban</div>
          <div className={styles.menuContainer}>
            <button className={styles.menuButton} onClick={() => handlePageClick(0)}>Home</button>
            <button className={styles.menuButton} onClick={() => handlePageClick(1)}>History</button>
            <button className={styles.menuButton} onClick={() => handlePageClick(2)}>Kite Runner</button>
            <button className={styles.menuButton} onClick={() => handlePageClick(3)}>Current Events</button>
            <button className={styles.menuButton} onClick={() => handlePageClick(4)}>Game</button>
            <button className={styles.menuButton} onClick={() => handlePageClick(5)}>Sources</button>
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
