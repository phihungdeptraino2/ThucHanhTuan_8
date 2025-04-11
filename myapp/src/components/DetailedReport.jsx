import avatar from "../assets/avatar.png";
import { Pencil } from "lucide-react";
import "../styles/DetailedReportStyle.css";
import { useEffect, useState } from "react";
const DetailedReport = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch("http://localhost:3001/report")
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);
  return (
    <div className="table-container">
      <table>
        <thead>
          <tr>
            <th></th>
            <th> CustomerName</th>
            <th>Company</th>
            <th>OrderValue</th>
            <th>OrderDate</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => (
            <tr>
              <td className="check-box">
                <input type="checkbox" />
              </td>

              <td>
                <div className="section">
                  <img src={avatar} alt="" className="image" />
                  {item.name}
                </div>
              </td>
              <td>{item.company}</td>
              <td>{item.value}</td>
              <td>{item.date}</td>
              <td className={`status-${item.status.toLowerCase()}`}>
                {item.status}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
export default DetailedReport;
