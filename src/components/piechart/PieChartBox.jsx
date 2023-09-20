import "./piechartbox.scss";
import { PieChart, Pie, Cell } from "recharts";

const RADIAN = Math.PI / 180;

const cx = 70;
const cy = 100;
const iR = 40;
const oR = 60;
const value = 50;

const PieChartBoxBlue = ({ color, text, value1, value2 }) => {
  const data = [
    { name: "A", value: value1, color },
    { name: "B", value: value2, color: "#F5F5F5" },
  ];
  const needle = (value, data, cx, cy, iR, oR, color) => {
    let total = 0;
    data.forEach((v) => {
      total += v.value;
    });
    const ang = 180.0 * (1 - value / total);
    const length = (iR + oR) / 2;
    const sin = Math.sin(-RADIAN * ang);
    const cos = Math.cos(-RADIAN * ang);
    const r = 5;
    const x0 = cx + 5;
    const y0 = cy + 5;
    const xba = x0 + r * sin;
    const yba = y0 - r * cos;
    const xbb = x0 - r * sin;
    const ybb = y0 + r * cos;
    const xp = x0 + length * cos;
    const yp = y0 + length * sin;

    return [
      <circle cx={x0} cy={y0} r={r} fill={color} stroke="none" />,
      <path
        d={`M${xba} ${yba}L${xbb} ${ybb} L${xp} ${yp} L${xba} ${yba}`}
        stroke="#none"
        fill={color}
      />,
    ];
  };
  return (
    <div className="pie-chart-box">
      <div className="pie-chart-box--text">{text}</div>
      <PieChart width={150} height={150}>
        <Pie
          dataKey="value"
          startAngle={220}
          endAngle={-40}
          data={data}
          cx={cx}
          cy={cy}
          innerRadius={iR}
          outerRadius={oR}
          fill="#8884d8"
          stroke="none"
        >
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={entry.color} />
          ))}
        </Pie>
        {needle(value, data, cx, cy, iR, oR, "#000")}
      </PieChart>
    </div>
  );
};

export default PieChartBoxBlue;
