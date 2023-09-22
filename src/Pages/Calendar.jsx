import React from "react";
import NavPanel from "../Components/NavPanel/NavPanel";
import CalendarWrapper from "../Components/CalendarWrapper/CalendarWrapper";

const Calendar = () => {
  return (
    <>
      <NavPanel useActiveItem="Calendar" />
      <CalendarWrapper />
    </>
  );
};

export default Calendar;
