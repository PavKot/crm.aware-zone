import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";
import "./EventsCalendar.css";

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
      <div className="events-calendar">
        <h1>Календар подій</h1>
        <div className="events-calendar-content">
          <div className="events-calendar-content-header">
            <div className="events-calendar-content-header-details">
              <h2>Назва</h2>
            </div>
            <div className="events-calendar-content-header-date">
              <h2>Дата</h2>
            </div>
            <div className="events-calendar-content-header-place">
              <h2>Місце</h2>
            </div>
            <div className="events-calendar-content-header-details">
              <h2>Деталі</h2>
            </div>
          </div>
          <div className="events-calendar-content-events">
            {events.map((event) => (
              <div className="events-calendar-content-event">
                <div className="events-calendar-content-event-details">
                  <p>{event.name}</p>
                </div>
                <div className="events-calendar-content-event-date">
                  <p>{event.date}</p>
                </div>
                <div className="events-calendar-content-event-place">
                  <p>{event.city}</p>
                </div>
                <div className="events-calendar-content-event-details">
                  <p>{event.name}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
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
