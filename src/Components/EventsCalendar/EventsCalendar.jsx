import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";
import "./EventsCalendar.css";
import { BiLinkExternal } from "react-icons/bi";
import emojiGlasses from "../../Images/emojiGlasses.png";
import calendarHold from "../../Images/calendarHold.png";
import calendarEnd from "../../Images/calendarEnd.png";
import calendarActive from "../../Images/calendarActive.png";

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
        {events.reverse().map((event) => {
          const isPastEvent = new Date(event.date) < new Date();
          const isActiveEvent = event.active;

          let imageSrc;
          if (isPastEvent) {
            imageSrc = calendarEnd;
          } else if (!isPastEvent && isActiveEvent === 1) {
            imageSrc = calendarActive;
          } else if (!isPastEvent && isActiveEvent === 0) {
            imageSrc = calendarHold;
          } else {
            imageSrc = calendarHold;
          }

          return (
            <div className="calendar-item">
              <img src={imageSrc} alt="" />
              <h4>{event.name}</h4>
              <div className="calendar-date-place">
                <h4>{event.date}</h4>
                <h4>{event.city}</h4>
              </div>
            </div>
          );
        })}
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
