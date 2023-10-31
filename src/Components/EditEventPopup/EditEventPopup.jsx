import React, { useEffect } from "react";
import "./EditEventPopup.css";
import { AiOutlineClose } from "react-icons/ai";
import { useState } from "react";
import axios from "axios";

const EditEventPopup = ({ openEdit, setOpenEdit, activeItem, setEvents }) => {
  const [editedEvent, setEditedEvent] = useState(activeItem);

  useEffect(() => {
    setEditedEvent(activeItem);
  }, [activeItem]);
  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    const newValue = type === "checkbox" ? checked : value;
    setEditedEvent({ ...editedEvent, [name]: newValue });
  };
  const handleSubmit = () => {
    axios
      .post(process.env.REACT_APP_API_EMAIL_URL + "/editEvent", editedEvent)
      .then((response) => {
        console.log("User edited:", response.data);
        setOpenEdit(false);
        setEvents(response.data);
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
            <h1>Змінити івент {activeItem.name}</h1>
            <a href="#" onClick={() => setOpenEdit(false)}>
              <AiOutlineClose />
            </a>
          </div>
          <div className="add-user-popup-wrapper-content-form">
            <div className="add-user-popup-wrapper-content-form-item">
              <label htmlFor="name">Назва</label>
              <input
                type="text"
                name="name"
                id="name"
                onChange={handleInputChange}
                value={editedEvent.name}
              />
            </div>
            <div className="add-user-popup-wrapper-content-form-item">
              <label htmlFor="text">Опис</label>
              <input
                type="date"
                name="date"
                id="date"
                onChange={handleInputChange}
                value={editedEvent.date}
              />
            </div>
            <div className="add-user-popup-wrapper-content-form-item">
              <label htmlFor="text">Місто</label>
              <input
                type="city"
                name="city"
                id="city"
                onChange={handleInputChange}
                value={editedEvent.city}
              />
            </div>
            <div className="add-user-popup-wrapper-content-form-item-chbox">
              <label htmlFor="active">Відкрита подія</label>
              <input
                type="checkbox"
                name="active"
                id="active"
                value={editedEvent.active}
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

export default EditEventPopup;
