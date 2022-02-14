import React from "react";
import ExpenseItem from "./ExpenseItem";

const ExpenseList = ({ Expense }) => {
  if (Expense.length === 0) {
    return <p> No valable Records founds</p>;
  }
  return (
    <ol>
      {Expense.map(({ title, amount, date, key }) => (
        <ExpenseItem title={title} amount={amount} date={date} key={key} />
      ))}
    </ol>
  );
};
export default ExpenseList;
