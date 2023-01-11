import React from 'react'

function LoginPage() {
    
  return (
    <>
    <div className="container-fluid py-4 my-auto gradient rounded text-white" >
        <div className="row">
                <div className="col-lg-8 col-sm-6">
                        <img src="https://images.unsplash.com/photo-1617575521317-d2974f3b56d2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80" className="img-fluid rounded mx-0 my-0"   alt="..."/>
                </div>
                <div className="col-lg-4 col-sm-6">
                    <div className="my-auto">
                         <form>
                                <div className="mb-3">
                                    <label for="exampleInputEmail1" className="form-label"><strong>Email address</strong></label>
                                    <input type="email" className="form-control rounded border-white" id="exampleInputEmail1" aria-describedby="emailHelp"/>
                                    <div id="emailHelp" className="form-text text-white">We'll never share your email with anyone else.</div>
                                </div>
                                <div className="mb-3">
                                    <label for="exampleInputPassword1" className="form-label"><strong>Password</strong></label>
                                    <input type="password" className="form-control" id="exampleInputPassword1"/>
                                </div>
                                <button type="submit" className="btn btn-outline-light">Submit</button>
                        </form>
                    </div>
                </div>
        </div>
    </div>
    </>
  )
}

export default LoginPage
