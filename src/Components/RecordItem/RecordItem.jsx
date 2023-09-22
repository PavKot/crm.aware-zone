import React from "react";
import "./RecordItem.css";
import { BiEditAlt } from "react-icons/bi";
import { AiOutlineClose } from "react-icons/ai";

const RecordItem = ({ openEditPopup, openDeletePopup, record }) => {
  return (
    <>
      <div className="users-wrapper-content-body-item">
        <div className="users-wrapper-content-body-item-left">
          <div className="users-wrapper-content-body-item-id">
            <p>{record.id}</p>
          </div>
          <div className="users-wrapper-content-body-item-name">
            <p>{record.name}</p>
          </div>
          <div className="users-wrapper-content-body-item-name">
            <p>{record.number}</p>
          </div>
          <div className="users-wrapper-content-body-item-email">
            <p>{record.date}</p>
          </div>
          <div className="users-wrapper-content-body-item-email">
            <p>{record.place}</p>
          </div>
        </div>
        <div className="users-wrapper-content-body-item-right">
          {/*
          <div className="users-wrapper-content-body-item-right-btn">
            <button onClick={() => openEditPopup(record)}>
              <BiEditAlt />
            </button>
          </div>
        */}
          <div className="users-wrapper-content-body-item-right-btn">
            <button onClick={() => openDeletePopup(record)}>
              <AiOutlineClose />
            </button>
          </div>
        </div>
      </div>
      <div className="line"></div>
    </>
  );
};

export default RecordItem;
