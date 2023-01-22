import React, { useState } from "react";
import { useLocation } from "wouter";
import NavigationBar from "../components/Navbar";

function LoginPage() {

  const navigate = useLocation()[1]
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const handleSubmit = (e) => {
    e.preventDefault()
    if (email === "" || password === "")
      return alert("Please fill all the fields")
    const data = {
      email: email,
      password: password
    }
    fetch("http://localhost:8000/auth/signin", {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json"
      }
    })
      .then(res => res.json())
      .then(data => {
        localStorage.setItem("token", data.jwtToken);
        navigate("/dashboard")
      })
      .catch(err => alert("Error: Cannot login"))
  }

  return (
    <>
      <NavigationBar />
      <div
        className="container-fluid py-4 my-auto  rounded text-white"
        style={{ height: "90vh", width: "100vw" }}
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
            <div className="my-auto text-black py-5">
              <div>
                <h2 className="py-2">Welcome to "The Diary App" !</h2>
                <h3 className="py-2">Login to get started🚀</h3>
              </div>
              <form>
                <div className="mb-3">
                  <label for="exampleInputEmail" className="form-label text-secondary">
                    <strong>Email address</strong>
                  </label>
                  <input
                    type="email"
                    className="form-control rounded"
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                    onChange={(e) => setEmail(e.target.value)}
                  />
                  <div id="emailHelp" className="form-text text-secondary">
                    We'll never share your email with anyone else.
                  </div>
                </div>
                <div className="mb-3">
                  <label for="exampleInputPassword1" className="form-label text-secondary">
                    <strong>Password</strong>
                  </label>
                  <input
                    type="password"
                    className="form-control"
                    id="exampleInputPassword1"
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div>
                <button type="submit" className="btn btn-secondary" onClick={handleSubmit}>
                  Login
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
