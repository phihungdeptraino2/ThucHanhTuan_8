import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Sidebar from "./components/Sidebar";
import Header from "./components/Header";
import OverView from "./components/OverView.jsx";
import DetailedReport from "./components/DetailedReport.jsx";
function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="grid-container">
      <Sidebar />
      <main className="main-content">
        <Header />
        <OverView></OverView>

        <DetailedReport />
      </main>
    </div>
  );
}

export default App;
