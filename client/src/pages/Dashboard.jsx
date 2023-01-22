import { useState } from "react";
import DiaryModal from "../components/DiaryModal";
import Quote from "../components/Quote";
import CalendarComponent from "../components/Calendar";
import NavigationBar from "../components/Navbar";
import Button from "react-bootstrap/Button"
import "../styles/dashboard.css";
import { useLocation } from "wouter";

const Dashboard = () => {
  // const [Visibility, setVisibile] = useState(true);
  // const setVisibility = () => {
  //   if (Visibility === true) {
  //     setVisibile(false);
  //   } else {
  //     setVisibile(true);
  //   }
  // };

  const [show, setShow] = useState(false);
  const [modalContent, setModalContent] = useState({ content: [], message: "" });
  const navigate = useLocation()[1]

  return (
    <div>
      <NavigationBar
      // CalenderVisibility={setVisibility}
      // Visibility={Visibility}
      />
      <div className="main-container">
        <div className="row sub-container">
          <div className="col-md-6 entry-content text-center">
            <h2 className="p-3">Have you written your diary for today? 😄</h2>
            <Button className="btn btn-secondary" onClick={() => navigate("/diary")}>Write your Diary</Button>
          </div>
          <div className="col-md-6 quote-content">
            <Quote />
          </div>
        </div>
        <div className="calendar-content">
          <CalendarComponent
            // CalenderVisibile={Visibility} 
            setModalShow={setShow}
            setModalContent={setModalContent}
          />
        </div>
        <DiaryModal showModal={show} setModalShow={setShow} entry={modalContent} setModalContent={setModalContent} />
      </div>
    </div>
  );
};

export default Dashboard;
