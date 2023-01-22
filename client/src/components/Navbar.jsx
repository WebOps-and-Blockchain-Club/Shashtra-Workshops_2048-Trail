import { useState } from "react";
import Button from "react-bootstrap/Button"

const NavigationBar = (props) => {

  const isLoggedIn = useState(localStorage.getItem("token") !== null ? true : false)[0]

  const handleLogout = () => {
    localStorage.removeItem("token")
    window.location.reload()
  }

  const LogoutButton = () => {
    return (
      <Button variant="outline-light" onClick={handleLogout}>
        Logout
      </Button>
    )
  }

  return (
    <nav
      className="navbar navbar-expand-lg bg-dark text-light"
      data-bs-theme="dark"
    >
      <div className="container-fluid text-light">
        <a className="navbar-brand text-light" href={isLoggedIn ? "/dashboard" : "/"}>
          The Diary App
        </a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbar">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbar">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item ">
            </li>
          </ul>
          {isLoggedIn ? <LogoutButton /> : null}
        </div>
      </div>
    </nav>
  );
};

export default NavigationBar;
