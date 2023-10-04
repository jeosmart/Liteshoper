import img1 from "../../Files/Images/benefit-3-copyright.png";
import img2 from "../../Files/Images/benefit-2-copyright.png";
import img3 from "../../Files/Images/benefit-1-copyright-1.png";
import "./HomeFeatures.scss";
function HomeFeatures() {
    return (
      <div className="HomeFeatures">
        <h2>Key Features </h2>
        <div className="wrapper">
            <div className="box">
              <div className="row1">
                <img src={img1} alt="" />
              </div>
              <div className="row2">
                <h4>Scalable</h4>
                <p>We can handle any growing amount of work, or its potential to be enlarged to fit in that growth</p>
              </div>
            </div>
            <div className="box">
              <div className="row1">
                <img src={img2} alt="" />
              </div>
              <div className="row2">
                <h4>Flexible</h4>
                <p>Your trust and projects are top priorites for us, therefore we adjust to every client's needs easily</p>
              </div>
            </div>
            <div className="box">
              <div className="row1">
                <img src={img3} alt="" />
              </div>
              <div className="row2">
                <h4>Usable</h4>
                <p>All the information that you receive here is at your disposal 100% with no limits or restrictions</p>
              </div>
            </div>
            <div className="box">
              <div className="row1">
                <img src={img3} alt="" />
              </div>
              <div className="row2">
                <h4>Speed</h4>
                <p>TON brings speed and scalability to a multi-blockchain architecture that allows to process several millions of transactions per second.</p>
              </div>
            </div>
            <div className="box">
              <div className="row1">
                <img src={img3} alt="" />
              </div>
              <div className="row2">
                <h4>User Friendly</h4>
                <p>The complete anonymity of the client base and the absence of a public transaction history exclude any extraneous interference.</p>
              </div>
            </div>
            <div className="box">
              <div className="row1">
                <img src={img2} alt="" />
              </div>
              <div className="row2">
                <h4>Cross Browser</h4>
                <p>Skote is fully compatible with Cross-browser.</p>
              </div>
            </div>
        </div>
      </div>
    );
  }
export default HomeFeatures;