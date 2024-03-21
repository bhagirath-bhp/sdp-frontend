import { ReactElement, useEffect, useState } from "react";
import { Cell, Pie, PieChart, ResponsiveContainer, Tooltip } from "recharts";
import "./pieChartBox.scss";
import { InventoryProducts } from "../../data";

const PieChartBox = () => {
  const [data, setData] = useState<
    { id: string; name: string; value: number; color: string }[]
  >([]);
  // const [cellsContainer, setCellsContainer] = useState<ReactElement[]>();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setData(InventoryProducts);
      setLoading(false);
      console.log(InventoryProducts)
    }, 1000);
  }, []);
  // useEffect(()=>{
  //   console.log("first")
  //   const cellsContainer = data.map((item: {id: string, name: string, color: string}) => (
  //     <Cell key={item.id} fill={item.color} />
  //   ))
  //   setCellsContainer(cellsContainer);
  // }, [data])
  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="pieChartBox">
      <h1>Inventory Analytics</h1>
      <div className="chart">
        <ResponsiveContainer width="99%" height={300}>
          <PieChart>
            <Tooltip
              contentStyle={{ background: "white", borderRadius: "5px" }}
            />
            <Pie
              data={data}
              innerRadius={"70%"}
              outerRadius={"90%"}
              paddingAngle={5}
              dataKey="value"
            >
              {data.map((item: { id: string; name: string; color: string }) => (
                <Cell key={item.name} fill={item.color} />
              ))}
            </Pie>
          </PieChart>
        </ResponsiveContainer>
      </div>
      <div className="options">
        {data.map(
          (item: { id: string; name: string; color: string; value: any }) => (
            <div className="option" key={item.id}>
              <div className="title">
                <div className="dot" style={{ backgroundColor: item.color }} />
                <span>{item.name}</span>
              </div>
              <span>{item.value}</span>
            </div>
          )
        )}
      </div>
    </div>
  );
};

export default PieChartBox;
