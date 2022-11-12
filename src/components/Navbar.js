import "bootstrap/dist/css/bootstrap.min.css";
import fire from "../config/Fire";
import { Route, Routes, BrowserRouter, Link } from "react-router-dom";
import ExpenseTracker from "./expense/ExpenseTracker";
import logo from './logo.png'
import title from './title.png'


export default function NavBar() {
  const handleSignout = () => {
    // console.log("signout")
    fire.auth().signOut();
  };
  return (
    <div>
      <BrowserRouter>
        {/* <!-- Navbar --> */}
        {/* <!-- Navbar --> */}
        <nav className="shadow navbar navbar-expand-lg navbar-light bg-light">
          {/* <!-- Container wrapper --> */}
          <div className="container-fluid">
            {/* <!-- Toggle button --> */}
            <button
              className="navbar-toggler"
              type="button"
              data-mdb-toggle="collapse"
              data-mdb-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <i className="fas fa-bars"></i>
            </button>

            {/* <!-- Collapsible wrapper --> */}
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              {/* <!-- Navbar brand --> */}
              <Link className="navbar-brand mt-2 mt-lg-0" to="/">
                <img src={logo} alt="logo" width='60' />
                <img src={title} alt="title" width='170' className="mx-2"/>
              </Link>
              {/* <!-- Left links --> */}
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <Link className="nav-link" to="/">
                    Dashboard
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/ExpenseTracker">
                    Expenses
                  </Link>
                </li>
              </ul>
              {/* <!-- Left links --> */}
            </div>
            {/* <!-- Collapsible wrapper --> */}

            {/* <!-- Right elements --> */}
            <div className="d-flex align-items-center">
              {/* <!-- Icon --> */}
              <Link className="text-reset me-3" to="#">
                <i className="fas fa-shopping-cart"></i>
              </Link>

              <button onClick={handleSignout}>signout</button>
            </div>
            {/* <!-- Right elements --> */}
          </div>
          {/* <!-- Container wrapper --> */}
        </nav>
        {/* <!-- Navbar --> */}
        {/* <!-- Navbar --> */}
        <Routes>
          <Route path="/ExpenseTracker" element={<ExpenseTracker />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
