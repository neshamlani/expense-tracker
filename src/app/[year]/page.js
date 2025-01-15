"use client";

import React, { useState, useEffect } from "react";
import { useParams, useRouter, useSearchParams } from "next/navigation";
import { getMonthlyData } from "@/helper";
import { Box, IconButton, Typography } from "@mui/material";
import ExpenseCard from "@/components/ExpenseCard";
import Image from "next/image";
import ChevronLeftRoundedIcon from "@mui/icons-material/ChevronLeftRounded";

const MonthView = () => {
  const params = useParams();
  const search = useSearchParams();
  const year = params.year;
  const router = useRouter();
  const month = search.get("month");
  const [monthlyData, setMonthlyData] = useState([]);

  useEffect(() => {
    const data = getMonthlyData(year, month);
    setMonthlyData(data);
  }, []);

  return (
    <Box
      sx={{
        overflowY: "auto",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Box sx={{ display: "flex", alignItems: "center", marginBottom: "24px" }}>
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
          Monthly Expense
        </Typography>
      </Box>
      {monthlyData.length === 0 && (
        <Image
          src="/assets/empty.png"
          width={340}
          height={280}
          alt="Empty Image"
        />
      )}
      {monthlyData.map((expense) => (
        <ExpenseCard expense={expense} key={expense.time} />
      ))}
    </Box>
  );
};

export default MonthView;
