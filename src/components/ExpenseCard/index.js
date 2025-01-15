import { Box, Typography } from "@mui/material";
import React from "react";

const ExpenseCard = ({ expense }) => {
  console.log("expense", expense);
  return (
    <Box
      sx={{
        width: "100%",
        padding: "16px",
        backgroundColor: "primary.contrastText",
        borderRadius: "10px",
        marginBottom: "16px",
      }}
    >
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          marginBottom: "10px",
        }}
      >
        <Typography variant="h6">{expense.product}</Typography>
        <Typography variant="h6">
          ₹ {(+expense.amount).toLocaleString()} /-
        </Typography>
      </Box>
      <Typography variant="body1" color="textSecondary">
        Date: {expense.date}, Time: {expense.time}
      </Typography>
      <Typography variant="body1" color="textSecondary">
        {expense.description}
      </Typography>
    </Box>
  );
};

export default ExpenseCard;
