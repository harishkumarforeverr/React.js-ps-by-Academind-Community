import React, { useEffect, useState } from "react";
import ExpenseItem from "./Expenses/ExpenseItem";
import ExpenseForm from "./ExpenseForm/ExpenseForm";
import NewExpense from "./NewExpense/NewExpense";
import ExpenseFilter from "./ExpenseFilter/ExpenseFilter";
import ExpenseList from "./Expenses/ExpenseList";
import ExpenseChart from "./ExpenseChart/ExpenseChart";
import CreatePortal from "../ceate Portal/createPortal";
let DUMMY_DATA = [
  {
    title: "React",
    amount: "4000",
    date: new Date(2022, 8, 28),
    key: Math.random(),
  },
  {
    title: "Angukar",
    amount: "200",
    date: new Date(2021, 2, 2),
    key: Math.random(),
  },
  {
    title: "Java",
    amount: "3000",
    date: new Date(2020, 11, 10),
    key: Math.random(),
  },
];
const ExpenseApp = () => {
  const [modelVisible, setmodelVisible] = useState(false);
  const [FilterDate, setFilterDate] = useState("");
  const [Expense, setExpense] = useState(DUMMY_DATA);
  const FilterDateHandler = (value) => {
    setFilterDate(value);
  };
  const HandleTheFormSubmit = (formDate) => {
    // console.log(formDate);
    new Promise((res, rej) => {
      setmodelVisible(true);
      setTimeout(() => {
        setExpense((prevSnapshot) => [formDate, ...prevSnapshot]);

        res();
      }, 500);
    }).then(() => {
      setmodelVisible(false);
    });
  };
  useEffect(() => {
    // console.log(Expense);
  }, [Expense]);
  useEffect(() => {
    if (FilterDate) {
      const newObject = DUMMY_DATA.filter(({ date }) => {
        return date.getFullYear().toString() === FilterDate;
      });
      setExpense(newObject);
    } else {
      // console.log(DUMMY_DATA);
      setExpense(DUMMY_DATA);
    }
  }, [FilterDate]);
  return (
    <div>
      {modelVisible === true && (
        <>
          <CreatePortal />
        </>
      )}

      <div>
        <NewExpense HandleTheFormSubmit={HandleTheFormSubmit} />
      </div>
      <div>
        <div className="expenseFilter">
          <h1>expene filter</h1>
          <ExpenseFilter
            FilterDate={FilterDate}
            setFilterDate={FilterDateHandler}
          />
        </div>
      </div>
      <div>
        <ExpenseChart Expense={Expense} />
      </div>
      <ExpenseList Expense={Expense} />
    </div>
  );
};

export default ExpenseApp;
