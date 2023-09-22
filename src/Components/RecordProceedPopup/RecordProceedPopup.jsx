import React from "react";
import "./RecordProceedPopup.css";
import { AiOutlineClose } from "react-icons/ai";
import axios from "axios";
import { useState } from "react";

const RecordProceedPopup = ({
  openProceed,
  setOpenProceed,
  setActiveProceed,
  activeDate,
  activePlace,
}) => {
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");
  const [openSuccess, setOpenSuccess] = useState(false);
  const handleProceedRecord = () => {
    axios
      .post(process.env.REACT_APP_API_EMAIL_URL + "/addRecord", {
        name: document.getElementById("recordname").value,
        number: document.getElementById("recordnumber").value,
        date: activeDate,
        place: activePlace,
      })
      .then((response) => {
        setOpenProceed(false);
        setOpenSuccess(true);
      });
  };
  return (
    <>
      <div className={`add-user-popup-wrapper ${openProceed ? "open" : ""}`}>
        <div className="add-user-popup-wrapper-content">
          <div className="add-user-popup-wrapper-content-header">
            <h1>Перевірте дані і вкажіть ваше ім'я</h1>
            <a href="#" onClick={() => setOpenProceed(false)}>
              <AiOutlineClose />
            </a>
          </div>
          <div className="final-data">
            <p>{activePlace}</p>
            <p>{activeDate}</p>
          </div>
          <div className="choose-hub-form">
            <input
              type="text"
              placeholder="Ім'я"
              id="recordname"
              name="recordname"
              onChange={(e) => setName(e.target.value)}
            />
            <input
              type="text"
              placeholder="Номер телефону"
              id="recordnumber"
              name="recordnumber"
              onChange={(e) => setNumber(e.target.value)}
            />
            <button className="hub-card-btn" onClick={handleProceedRecord}>
              Підтвердити
            </button>
          </div>
        </div>
      </div>
      <div className={`add-user-popup-wrapper ${openSuccess ? "open" : ""}`}>
        <div className="add-user-popup-wrapper-content">
          <div className="add-user-popup-wrapper-content-header">
            <h1>Вітаємо, ви записались на візит</h1>
            <a href="#" onClick={() => setOpenSuccess(false)}>
              <AiOutlineClose />
            </a>
          </div>
          <div className="final-data">
            <p>{activePlace}</p>
            <p>{activeDate}</p>
            <p>{name}</p>
            <p>{number}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default RecordProceedPopup;
