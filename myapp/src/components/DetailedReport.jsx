import avatar from "../assets/avatar.png";
import { Pencil } from "lucide-react";
import "../styles/DetailedReportStyle.css";
const DetailedReport = () => {
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
          <tr>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};
export default DetailedReport;
