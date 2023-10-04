import img1 from "../../Files/Images/jeosmart2.jpeg";
import img2 from "../../Files/Images/t2.jpg";
import img3 from "../../Files/Images/t5.jpg";
import img4 from "../../Files/Images/t1.jpg";
import "./HomeTeam.scss";
function HomeTeam() {
    return (
      <div className="HomeTeam nth-bg2">
         <h2>Meet our Team & Contributors </h2>
          <div className="wrapper">
            <div className="card">
               <img src={img1} alt="" />
               <h4>Jeosmart Iwara</h4>
               <p>CEO, Founder</p>
            </div>
            <div className="card">
               <img src={img2} alt="" />
               <h4>Jason Moore</h4>
               <p>Director of Operations</p>
            </div>
            <div className="card">
               <img src={img3} alt="" />
               <h4>Tim Morrison</h4>
               <p>Head of Communication</p>
            </div>
            <div className="card">
               <img src={img4} alt="" />
               <h4>Anna Lee</h4>
               <p>Project Lead</p>
            </div>
          </div>
          <button>View all Team</button>
      </div>
    );
  }
export default HomeTeam;