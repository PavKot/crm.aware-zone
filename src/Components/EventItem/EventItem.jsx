import React from "react";
import "./EventItem.css";
import { BiEditAlt } from "react-icons/bi";
import { AiOutlineClose } from "react-icons/ai";

const EventItem = ({ openEditPopup, openDeletePopup, event }) => {
  return (
    <>
      <div className="users-wrapper-content-body-item">
        <div className="users-wrapper-content-body-item-left">
          <div className="users-wrapper-content-body-item-id">
            <p>{event.id}</p>
          </div>
          <div className="users-wrapper-content-body-item-name">
            <p>{event.name}</p>
          </div>
          <div className="users-wrapper-content-body-item-visit">
            <p>{event.date}</p>
          </div>
          <div className="users-wrapper-content-body-item-ngo">
            <p>{event.city}</p>
          </div>
        </div>
        <div className="users-wrapper-content-body-item-right">
          <div className="users-wrapper-content-body-item-right-btn">
            <button onClick={() => openEditPopup(event)}>
              <BiEditAlt />
            </button>
          </div>
          <div className="users-wrapper-content-body-item-right-btn">
            <button onClick={() => openDeletePopup(event)}>
              <AiOutlineClose />
            </button>
          </div>
        </div>
      </div>
      <div className="line"></div>
    </>
  );
};

export default EventItem;
