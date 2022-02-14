import React, { useState } from "react";
import ExpenseDate from "./ExpenseDate";
import ExpenseFilter from "../ExpenseFilter/ExpenseFilter";
import "./ExpenseItem.scss";

const ExpenseItem = (props) => {

  return (
    <li> 
      <div className="ExpenseItem">
        <ExpenseDate date={props.date} />
        <div>
          {" "}
          <h1>{props.title} </h1>
        </div>
        <div>
          <h3>{props.amount}</h3>
        </div>
      </div>
      <hr />
    </li>
  );
};
export default ExpenseItem;
