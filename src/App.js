import { useEffect, useState } from "react";
import "./App.css";
import {
  calculateTotal,
  eachTownTotalDatas,
  fetchRecords,
  groupBy,
} from "./utils";
import BarGraph from "./BarGraph";

function App() {
  const [datas, setDatas] = useState([]);

  useEffect(() => {
    fetchRecords();
  }, []);

  const fetchRecords = async () => {
    try {
      const response = await fetch("http://localhost:5000/api");
      const data = await response.json();
      setDatas(data);
    } catch (error) {
      console.error("Error fetching users:", error);
    }
  };

  const groupByName = groupBy(datas, "town-name");
  const totalofEachTown = eachTownTotalDatas(groupByName, "pre-sale", true);

  return (
    <div className="App">
      <div className="tableWrapper">
        {totalofEachTown.length > 0 ? (
          <table>
            <thead>
              <tr>
                <th>Town Name</th>
                <th>Pre Sale</th>
                <th>Average</th>
              </tr>
            </thead>
            <tbody>
              {totalofEachTown.map((item) => {
                return (
                  <tr key={item.townName}>
                    <td>{item.townName}</td>
                    <td>{item["pre-sale"]}</td>
                    <td>{item.avg}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        ) : (
          <p>No Record Found!</p>
        )}
        <BarGraph
          data={totalofEachTown}
          xAxis={"townName"}
          barKey={"pre-sale"}
          secondBarKey={"avg"}
          isSecondBar={false}
        />
      </div>
    </div>
  );
}

export default App;
