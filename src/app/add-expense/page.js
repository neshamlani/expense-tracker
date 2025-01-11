"use client";

import { Box, Button, IconButton, TextField, Typography } from "@mui/material";
import React, { useState } from "react";
import ChevronLeftRoundedIcon from "@mui/icons-material/ChevronLeftRounded";
import { useRouter } from "next/navigation";
import dayjs from "dayjs";
import { addNewExpense } from "@/helper";

const AddExpense = () => {
  const router = useRouter();
  const today_date = dayjs();

  const [product, setProduct] = useState("");
  const [amount, setAmount] = useState("");
  const [description, setDescription] = useState("");

  return (
    <Box>
      <Box sx={{ display: "flex", alignItems: "center" }}>
        <IconButton
          size="large"
          sx={{ padding: 0, marginRight: "24px" }}
          onClick={() => router.back()}
        >
          <ChevronLeftRoundedIcon
            sx={{ fontSize: "40px", color: "text.secondary" }}
          />
        </IconButton>
        <Typography variant="h4" color="textSecondary">
          Add Expense
        </Typography>
      </Box>
      <Box
        sx={{
          margin: "16px 0",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Typography sx={{ fontWeight: 700 }}>
          Date:{" "}
          <Typography variant="caption" fontSize={"16px"} color="textSecondary">
            {today_date.format("DD-MMM-YYYY")}
          </Typography>
        </Typography>
        <Typography sx={{ fontWeight: 700 }}>
          Time:{" "}
          <Typography variant="caption" fontSize={"16px"} color="textSecondary">
            {today_date.format("HH:mm")}
          </Typography>
        </Typography>
      </Box>
      <TextField
        label={"Product"}
        fullWidth={true}
        autoFocus={true}
        value={product}
        onChange={({ target: { value } }) => setProduct(value)}
      />
      <TextField
        label={"Amount"}
        fullWidth={true}
        type="number"
        sx={{ margin: "16px 0" }}
        value={amount}
        onChange={({ target: { value } }) => setAmount(value)}
      />
      <TextField
        label={"Description (Optional)"}
        fullWidth={true}
        rows={3}
        maxRows={3}
        multiline
        value={description}
        onChange={({ target: { value } }) => setDescription(value)}
      />
      <Button
        variant="contained"
        fullWidth
        sx={{ marginTop: "16px" }}
        disabled={!product || !amount}
        onClick={() => {
          addNewExpense({ product, amount, description });
          router.back();
        }}
      >
        Add Expense
      </Button>
    </Box>
  );
};

export default AddExpense;
