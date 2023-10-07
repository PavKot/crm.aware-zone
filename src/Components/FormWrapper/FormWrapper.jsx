import React from "react";

import { useState } from "react";
import { BsHouseCheck } from "react-icons/bs";
import { MdDateRange } from "react-icons/md";
import emojiGlasses from "../../Images/emojiGlasses.png";
import HubPopup from "../HubPopup/HubPopup";
import DataPopup from "../DataPopup/DataPopup";
import RecordProceedPopup from "../RecordProceedPopup/RecordProceedPopup";
import recordImg from "../../Images/recordImg.jpg";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";

const FormWrapper = () => {
  const [activePlace, setActivePlace] = useState(0);
  const [activeDate, setActiveDate] = useState(0);
  const [openHub, setOpenHub] = useState(false);
  const [openData, setOpenData] = useState(false);
  const [openProceed, setOpenProceed] = useState(false);

  const handleSendForm = () => {
    axios
      .post(process.env.REACT_APP_API_EMAIL_URL + "/form1", {
        name: document.getElementById("name").value,
        social: document.getElementById("social").value,
        about: document.getElementById("about").value,
      })
      .then((response) => {
        toast.success(
          "Дякуємо за заявку! Ми зв'яжемось з вами найближчим часом"
        );
      });
  };
  return (
    <>
      <ToastContainer />
      <HubPopup
        openHub={openHub}
        setOpenHub={setOpenHub}
        setActivePlace={setActivePlace}
      />
      <DataPopup
        openData={openData}
        setOpenData={setOpenData}
        setActiveDate={setActiveDate}
      />
      <RecordProceedPopup
        openProceed={openProceed}
        setOpenProceed={setOpenProceed}
        setActiveProceed={setActivePlace}
        activeDate={activeDate}
        activePlace={activePlace}
      />

      <div className="record-wrapper">
        <div className="record-wrapper-header-block">
          <div className="record-wrapper-header">
            <h1>
              Подати заявку{" "}
              <span style={{ backgroundColor: "#F48327" }}>на стажування</span>
            </h1>
            <img src={emojiGlasses} alt="emojiGlasses" />
          </div>
          <h2>Чекаємо на тебе</h2>
        </div>
        <div style={{ maxWidth: "550px", margin: "0 auto", padding: "40px" }}>
          <p>
            Ви давно питаєте, як можна долучитись до нашої команди! Нарешті це
            сталось - ми шукаємо стажерів та стажерок для втілення мрій в дії.
            Ми готові багато працювати, навчати та допомагати
          </p>
          <div className="choose-hub-form">
            <input type="text" id="name" name="name" placeholder="Ваше ім'я" />
            <input
              type="text"
              id="social"
              name="social"
              placeholder="Ваш контакт в соціальній мережі"
            />
            <input
              type="text"
              id="about"
              name="about"
              placeholder="Коротко про вас"
            />
          </div>
        </div>
        <div className="record-wrapper-btn">
          <button
            className="record-wrapper-btn-btn"
            onClick={handleSendForm}
            style={{ backgroundColor: "#F48327" }}
          >
            Записатись
          </button>
        </div>
      </div>
      <footer className="record-footer">
        <a href="https://aware-zone.com/">
          Повернутись на сайт <span>aWARe Zone</span>
        </a>
      </footer>
    </>
  );
};

export default FormWrapper;
