import React from "react";
import "./OnDeleteEventPopup.css";
import { AiOutlineClose } from "react-icons/ai";
import axios from "axios";

const OnDeleteEventPopup = ({
  openDelete,
  setOpenDelete,
  activeItem,
  setEvents,
}) => {
  const handleSubmit = () => {
    axios
      .post(process.env.REACT_APP_API_EMAIL_URL + "/deleteEvent", {
        id: activeItem.id,
      })
      .then((response) => {
        console.log("Event deleted:", response.data);
        setOpenDelete(false);
        setEvents(response.data);
      })
      .catch((error) => {
        console.error("Error deleting event:", error);
      });
  };
  return (
    <>
      <div className={`add-user-popup-wrapper ${openDelete ? "open" : ""}`}>
        <div className="add-user-popup-wrapper-content">
          <div className="add-user-popup-wrapper-content-header">
            <h1>Видалити івент {activeItem.name}</h1>
            <a href="#" onClick={() => setOpenDelete(false)}>
              <AiOutlineClose />
            </a>
          </div>
          <div className="add-user-popup-wrapper-content-form">
            <button onClick={handleSubmit}>Видалити</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default OnDeleteEventPopup;
