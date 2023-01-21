const NavigationBar = (props) => {
  return (
    <nav
      className="navbar navbar-expand-lg bg-dark text-light"
      data-bs-theme="dark"
    >
      <div className="container-fluid text-light">
        <a className="navbar-brand text-light" href="/">
          Navbar
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a
                className="nav-link active text-light"
                aria-current="page"
                href="/"
              >
                Home
              </a>
            </li>
            <li className="nav-item ">
              <button
                className="btn btn-outline-light"
                onClick={props.CalenderVisibility}
              >
                {props.Visibility === true ? "hide" : "show"} calendar
              </button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavigationBar;
