import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";

export default function BarGraph(props) {
  const { data, xAxis, barKey, secondBarKey, isSecondBar } = props;
  return (
    <BarChart
      width={500}
      height={300}
      data={data}
      margin={{
        top: 5,
        right: 30,
        left: 20,
        bottom: 5,
      }}
    >
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey={xAxis} />
      <YAxis />
      <Tooltip shared={false} trigger="click" />
      <Legend />
      <Bar dataKey={barKey} fill="#8884d8" />
      {isSecondBar && <Bar dataKey={secondBarKey} fill="#82ca9d" />}
    </BarChart>
  );
}
