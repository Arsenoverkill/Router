import React from "react";
import "./Order.css";

const Order = ({
  counter,
  setCounter,
  counter2,
  setCounter2,
  counter3,
  setCounter3,
  counter4,
  setCounter4,
}) => {
  return (
    <div className="order">
      <h1>CREATE PRODUCTE</h1>
      <div className="blocks">
        <div className="block">
          <img
            src="https://neurosciencenews.com/files/2023/06/coffee-brain-caffeine-neuroscincces.jpg"
            alt=""
          />
          <div className="info-food">
            <h3>cappuccino</h3>
            <h4>{counter3}$</h4>
          </div>
          <div className="function">
            <button className="delete">Delete</button>
            <div className="quintity">
              <button
                onClick={() => {
                  setCounter2(counter2 + 1);
                  setCounter3(counter3 + counter4);
                }}
              >
                +
              </button>
              <h5>{counter2}x</h5>
              <button
                onClick={() => {
                  if (counter2 > 1) {
                    setCounter3(counter3 - counter4);
                    setCounter2(counter2 - 1);
                  }
                }}
              >
                -
              </button>
            </div>
          </div>
        </div>
        <div className="block">
          <img
            src="https://neurosciencenews.com/files/2023/06/coffee-brain-caffeine-neuroscincces.jpg"
            alt=""
          />
          <div className="info-food">
            <h3>cappuccino</h3>
            <h4>10.5$</h4>
          </div>
          <div className="function">
            <button className="delete">Delete</button>
            <div className="quintity">
              <button
                onClick={() => {
                  setCounter(counter + 1);
                }}
              >
                +
              </button>
              <h5>{counter}x</h5>
              <button
                onClick={() => {
                  if (counter > 1) {
                    setCounter(counter - 1);
                  }
                }}
              >
                -
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Order;
