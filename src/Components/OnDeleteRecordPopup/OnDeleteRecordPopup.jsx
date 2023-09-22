import React from "react";
import "./OnDeleteRecordPopup.css";
import { AiOutlineClose } from "react-icons/ai";
import axios from "axios";

const onDeleteRecordPopup = ({
  openDelete,
  setOpenDelete,
  activeRecord,
  setRecords,
}) => {
  const handleSubmit = () => {
    axios
      .post(process.env.REACT_APP_API_EMAIL_URL + "/deleteRecord", {
        id: activeRecord.id,
      })
      .then((response) => {
        console.log("Record deleted:", response.data);
        setOpenDelete(false);
        setRecords(response.data);
      })
      .catch((error) => {
        console.error("Error deleting record:", error);
      });
  };
  return (
    <>
      <div className={`add-user-popup-wrapper ${openDelete ? "open" : ""}`}>
        <div className="add-user-popup-wrapper-content">
          <div className="add-user-popup-wrapper-content-header">
            <h1>
              Видалити запис {activeRecord.name} {activeRecord.date}
            </h1>
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

export default onDeleteRecordPopup;
