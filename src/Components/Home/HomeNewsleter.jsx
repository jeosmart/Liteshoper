import "./HomeNewsleter.scss";
function HomeNewsleter() {
    return (
      <div className="HomeNewsleter">
        <div className="wrapper">
            <p>Connect your Email address and Get new updates that matters in your inbox</p>
            <div className="row">
              <input type="text" placeholder="Email Address"/>
              <button>Subscribe</button>
            </div>
        </div>
      </div>
    );
  }
export default HomeNewsleter;