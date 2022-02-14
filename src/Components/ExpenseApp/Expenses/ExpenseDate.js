import React from "react";

const ExpenseDate = (props) => {
  const month = props.date.toLocaleString("en-US", { month: "long" });
  const day = props.date.toLocaleString("en-US", { day: "2-digit" });
  const year = props.date.getFullYear();
  return (
    <div>
      <div>
        <h2>
          <span>{month}</span>
          <br />
          <span>{day}</span>
          <br />
          <span>{year}</span>
          <br />
        </h2>
      </div>
    </div>
  );
};
export default ExpenseDate;
