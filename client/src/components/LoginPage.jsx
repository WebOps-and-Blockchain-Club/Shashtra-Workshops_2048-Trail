import React from "react";

function LoginPage() {
  return (
    <>
      <div
        className="container-fluid py-4 my-auto  rounded text-white"
        style={{ height: "100vh", width: "100vw" }}
      >
        <div className="row">
          <div className="col-lg-8 col-sm-0">
            <img
              src="https://rare-gallery.com/uploads/posts/563261-background-blank.jpg"
              className="img-fluid rounded mx-0 my-0 border border-light"
              alt="..."
              style={{ height: "80vh" }}
            />
          </div>
          <div className="col-lg-4 col-sm-6">
            <div className="my-auto">
              <form>
                <div className="mb-3">
                  <label for="exampleInputEmail" className="form-label">
                    <strong>Email address</strong>
                  </label>
                  <input
                    type="email"
                    className="form-control rounded border-white"
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                  />
                  <div id="emailHelp" className="form-text text-white">
                    We'll never share your email with anyone else.
                  </div>
                </div>
                <div className="mb-3">
                  <label for="exampleInputPassword1" className="form-label">
                    <strong>Password</strong>
                  </label>
                  <input
                    type="password"
                    className="form-control"
                    id="exampleInputPassword1"
                  />
                </div>
                <button type="submit" className="btn btn-outline-light">
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default LoginPage;
