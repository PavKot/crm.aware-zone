import React, { useState, useEffect } from "react";
import "./EditUserPopup.css";
import { AiOutlineClose } from "react-icons/ai";
import axios from "axios";

const EditUserPopup = ({
  openEdit,
  setOpenEdit,
  activeItem,
  setFilteredUsers,
  searchResults,
  setSearchResults,
}) => {
  const [editedUser, setEditedUser] = useState(activeItem);

  useEffect(() => {
    setEditedUser(activeItem);
  }, [activeItem]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEditedUser({ ...editedUser, [name]: value });
  };

  const handleSubmit = () => {
    axios
      .post(process.env.REACT_APP_API_EMAIL_URL + "/editVisitor", editedUser)
      .then((response) => {
        console.log("User edited:", response.data);
        setOpenEdit(false);
        setFilteredUsers(response.data);
        setSearchResults(
          searchResults.map((user) =>
            user.id === editedUser.id ? editedUser : user
          )
        );
      })
      .catch((error) => {
        console.error("Error editing user:", error);
      });
  };

  return (
    <>
      <div className={`add-user-popup-wrapper ${openEdit ? "open" : ""}`}>
        <div className="add-user-popup-wrapper-content">
          <div className="add-user-popup-wrapper-content-header">
            <h1>Змінити користувача {activeItem.name}</h1>
            <a href="#" onClick={() => setOpenEdit(false)}>
              <AiOutlineClose />
            </a>
          </div>
          <div className="add-user-popup-wrapper-content-form">
            <div className="add-user-popup-wrapper-content-form-item">
              <label htmlFor="name">Ім'я</label>
              <input
                type="text"
                name="name"
                id="name"
                value={editedUser.name}
                onChange={handleInputChange}
              />
            </div>
            <div className="add-user-popup-wrapper-content-form-item">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                name="email"
                id="email"
                value={editedUser.email}
                onChange={handleInputChange}
              />
            </div>
            <div className="add-user-popup-wrapper-content-form-item">
              <label htmlFor="visits">Рази відвідування</label>
              <input
                type="number"
                name="visits"
                id="visits"
                value={editedUser.visits}
                onChange={handleInputChange}
              />
            </div>
            <div className="add-user-popup-wrapper-content-form-item">
              <label htmlFor="ngo">Громадська організація</label>
              <input
                type="text"
                name="ngo"
                id="ngo"
                value={editedUser.ngo}
                onChange={handleInputChange}
              />
            </div>
            <div className="add-user-popup-wrapper-content-form-item">
              <label htmlFor="city">Місто</label>
              <input
                type="text"
                name="city"
                id="city"
                value={editedUser.city}
                onChange={handleInputChange}
              />
            </div>
            <button onClick={handleSubmit}>Редагувати</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default EditUserPopup;
