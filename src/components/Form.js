import React from 'react'

const Form = () => {
  return (
    <div className="row">
        <div className="col-lg-6 d-none d-lg-block bg-login-image"></div>
        <div className="col-lg-6">
            <div className="p-5">
                <div className="text-center">
                    <h1 className="h4 text-gray-900 mb-4">Welcome Back Admin</h1>
                </div>
                <form className="user">
                    <div className="form-group">
                        <input type="email" className="form-control form-control-user"
                            id="exampleInputEmail" aria-describedby="emailHelp"
                            placeholder="Enter Email Address..."></input>
                    </div>
                    <div className="form-group">
                        <input type="password" className="form-control form-control-user"
                            id="exampleInputPassword" placeholder="Password"></input>
                    </div>
                    <div className="form-group">
                        <div className="custom-control custom-checkbox small">
                            <input type="checkbox" className="custom-control-input" id="customCheck"></input>
                            <label className="custom-control-label" htmlFor="customCheck">Remember
                                Me</label>
                        </div>
                    </div>
                    <a href="index.html" className="btn btn-primary btn-user btn-block">
                        Login
                    </a>
                    <hr />
                </form>
                <hr />
            </div>
        </div>
    </div>
  )
}

export default Form