import "./Navbar.scss";
import logo from "../../Files/Images/5773131.png"
import {BiX, BiMenu} from "react-icons/bi";
import { useState } from "react";
function Navbar() {
  const [ShowNavModal, setShowNavModal] = useState("hide");
    return (
      <>
      <div className="Navbar">
        <div className="wrapper">
          <div className="left">
            <div className="logo">
              <img src={logo} alt="" />
              <h3>Liteshoper</h3>
            </div>
          </div>
          <div className="right">
            <ul>
              <li>Home</li>
              <li>About us</li>
              <li>Services</li>
              <li>Features</li>
              <li>Team</li>
              <li>Contact us</li>
              <li>Faq</li>
            </ul>
            <button className="signin">sign in</button>
            <div className="toggle" onClick={()=>setShowNavModal("show")}><i><BiMenu/></i></div>
          </div>
        </div>
      </div>

      {ShowNavModal==="show" ? <>
        <div className="navbar-modal">
          <div className="header">
            <div className="toggle" onClick={()=>setShowNavModal("hide")}><i><BiX/></i></div>
          </div>
          <div className="body">
            <ul>
              <li>Home</li>
              <li>About us</li>
              <li>Services</li>
              <li>Features</li>
              <li>Team</li>
              <li>Contact us</li>
              <li>Faq</li>
            </ul>
          </div>
          <div className="footer">
            <button className="signin">sign in</button> 
            <br />
            <button className="signup">sign up</button>
          </div>
        </div>
      </> : ""
      }
      </>
    );
  }
export default Navbar;