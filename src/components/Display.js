import React from "react";
import Card from "./Card";

function Display(props) {
    return (
        <div className="row">
            {props.cards.map((card) => (
                <Card
                    key={card.id}
                    id={card.id}
                    image={card.image}
                    handleClick={props.handleClick}
                />
            ))}
        </div>
    );
}

export default Display;


