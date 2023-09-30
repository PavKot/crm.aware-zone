import React from "react";
import "./DataPopup.css";
import { AiOutlineClose } from "react-icons/ai";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import moment from "moment";

const DataPopup = ({ openData, setOpenData, setActiveDate }) => {
  const registeredDates = ["2023-10-01", "2023-10-02", "2023-10-03"];
  const handleDateClick = (date) => {
    setActiveDate(moment(date).format("YYYY-MM-DD"));
    setOpenData(false);
  };
  const isDateDisabled = (date) => {
    return (
      date < new Date() ||
      registeredDates.includes(moment(date).format("YYYY-MM-DD"))
    );
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
          <Calendar
            onClickDay={handleDateClick}
            tileDisabled={({ date }) => isDateDisabled(date)}
          />
        </div>
      </div>
    </div>
  );
};

export default DataPopup;
