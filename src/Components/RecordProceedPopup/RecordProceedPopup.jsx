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
  const [details, setDetails] = useState("");
  const [contacts, setContacts] = useState("");
  const [openSuccess, setOpenSuccess] = useState(false);
  const handleProceedRecord = () => {
    axios
      .post(process.env.REACT_APP_API_EMAIL_URL + "/addRecord", {
        name: document.getElementById("recordname").value,
        number: document.getElementById("recordnumber").value,
        date: activeDate,
        place: activePlace,
        details: document.getElementById("recorddetails").value,
        contacts: document.getElementById("recordcontacts").value,
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
            <h1>Перевірте дані і вкажіть додаткові дані</h1>
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
            <input
              type="text"
              placeholder="Додаткові деталі (кількість учасників та учасниць)"
              id="recorddetails"
              name="recorddetails"
              onChange={(e) => setDetails(e.target.value)}
            />
            <input
              type="text"
              placeholder="Ваш контакт у соціальній мережі(Telegram, Instagram, Facebook)"
              id="recordcontacts"
              name="recordcontacts"
              onChange={(e) => setContacts(e.target.value)}
            />
            <button
              className="hub-card-btn-proceed"
              onClick={handleProceedRecord}
            >
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
            <p>{details}</p>
            <p>{contacts}</p>
            <p style={{ fontWeight: "bold" }}>
              Наш адміністратор з вами звʼяжеться для уточнення деталей
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default RecordProceedPopup;
