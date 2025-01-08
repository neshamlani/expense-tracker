import dayjs from "dayjs";
import { months } from "./constants";

export const createEmpty = () => {
  let date_data = localStorage.getItem("expense");
  let balance = localStorage.getItem("balance");
  if (date_data || balance) return;
  const today = dayjs();
  const dummyDate = {};
  dummyDate[today.year()] = {};
  dummyDate[today.year()][today.month()] = {};
  localStorage.setItem("expense", JSON.stringify(dummyDate));
  localStorage.setItem("balance", 85500);
  localStorage.setItem("expenses", 0);
};

export const getMonthsInYear = (year) => {
  const data = JSON.parse(localStorage.getItem("expense"));
  const monthKeys = Object.keys(data.hasOwnProperty(year) ? data[year] : []);
  return monthKeys.map((key) => months[key]);
};
