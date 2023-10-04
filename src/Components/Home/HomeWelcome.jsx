import "./HomeWelcome.scss";
import logo from "../../Files/Images/mobiles-copyright.png"
function HomeWelcome() {
    return (
      <div className="HomeWelcome nth-bg2">
        <div className="wrapper">
            <div className="row details">
                <h1 className="nth-cl">Build and manage your online store with Liteshoper</h1>
                <p>No matter what type of business you run, liteshoper allows you to get your business online in minutes with your smart phone or computer for free.</p>
                <button className="signup">Get Started</button>
                <div className="counter">
                  <div className="box">
                    <h1>1,276.5+</h1>
                    <span></span>
                    <h5>Subscribers</h5>
                  </div>
                  <div className="box">
                    <h1>1,003+</h1>
                    <span></span>
                    <h5>Transaction</h5>
                  </div>
                  <div className="box">
                    <h1>65+</h1>
                    <span></span>
                    <h5>Active user</h5>
                  </div>
                </div>
            </div>
            <div className="row img">
                <img src={logo} alt="" />
            </div>
        </div>
      </div>
    );
  }
export default HomeWelcome;