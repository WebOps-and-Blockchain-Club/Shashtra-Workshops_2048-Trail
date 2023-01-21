import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import React, { useState } from "react";

const CalendarComponent = (props) => {
  const [dateState, setDateState] = useState(new Date());

  const changeDate = (e) => {
    setDateState(e);
  };

  return (
    <>
      {props.CalenderVisibile ? (
        <Calendar
          className="container mt-3 expand-lg text-white "
          value={dateState}
          onChange={changeDate}
        />
      ) : null}
    </>
  );
};

export default CalendarComponent;
