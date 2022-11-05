import React, { Component} from "react";
import Cards from "./portfoliocards/Cards.json";
import "../styles.css";




class Portfolio extends Component {
  render() {
    return (
      <div className="mainportwindow">
        <h2 className="Port-index">Portfolio</h2>
        <div className="containerport">
        {Cards.map((cardDetail, index) => {
          return (
            <div className="Wrapper" key={index}>
              <h4>{cardDetail.cardname}</h4>
              <img className="portfolioImg" src={cardDetail.image} alt="Portfolio Card" />
              <div className="overlay">
                <div className="text">
                  <div className="leftbutton">
                  <a href={cardDetail.github} target="_blank" rel="noopener noreferrer">
                    <button className="btn btn-primary">Github</button>
                  </a>
                  </div>
                  <div className="rightbutton">
                  <a href={cardDetail.site} target="_blank" rel="noopener noreferrer">
                    <button className="btn btn-primary">Deployed</button>
                  </a>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
        </div>
      </div>
    )
  }
}

export default Portfolio;