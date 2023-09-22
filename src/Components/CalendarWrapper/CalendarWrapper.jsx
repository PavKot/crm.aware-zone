import React, { useEffect, useState } from "react";
import "./CalendarWrapper.css";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import AddEventPopup from "../AddEventPopup/AddEventPopup";
import emojiCalendar from "../../Images/emojiCalendar.png";
import emojiStar from "../../Images/emojiStar.png";
import { BiEditAlt } from "react-icons/bi";
import { AiOutlineClose } from "react-icons/ai";
import EventItem from "../EventItem/EventItem";
import EditEventPopup from "../EditEventPopup/EditEventPopup";
import OnDeleteEventPopup from "../OnDeleteEventPopup/OnDeleteEventPopup";
import axios from "axios";
import moment from "moment";

const CalendarWrapper = () => {
  const [open, setOpen] = useState(false);
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [openEdit, setOpenEdit] = useState(false);
  const [openDelete, setOpenDelete] = useState(false);
  const [activeItem, setActiveItem] = useState([]);
  const openEditPopup = (event) => {
    setOpenEdit(true);
    setActiveItem(event);
  };

  const openDeletePopup = (event) => {
    setOpenDelete(true);
    setActiveItem(event);
  };

  const handleDateClick = (date) => {
    setSelectedDate(date);
    setOpen(true);
    console.log(moment(date).format("YYYY-MM-DD"));
  };
  const [events, setEvents] = useState([]);
  useEffect(() => {
    axios
      .get(process.env.REACT_APP_API_EMAIL_URL + "/getEvents")
      .then((response) => {
        console.log(response.data);
        setEvents(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <>
      <AddEventPopup
        open={open}
        setOpen={setOpen}
        selectedDate={selectedDate}
        setEvents={setEvents}
      />
      <EditEventPopup
        openEdit={openEdit}
        setOpenEdit={setOpenEdit}
        activeItem={activeItem}
        setEvents={setEvents}
      />
      <OnDeleteEventPopup
        openDelete={openDelete}
        setOpenDelete={setOpenDelete}
        activeItem={activeItem}
        setEvents={setEvents}
      />
      <div className="calendar-wrapper">
        <div className="calendar-wrapper-content">
          <div className="calendar-wrapper-content-header">
            <h1>Календар</h1>
            <img src={emojiCalendar} alt="emoji calendar" />
          </div>
          <Calendar onClickDay={handleDateClick} />
          <div className="calendar-wrapper-content-header">
            <h1>Події</h1>
            <img src={emojiStar} alt="emoji star" />
          </div>
          <div className="calendar-wrapper-content-users">
            <div className="users-wrapper-content-body-item heading">
              <div className="users-wrapper-content-body-item-left">
                <div className="users-wrapper-content-body-item-id">
                  <p>id</p>
                </div>
                <div className="users-wrapper-content-body-item-name">
                  <p>Ім'я</p>
                </div>
                <div className="users-wrapper-content-body-item-visit">
                  <p>Дата</p>
                </div>
                <div className="users-wrapper-content-body-item-ngo">
                  <p>Місто</p>
                </div>
              </div>
            </div>
            <div className="calendar-wrapper-content-events">
              {events.map((event) => (
                <EventItem
                  key={event.id}
                  event={event}
                  openEditPopup={openEditPopup}
                  openDeletePopup={openDeletePopup}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CalendarWrapper;
