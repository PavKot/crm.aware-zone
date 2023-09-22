import React from "react";
import "./UserItem.css";
import { BiEditAlt } from "react-icons/bi";
import { AiOutlineClose } from "react-icons/ai";

const UserItem = ({ openEditPopup, openDeletePopup, user }) => {
  return (
    <>
      <div className="users-wrapper-content-body-item">
        <div className="users-wrapper-content-body-item-left">
          <div className="users-wrapper-content-body-item-id">
            <p>{user.id}</p>
          </div>
          <div className="users-wrapper-content-body-item-name">
            <p>{user.name}</p>
          </div>
          <div className="users-wrapper-content-body-item-email">
            <p>{user.email}</p>
          </div>
          <div className="users-wrapper-content-body-item-visit">
            <p>{user.visits}</p>
          </div>
          <div className="users-wrapper-content-body-item-ngo">
            <p>{user.ngo}</p>
          </div>
          <div className="users-wrapper-content-body-item-city">
            <p>{user.city}</p>
          </div>
        </div>
        <div className="users-wrapper-content-body-item-right">
          <div className="users-wrapper-content-body-item-right-btn">
            <button onClick={() => openEditPopup(user)}>
              <BiEditAlt />
            </button>
          </div>
          <div className="users-wrapper-content-body-item-right-btn">
            <button onClick={() => openDeletePopup(user)}>
              <AiOutlineClose />
            </button>
          </div>
        </div>
      </div>
      <div className="line"></div>
    </>
  );
};

export default UserItem;
