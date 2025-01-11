import dayjs from "dayjs";
import { months } from "./constants";

export const createEmpty = () => {
  let date_data = localStorage.getItem("expense");
  let balance = localStorage.getItem("balance");
  if (date_data || balance) return;
  const today = dayjs();
  const dummyDate = {};
  dummyDate[today.year()] = [];
  localStorage.setItem("expense", JSON.stringify(dummyDate));
  localStorage.setItem("balance", 85500);
  localStorage.setItem("expenses", 0);
};

export const getMonthsInYear = (year) => {
  const currYear = dayjs().year();
  const month = dayjs().month();
  if (+year === currYear) {
    return months.slice(0, month + 1);
  }
  return months;
};

export const getMonthlyData = (year, month) => {
  var data = JSON.parse(localStorage.getItem("expense"));
  const currYear = data[year] || [];
  return currYear.filter((yearData) => yearData.month === +month);
};

const generateNewData = ({ product, amount, description = "" }) => {
  const today_date = dayjs();

  return {
    product,
    amount,
    description,
    time: today_date.format("HH:mm:ss"),
    date: today_date.format("DD-MM-YY"),
    month: today_date.month(),
  };
};

export const addNewExpense = (expense) => {
  var data = JSON.parse(localStorage.getItem("expense"));
  const currExpenses = +localStorage.getItem("expenses");
  const today_date = dayjs();
  const year = today_date.year();
  const currYear = data[year] || [];

  const newData = generateNewData(expense);

  data = {
    [year]: [...currYear, newData],
  };

  localStorage.setItem("expense", JSON.stringify(data));
  localStorage.setItem("expenses", currExpenses + +expense.amount);
};
