import React, { useState } from "react";

const ExpenseForm = ({ HandleTheFormSubmit }) => {
  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState("");
  const [date, setDate] = useState("");
  const TitleChangeHandler = (e) => {
    setTitle(e.target.value);
  };
  const AmountChangeHandler = (e) => {
    setAmount(e.target.value);
  };
  const DateChangeHandler = (e) => {
    setDate(e.target.value);
  };
  const HandleFormSubmit = (e) => {
    e.preventDefault();
    if (!title && !amount && !date) return;
    const UpdateObject = {
      title,
      amount,
      date: new Date(date),
      key:Math.random()
    };
    setTitle("");
    setAmount("");
    setDate("");
    HandleTheFormSubmit(UpdateObject);
  };
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        textAlign: "center",
        margin: "2%",
      }}
    >
      <form onSubmit={HandleFormSubmit}>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            gap: "3%",
            margin: "1%",
          }}
          className="form-controls"
        >
          <div className="form-control">
            <label>Title</label>
            <input value={title} onChange={TitleChangeHandler} type="text" />
          </div>
          <div className="form-control">
            <label>amount</label>
            <input
              value={amount}
              onChange={AmountChangeHandler}
              type="number"
           
            />
          </div>
          <div className="form-control">
            <label>Date</label>
            <input
              value={date}
              onChange={DateChangeHandler}
              type="date"
              min="2019-08-19"
              max="2020-08-19"
            />
          </div>
        </div>
        <div className="submit">
          <button type="submit">Add Expense</button>
        </div>
      </form>
    </div>
  );
};
export default ExpenseForm;
