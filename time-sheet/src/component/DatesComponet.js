import React, { useEffect, useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

import DateRange from "./TimeSheet";
function DatesComponet(props) {
  const [startDate, setStartDate] = useState(new Date());
  const [array, setArray] = useState([]);
  const monthNames = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];

  const dateMonth = new Array();
  useEffect(() => {
    const current = startDate;
    dateMonth.length = 0;
    for (let i = 0; i < 7; i++) {
      let date = current.getDate() + i + "";
      date = date > 31 ? date.concat("").replace("3", "") : date;
      dateMonth.push(date + " " + monthNames[current.getMonth() + 1]);
    }
    setArray(dateMonth);
  }, [startDate]);
  function rend() {}
  return (
    <>
      <DatePicker
        selected={startDate}
        onChange={(date) => setStartDate(date)}
        dateFormat="dd/MM/yyyy"
      />
      <div style={{ display: "flex" }}>
        {array.map((a) => (
          <div>
            <h6>{a}</h6>
          </div>
        ))}
      </div>
    </>
  );
}

export default DatesComponet;
