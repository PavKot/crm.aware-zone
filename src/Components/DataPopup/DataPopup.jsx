import React from "react";
import "./DataPopup.css";
import { AiOutlineClose } from "react-icons/ai";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import moment from "moment";

const DataPopup = ({ openData, setOpenData, setActiveDate }) => {
  const handleDateClick = (date) => {
    setActiveDate(moment(date).format("YYYY-MM-DD"));
    setOpenData(false);
  };
  return (
    <div className={`add-user-popup-wrapper ${openData ? "open" : ""}`}>
      <div className="add-user-popup-wrapper-content">
        <div className="add-user-popup-wrapper-content-header">
          <h1>Обрати дату</h1>
          <a href="#" onClick={() => setOpenData(false)}>
            <AiOutlineClose />
          </a>
        </div>
        <div className="choose-hub-form">
          <Calendar onClickDay={handleDateClick} />
        </div>
      </div>
    </div>
  );
};

export default DataPopup;
