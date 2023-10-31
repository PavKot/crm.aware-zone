import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";
import "./EventsCalendar.css";
import { BiLinkExternal } from "react-icons/bi";
import emojiGlasses from "../../Images/emojiGlasses.png";
import calendarHold from "../../Images/calendarHold.png";

const EventsCalendar = () => {
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
    /* beautiful calendar of events for users */
    <>
      <div className="record-wrapper-header-block">
        <div className="record-wrapper-header">
          <h1>
            Календар подій
            <span>aWARe Zone</span>
          </h1>
          <img src={emojiGlasses} alt="emojiGlasses" />
        </div>
      </div>
      <div className="calendar-items">
        {events.map((event) => (
          <div className="calendar-item">
            <img src={calendarHold} alt="" />
            <h4>{event.name}</h4>
            <div className="calendar-date-place">
              <h4>{event.date}</h4>
              <h4>{event.city}</h4>
            </div>
          </div>
        ))}
      </div>
      <footer className="record-footer">
        <a href="https://aware-zone.com/">
          Повернутись на сайт <span>aWARe Zone</span>
        </a>
      </footer>
    </>
  );
};

export default EventsCalendar;
