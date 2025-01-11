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
import Fab from "@mui/material/Fab";
import AddIcon from "@mui/icons-material/Add";
import { useRouter } from "next/navigation";
import Image from "next/image";

const Home = () => {
  const [year, setYear] = useState(dayjs().year());
  const [monthList, setMonthList] = useState([]);
  const router = useRouter();

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

  return (
    <Box
      sx={{
        position: "relative",
        height: "calc(100vh - 48px)",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Box sx={{ flex: 1 }}>
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
      </Box>

      <Box
        sx={{
          flex: 2,
          overflowY: "auto",
          display: monthList.length === 0 ? "flex" : "block",
          alignItems: monthList.length === 0 ? "center" : "start",
        }}
      >
        {monthList.length === 0 && (
          <Image
            src="/assets/empty.png"
            width={340}
            height={280}
            alt="Empty Image"
          />
        )}
        <List>
          {monthList.map((month) => (
            <ListItem
              disablePadding
              key={month.id}
              sx={{
                backgroundColor: "primary.contrastText",
                borderRadius: "10px",
                color: "primary.main",
                marginBottom: "16px",
              }}
              onClick={() => router.push(`/${year}?month=${month.id}`)}
            >
              <ListItemButton sx={{ borderRadius: "10px" }}>
                <ListItemText primary={month.name} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Box>

      <Box
        sx={{
          position: "absolute",
          bottom: 0,
          right: 0,
        }}
      >
        <Fab
          color="primary"
          aria-label="add"
          onClick={() => router.push("/add-expense")}
        >
          <AddIcon />
        </Fab>
      </Box>
    </Box>
  );
};

export default Home;
