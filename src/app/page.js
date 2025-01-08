"use client";

import { Box, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { MobileDatePicker } from "@mui/x-date-pickers/MobileDatePicker";
import dayjs from "dayjs";
import { getMonthsInYear } from "@/helper";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import ExpenseProgress from "@/components/ExpenseProgess";

const Home = () => {
  const [year, setYear] = useState(dayjs().year());
  const [monthList, setMonthList] = useState([]);

  useEffect(() => {
    if (year) {
      const list = getMonthsInYear(year);
      setMonthList(list);
    }
  }, []);

  const handleYearChange = (year) => {
    const currentYear = dayjs(year).year();
    const list = getMonthsInYear(currentYear);
    setYear(currentYear);
    setMonthList(list);
  };

  console.log("monthList", monthList);
  return (
    <Box>
      <Typography variant="h4" textAlign={"center"} color="textSecondary">
        Expense Tracker
      </Typography>
      <ExpenseProgress />
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          marginTop: "24px",
          alignItems: "center",
        }}
      >
        <Typography color="textSecondary">Select Date</Typography>
        <MobileDatePicker
          views={["year"]}
          defaultValue={dayjs()}
          disableFuture={true}
          closeOnSelect={true}
          onYearChange={handleYearChange}
          sx={{
            width: "100px",
            "& .MuiOutlinedInput-input": { padding: "8px", fontSize: "16px" },
          }}
        />
      </Box>
      <Box
        sx={{
          marginTop: "24px",
        }}
      >
        <List>
          {monthList.map((month) => (
            <ListItem
              disablePadding
              key={month}
              sx={{
                backgroundColor: "primary.contrastText",
                borderRadius: "10px",
                color: "primary.main",
              }}
            >
              <ListItemButton sx={{ borderRadius: "10px" }}>
                <ListItemText primary={month} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Box>
    </Box>
  );
};

export default Home;
