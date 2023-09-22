import React from "react";
import "./HubPopup.css";
import { AiOutlineClose } from "react-icons/ai";

const HubPopup = ({ openHub, setOpenHub, setActivePlace }) => {
  return (
    <div className={`add-user-popup-wrapper ${openHub ? "open" : ""}`}>
      <div className="add-user-popup-wrapper-content">
        <div className="add-user-popup-wrapper-content-header">
          <h1>Обрати хаб</h1>
          <a href="#" onClick={() => setOpenHub(false)}>
            <AiOutlineClose />
          </a>
        </div>
        <div className="choose-hub-form">
          <button
            className="hub-card-btn"
            onClick={() => {
              setActivePlace("Київ, вул. Дегтярна 6");
              setOpenHub(false);
            }}
          >
            <div className="hub-card">
              <h1>Київ</h1>
              <h2>вул. Дегтярна 6</h2>
            </div>
          </button>
          <button
            className="hub-card-btn"
            onClick={() => {
              setActivePlace("Чернігів, вул. Київська 11");
              setOpenHub(false);
            }}
          >
            <div className="hub-card">
              <h1>Чернігів</h1>
              <h2>вул. Київська 11, Black Wood Tower, 10 поверх</h2>
            </div>
          </button>
          <button
            className="hub-card-btn"
            onClick={() => {
              setActivePlace("Мукачево, вул. Свободи 25а");
              setOpenHub(false);
            }}
          >
            <div className="hub-card">
              <h1>Мукачево</h1>
              <h2>вул. Свободи 25а, 3 поверх</h2>
            </div>
          </button>
        </div>
      </div>
    </div>
  );
};

export default HubPopup;
