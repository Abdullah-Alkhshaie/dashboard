import { Cell, Pie, PieChart, ResponsiveContainer, Tooltip } from "recharts";
import "./piechartbox.scss";

const data = [
  {
    name: "Ali",
    value: 200,
    color: "#0088fe",
  },
  {
    name: "Saleh",
    value: 400,
    color: "#00x49f",
  },
  {
    name: "Amal",
    value: 300,
    color: "#ff8828",
  },
  {
    name: "Khaled",
    value: 200,
    color: "#ff8042",
  },
];

function PieChartBox() {
  return (
    <div className="piechartbox">
      <h1>Leads by Source</h1>
      <div className="chart">
        <ResponsiveContainer width="99%" height={300}>
          <PieChart>
            <Tooltip
              contentStyle={{ backgroundColor: "white", borderRadius: "5px" }}
            />
            <Pie
              data={data}
              innerRadius={"70"}
              outerRadius={"90"}
              fill="#8884d8"
              paddingAngle={5}
              dataKey="value"
            >
              {data.map((item) => (
                <Cell key={item.name} fill={item.color} />
              ))}
            </Pie>
          </PieChart>
        </ResponsiveContainer>
      </div>
      <div className="options">
        {data.map((item) => (
          <div className="option" key={item.name}>
            <div className="title">
              <div className="dot" style={{ backgroundColor: item.color }} />
              <span>{item.name}</span>
            </div>
            <span>{item.value}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default PieChartBox;
