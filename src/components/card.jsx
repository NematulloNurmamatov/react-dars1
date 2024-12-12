import React from "react";
import right from "../images/right.png";
import star from "../images/star.png";
import person from "../images/person.png";
import carbon from "../images/carbon_view.png";

import "../style/card.css"

export const CardItem = ({ image, title, description, description2, author, date, stats }) => {
    return (
        <div className="card">
            <img src={image} alt="Card visual" className="card__image" />
            <div className="card__content">
                <h2 className="card__title">{title}</h2>
                <p className="card__description">{description}</p>
                <p className="card__description2">{description2}</p>
                <div className="card__footer">
                    <div className="person">
                        <img src={person} alt="person" />
                        <div>
                            <h4>{author}</h4>
                            <p>{date}</p>
                        </div>
                    </div>
                    <div className="carbon">
                        <img src={carbon} alt="korishlar soni" />
                        <h3>1.5M</h3>
                    </div>
                    <div>
                        <img src={star} alt="star" />
                    </div>
                    <div>
                        <img src={right} alt="right" />
                    </div>
                </div>
            </div>
        </div>
    );
};