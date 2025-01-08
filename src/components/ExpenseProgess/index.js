import { Box, LinearProgress, Typography } from "@mui/material";
import React, { useState, useEffect } from "react";

const ExpenseProgress = () => {
  const [balance, setBalance] = useState(0);
  const [expenses, setExpenses] = useState(0);

  useEffect(() => {
    const currBalance = +localStorage.getItem("balance");
    const currExpenses = +localStorage.getItem("expenses");
    setBalance(currBalance);
    setExpenses(currExpenses);
  }, []);

  const calculatePercentage = () => {
    if (balance === 0) return 0;
    return Math.round((expenses * 100) / balance);
  };

  return (
    <Box sx={{ padding: "30px 0" }}>
      <Typography variant="h6" sx={{ marginBottom: "6px" }}>
        ₹ {balance} /-
      </Typography>
      <LinearProgress value={calculatePercentage()} variant="determinate" />
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginTop: "6px",
        }}
      >
        <Typography color="textSecondary" variant="body1">
          Expenses: ₹ {expenses} /-
        </Typography>
        <Typography color="textSecondary" variant="body1">
          Remaining: ₹ {balance - expenses} /-
        </Typography>
      </Box>
    </Box>
  );
};

export default ExpenseProgress;
