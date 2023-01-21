import { useState } from "react";
import CalendarComponent from "../components/Calendar";
import NavigationBar from "../components/Navbar";
import DiaryEntryCard from "../components/DiaryEntryCard";
import "../styles/dashboard.css";

const Dashboard = () => {
  const [Visibility, setVisibile] = useState("false");
  const setVisibility = () => {
    if (Visibility === true) {
      setVisibile(false);
    } else {
      setVisibile(true);
    }
  };

  return (
    <div>
      <NavigationBar
        CalenderVisibility={setVisibility}
        Visibility={Visibility}
      />
      <CalendarComponent CalenderVisibile={Visibility} />
      <div className="container" style={{ height: "100vh" }}>
        <DiaryEntryCard />
      </div>
    </div>
  );
};

export default Dashboard;
