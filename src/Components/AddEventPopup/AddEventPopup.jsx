import React, { useEffect, useState } from "react";
import "./AddEventPopup.css";
import { AiOutlineClose } from "react-icons/ai";
import axios from "axios";
import moment from "moment";

const AddEventPopup = ({ open, setOpen, selectedDate, setEvents }) => {
  useEffect(() => {
    console.log(selectedDate);
    setFormData((prevData) => ({
      ...prevData,
      date: moment(selectedDate).format("YYYY-MM-DD"),
    }));
  }, [selectedDate]);
  const formattedDate = moment(selectedDate).format("YYYY-MM-DD");

  const [formData, setFormData] = useState({
    name: "",
    date: formattedDate,
    city: "",
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = () => {
    axios
      .post(process.env.REACT_APP_API_EMAIL_URL + "/addEvent", formData)
      .then((response) => {
        console.log("Event added:", response.data);
        setOpen(false);
        setEvents(response.data);
      })
      .catch((error) => {
        console.error("Error adding event:", error);
      });
  };

  return (
    <>
      <div className={`add-user-popup-wrapper ${open ? "open" : ""}`}>
        <div className="add-user-popup-wrapper-content">
          <div className="add-user-popup-wrapper-content-header">
            <h1>Додати івент {formattedDate}</h1>
            <a href="#" onClick={() => setOpen(false)}>
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
                value={formData.name}
                onChange={handleInputChange}
              />
            </div>

            <div className="add-user-popup-wrapper-content-form-item">
              <label htmlFor="city">Місто</label>
              <input
                type="text"
                name="city"
                id="city"
                value={formData.city}
                onChange={handleInputChange}
              />
            </div>
            <button onClick={handleSubmit}>Додати</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default AddEventPopup;
