"use client";

import json from "@/app/api/tickets.json";
import { Pie, PieChart, LabelList } from "recharts";
import { RechartsDevtools } from "@recharts/devtools";

export default function PrioPieChart({ isAnimationActive = true }) {
  const stats = json.stats;

  const data = [
    { name: "P1", value: 3, fill: "#FF5733" }, // Red-Orange for critical
    { name: "P2", value: 7, fill: "#FFBB28" }, // Yellow for high
    { name: "P3", value: 20, fill: "#00C49F" }, // Green for medium
    { name: "P4", value: 20, fill: "#8884D8" }, // Purple for low
  ];

  return (
    <PieChart
      style={{
        width: "100%",
        height: "100%",
        maxWidth: "400px",
        maxHeight: "400px",
        aspectRatio: 1,
      }}
      responsive
    >
      <Pie
        data={data}
        label={(entry) => entry.name}
        // labelLine={false}
        innerRadius="65%"
        outerRadius="80%"
        // Corner radius is the rounded edge of each pie slice
        cornerRadius="50%"
        fill="#8884d8"
        // padding angle is the gap between each pie slice
        paddingAngle={5}
        dataKey="value"
        isAnimationActive={isAnimationActive}
      >
        {/* <LabelList fill="black" datakey="name" position="inside" /> */}
      </Pie>
      <RechartsDevtools />
    </PieChart>
  );
}
