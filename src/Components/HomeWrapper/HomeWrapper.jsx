import React from "react";
import "./HomeWrapper.css";
import emojiSmirking from "../../Images/emojiSmirking.png";
import { useState, useEffect } from "react";
import UserItem from "../UserItem/UserItem";
import emojiStar from "../../Images/emojiStar.png";
import emojiCalendar from "../../Images/emojiCalendar.png";
import EventItem from "../EventItem/EventItem";
import axios from "axios";
import RecordItem from "../RecordItem/RecordItem";
import OnDeleteRecordPopup from "../OnDeleteRecordPopup/OnDeleteRecordPopup";

const HomeWrapper = () => {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    axios
      .get(process.env.REACT_APP_API_EMAIL_URL + "/getVisitors")
      .then((response) => {
        console.log(response.data);
        setUsers(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

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
  const [records, setRecords] = useState([]);
  useEffect(() => {
    axios
      .get(process.env.REACT_APP_API_EMAIL_URL + "/getRecords")
      .then((response) => {
        console.log(response.data);
        setRecords(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const [openDelete, setOpenDelete] = useState(false);
  const [activeRecord, setActiveRecord] = useState([]);

  const sortedUsers = users.sort((a, b) => b.visits - a.visits);
  const topUsers = sortedUsers.slice(0, 5);

  const openDeletePopup = (record) => {
    setActiveRecord(record);
    setOpenDelete(true);
  };
  return (
    <>
      <OnDeleteRecordPopup
        openDelete={openDelete}
        setOpenDelete={setOpenDelete}
        activeRecord={activeRecord}
        setRecords={setRecords}
      />
      <div className="home-wrapper">
        <div className="home-wrapper-content">
          <div className="home-wrapper-content-header">
            <h1>Вітаю в aWARe Zone Panel</h1>
            <img src={emojiSmirking} alt="emoji smirking" />
          </div>
          <div className="home-wrapper-content-body">
            <div className="home-wrapper-content-body-top-users">
              <div className="home-wrapper-content-body-top-users-item">
                <div className="home-wrapper-content-body-top-users-item-header">
                  <h1>Топ відвідувачів</h1>
                  <img src={emojiStar} alt="emoji star" />
                </div>
                <div className="home-wrapper-content-body-top-users-item-list">
                  {topUsers.map((user) => (
                    <UserItem user={user} key={user.id} />
                  ))}
                </div>
              </div>
            </div>

            <div className="home-wrapper-content-body-calendar">
              <div className="home-wrapper-content-body-calendar-item">
                <div className="home-wrapper-content-body-calendar-item-header">
                  <h1>Найближчі події</h1>
                  <img src={emojiCalendar} alt="emoji calendar" />
                </div>
                <div className="calendar-wrapper-content-events">
                  {events.map((event) => (
                    <EventItem event={event} />
                  ))}
                </div>
              </div>
            </div>
          </div>
          <div className="home-wrapper-content-body">
            <div className="home-wrapper-content-body-records">
              <div className="home-wrapper-content-body-records-item">
                <div className="home-wrapper-content-body-records-item-header">
                  <h1>Записи</h1>
                  <img src={emojiCalendar} alt="emoji calendar" />
                </div>
                <div className="users-wrapper-content-body-item heading">
                  <div className="users-wrapper-content-body-item-left">
                    <div className="users-wrapper-content-body-item-id">
                      <p>id</p>
                    </div>
                    <div className="users-wrapper-content-body-item-name">
                      <p>Ім'я</p>
                    </div>
                    <div className="users-wrapper-content-body-item-name">
                      <p>Номер телефону</p>
                    </div>
                    <div className="users-wrapper-content-body-item-email">
                      <p>Дата</p>
                    </div>
                    <div className="users-wrapper-content-body-item-email">
                      <p>Адреса</p>
                    </div>
                  </div>
                </div>
                <div className="calendar-wrapper-content-events">
                  {records.map((record) => (
                    <RecordItem
                      record={record}
                      openDeletePopup={openDeletePopup}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomeWrapper;
