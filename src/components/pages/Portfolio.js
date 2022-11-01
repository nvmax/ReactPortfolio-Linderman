import React, { Component} from "react";
import Cards from "./portfoliocards/Cards.json";
import "../styles.css";




class Portfolio extends Component {
  render() {
    return (
      <div >
        <br />
        <h2 className="Port-index">Portfolio</h2>
        <section className="containerport">
        {Cards.map((cardDetail, index) => {
          return (

            <div className="Wrapper" key={index}>
              <h4>{cardDetail.cardname}</h4>
              <img className="portfolioImg" src={cardDetail.image} alt="Portfolio Card" />
              <a className="sitelink" href={cardDetail.site} target="_blank" rel="noopener noreferrer">Live site</a>
              `     `
              <a className="sitelink" href={cardDetail.github} target="_blank" rel="noopener noreferrer">Github Code</a>
            </div>
          );
        })}
        </section>
      </div>
    )
  }
}

export default Portfolio;