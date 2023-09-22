import React from "react";
import "./RecordWrapper.css";
import { useState } from "react";
import { BsHouseCheck } from "react-icons/bs";
import { MdDateRange } from "react-icons/md";
import emojiGlasses from "../../Images/emojiGlasses.png";
import HubPopup from "../HubPopup/HubPopup";
import DataPopup from "../DataPopup/DataPopup";
import RecordProceedPopup from "../RecordProceedPopup/RecordProceedPopup";

const RecordWrapper = () => {
  const [activePlace, setActivePlace] = useState(0);
  const [activeDate, setActiveDate] = useState(0);
  const [openHub, setOpenHub] = useState(false);
  const [openData, setOpenData] = useState(false);
  const [openProceed, setOpenProceed] = useState(false);
  return (
    <>
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
        <div className="record-wrapper-header">
          <h1>Записатись у aWARe Zone</h1>
          <img src={emojiGlasses} alt="emojiGlasses" />
        </div>
        <h2>Чекаємо на тебе</h2>
        <div className="record-wrapper-choices">
          <button
            className="record-wrapper-choice-btn"
            onClick={() => setOpenHub(true)}
          >
            <div className="record-wrapper-choice">
              <h3>
                Обрати aWARe Zone <BsHouseCheck />
              </h3>
              {activePlace === 0 ? (
                <></>
              ) : (
                <h3 className="choice">{activePlace}</h3>
              )}
            </div>
          </button>
          <button
            className="record-wrapper-choice-btn"
            onClick={() => setOpenData(true)}
          >
            <div className="record-wrapper-choice">
              <h3>
                Обрати дату <MdDateRange />
              </h3>
              {activeDate === 0 ? (
                <></>
              ) : (
                <h3 className="choice">{activeDate}</h3>
              )}
            </div>
          </button>
        </div>
        <div className="record-wrapper-btn">
          <button
            className="record-wrapper-btn-btn"
            onClick={() => setOpenProceed(true)}
          >
            Записатись
          </button>
        </div>
      </div>
    </>
  );
};

export default RecordWrapper;
