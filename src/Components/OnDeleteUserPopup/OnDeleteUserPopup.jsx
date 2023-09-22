import React from "react";
import "./OnDeleteUserPopup.css";
import { AiOutlineClose } from "react-icons/ai";
import axios from "axios";

const OnDeleteUserPopup = ({
  openDelete,
  setOpenDelete,
  activeItem,
  setFilteredUsers,
  setSearchResults,
  searchResults,
}) => {
  const handleSubmit = () => {
    axios
      .post(process.env.REACT_APP_API_EMAIL_URL + "/deleteVisitor", {
        id: activeItem.id,
      })
      .then((response) => {
        console.log("User deleted:", response.data);
        setOpenDelete(false);
        setFilteredUsers(response.data);
        setSearchResults(
          searchResults.filter((user) => user.id !== activeItem.id)
        );
      })
      .catch((error) => {
        console.error("Error deleting User:", error);
      });
  };
  return (
    <>
      <div className={`add-user-popup-wrapper ${openDelete ? "open" : ""}`}>
        <div className="add-user-popup-wrapper-content">
          <div className="add-user-popup-wrapper-content-header">
            <h1>Видалити користувача {activeItem.name}</h1>
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

export default OnDeleteUserPopup;
