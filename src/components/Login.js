import React from "react";



export default function Login() {
  const logo = require("../Images/logo.png");
  const title = require("../Images/title.png");
  const gif = require("../Images/login-page-gif.gif");

  const handleNewUser = () => {
    let x = document.getElementById('exist')
    let y = document.getElementById('newuser')

    y.style.display = "block"
    if (x.style.display === "none") {
        x.style.display = "block";
      } else {
        x.style.display = "none";
      }
    


  };

  return (
    <div>
      <section>
        <div >
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col-xl-9">
              <div className="rounded-3 text-black">
                <div className="row g-0">
                  <div className="col-lg-6">
                    <div className="card-body p-md-5 mx-md-4">
                      <div className="text-center">
                        <img src={logo} height="70" alt="logo" loading="lazy" />
                        <img
                          className="mx-2"
                          src={title}
                          height="80"
                          width="300"
                          alt="logo"
                          loading="lazy"
                        />
                      </div>

    {/* exisiting user */}
                      <form className="my-4 " id="exist">
                        <label className="form-label" for="form2Example11">
                          <b>Email ID</b>
                        </label>
                        <div className="form-outline mb-4">
                          <input
                            type="email"
                            id="form2Example11"
                            className="form-control"
                            placeholder="Enter your email ID"
                          />
                        </div>
                        <label className="form-label" for="form2Example22">
                          <b>Password</b>
                        </label>
                        <div className="form-outline mb-4">
                          <input
                            type="password"
                            id="form2Example22"
                            className="form-control"
                            placeholder="Enter your password"
                          />
                        </div>
                        <div className="text-center pt-1 mb-5 pb-1">
                          <button
                            className="btn btn-primary btn-block fa-lg gradient-custom-2 mb-3"
                            type="button"
                          >
                            Log in
                          </button>
                        </div>
                        <div className="d-flex align-items-center justify-content-center pb-4">
                          <p className="mb-0 me-2">Don't have an account?</p>
                          <button
                            type="button"
                            className="btn btn-outline-danger"
                            onClick={handleNewUser}
                          >
                            Create new
                          </button>
                        </div>
                      </form>

    {/* new user */}
                      <form className="my-4" id="newuser">
                      <label className="form-label" for="form2Example00">
                          <b>Name</b>
                        </label>
                        <div className="form-outline mb-4">
                          <input
                            type="name"
                            id="form2Example00"
                            className="form-control"
                            placeholder="Enter your name"
                          />
                          </div>
                        <label className="form-label" for="form2Example11">
                          <b>Email ID</b>
                        </label>
                        <div className="form-outline mb-4">
                          <input
                            type="email"
                            id="form2Example11"
                            className="form-control"
                            placeholder="Enter your email ID"
                          />
                        </div>
                        <label className="form-label" for="form2Example22">
                          <b>Password</b>
                        </label>
                        <div className="form-outline mb-4">
                          <input
                            type="password"
                            id="form2Example22"
                            className="form-control"
                            placeholder="Enter your password"
                          />
                        </div>
                        <div className="text-center pt-1 mb-5 pb-1">
                          <button
                            className="btn btn-primary btn-block fa-lg gradient-custom-2 mb-3"
                            type="button"
                          >
                            Create account
                          </button>
                        </div>
                      </form>



                    </div>
                  </div>
                  <div className="col-lg-6 d-flex align-items-center">
                    <div className="text-white px-4 py-4 p-md-6 md-2">
                      <img
                        src={gif}
                        alt="gif"
                        width="550"
                        height="550"
                        className="my-5"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
