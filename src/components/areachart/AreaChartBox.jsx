import "./areachartbox.scss";
import { AreaChart, Area, ResponsiveContainer } from "recharts";

const data = [
  {
    name: "Page J",
    uv: 800,
    pv: 200,
    amt: 200,
  },
  {
    name: "Page K",
    uv: 1000,
    pv: 300,
    amt: 300,
  },
  {
    name: "Page L",
    uv: 1200,
    pv: 400,
    amt: 400,
  },
  {
    name: "Page J",
    uv: 800,
    pv: 200,
    amt: 200,
  },
  {
    name: "Page K",
    uv: 1000,
    pv: 300,
    amt: 300,
  },
  {
    name: "Page L",
    uv: 1200,
    pv: 400,
    amt: 400,
  },
  {
    name: "Page A",
    uv: 1000,
    pv: 200,
    amt: 200,
  },
  {
    name: "Page B",
    uv: 1500,
    pv: 800,
    amt: 800,
  },
  {
    name: "Page C",
    uv: 2000,
    pv: 1200,
    amt: 1200,
  },
  {
    name: "Page D",
    uv: 4000,
    pv: 3500,
    amt: 3500,
  },
  {
    name: "Page E",
    uv: 5000,
    pv: 4200,
    amt: 4200,
  },
  {
    name: "Page F",
    uv: 3000,
    pv: 1800,
    amt: 1800,
  },
  {
    name: "Page G",
    uv: 3500,
    pv: 2200,
    amt: 2200,
  },
  {
    name: "Page H",
    uv: 2000,
    pv: 800,
    amt: 800,
  },
  {
    name: "Page I",
    uv: 1200,
    pv: 400,
    amt: 400,
  },
  {
    name: "Page J",
    uv: 800,
    pv: 200,
    amt: 200,
  },
  {
    name: "Page K",
    uv: 1000,
    pv: 300,
    amt: 300,
  },
  {
    name: "Page L",
    uv: 1200,
    pv: 400,
    amt: 400,
  },
  {
    name: "Page J",
    uv: 800,
    pv: 200,
    amt: 200,
  },
  {
    name: "Page K",
    uv: 1000,
    pv: 300,
    amt: 300,
  },
  {
    name: "Page L",
    uv: 1200,
    pv: 400,
    amt: 400,
  },
  {
    name: "Page M",
    uv: 1800,
    pv: 400,
    amt: 400,
  },
  {
    name: "Page N",
    uv: 2200,
    pv: 600,
    amt: 600,
  },
  {
    name: "Page O",
    uv: 2500,
    pv: 800,
    amt: 800,
  },
  // Small Mountain 3
  {
    name: "Page P",
    uv: 3000,
    pv: 1000,
    amt: 1000,
  },
  {
    name: "Page Q",
    uv: 3500,
    pv: 1200,
    amt: 1200,
  },
  {
    name: "Page R",
    uv: 4000,
    pv: 1500,
    amt: 1500,
  },
  {
    name: "Page J",
    uv: 800,
    pv: 200,
    amt: 200,
  },
  {
    name: "Page K",
    uv: 1000,
    pv: 300,
    amt: 300,
  },
  {
    name: "Page L",
    uv: 1200,
    pv: 400,
    amt: 400,
  },
];

const AreaChartBox = ({ color }) => {
  return (
    <div className="area-chart-box">
      <ResponsiveContainer width="100%" height="99%">
        <AreaChart
          width={200}
          height={60}
          data={data}
          margin={{
            top: 5,
            right: 0,
            left: 0,
            bottom: 5,
          }}
        >
          <Area type="monotone" dataKey="uv" stroke={color} fill={color} />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
};

export default AreaChartBox;
