import React from "react";
import "./data-list-item.css";



const DataListItem = ({ component, addToCart }) => {

    const BtnOnClick = (event) => {
        event.target.classList.add("bg-secondary");
        event.target.innerHTML = ("Added to cart");
        addToCart();
    };

    const { title, model, weight, price, image } = component;


    return (
        <div className="data-list-item d-flex my">
            <div className="image-box mr-4 mr-md-5">
                <img src={image}
                    alt="Dura-Ace component"></img>
            </div>

            <div className="content-box">
                <div className="font-weight-bold mb-3">{title}</div>
                <div className="mb-2"><span className="font-weight-bold">Model:</span> {model}</div>
                <div className="mb-2"><span className="font-weight-bold">Weight:</span> {weight}</div>
                <div className="mb-2"><span className="font-weight-bold">Price:</span> {price}$</div>
                <button
                    onClick={BtnOnClick}
                    className="btn btn-primary btn-sm mt-1 mt-md-3">Add to cart</button>
            </div>
        </div >
    );
};



export default DataListItem;