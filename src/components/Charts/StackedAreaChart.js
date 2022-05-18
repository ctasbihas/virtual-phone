import React, { useEffect, useState } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend
} from "recharts";

const StackedAreaChart = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch('data.json')
      .then(res => res.json())
    .then(data => setData(data))
  }, []);
  return (
    <LineChart
      width={500}
      height={300}
      data={data}
      margin={{
        top: 5,
        right: 30,
        left: 20,
        bottom: 5
      }}
    >
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="month" />
      <YAxis />
      <Tooltip />
      <Legend />
      <Line type="monotone" dataKey="sell" stroke="#8884d8" />
      <Line type="monotone" dataKey="investment" stroke="#82ca9d" />
      <Line type="monotone" dataKey="revenue" stroke="#82ca9d" />
    </LineChart>
  );
}

export default StackedAreaChart;