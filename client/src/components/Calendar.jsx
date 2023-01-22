import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import React, { useState } from "react";

const CalendarComponent = ({ setModalShow, setModalContent }) => {
  const [dateState, setDateState] = useState(new Date());

  const changeDate = (e) => {
    const dateArr = e.toDateString().split(" ");
    dateArr.splice(0, 1);
    fetch("http://localhost:8000/diary/getentry", {
      method: "POST",
      body: JSON.stringify({ search: dateArr.join(" ") }),
      headers: {
        "Content-Type": "application/json",
        "x-access-token": localStorage.getItem("token")
      }
    })
      .then(res => res.json())
      .then(data => {
        const entry = {
          message: data.message,
          content: data.entryRetrived
        }
        setModalContent(entry);
        setModalShow(true);
      })
      .catch(err => alert("Error: Cannot get entry"))
  };

  return (
    <>
      <Calendar
        className="container mt-3 expand-lg text-white rounded bg-secondary"
        value={dateState}
        onChange={changeDate}
      />
    </>
  );
};

export default CalendarComponent;
