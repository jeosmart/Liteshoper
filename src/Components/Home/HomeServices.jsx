import "./HomeServices.scss";
import img1 from "../../Files/Images/img.webp";
import img2 from "../../Files/Images/5292392.png";
import img3 from "../../Files/Images/2645228.png";
import img4 from "../../Files/Images/1040254.png";
function HomeServices() {
    return (
      <div className="HomeServices nth-bg2">
        <div className="wrapper">
            <div className="row img">
                <img src={img1} alt=""/>
            </div>
            <div className="row details">
                <span>
                    <h1>Faster buying process</h1>
                    <p>Customers can spend less time shopping for what they want. they can easily browse through many items at a time and buy what they like.</p>
                </span>
            </div>
        </div>
        <div className="wrapper reverse">
            <div className="row details">
                <span>
                    <h1>Affordable advertising and marketing</h1>
                    <p>Sellers don't have to spend a lot of money to promote thier items. Liteshoper has several Affordable, quick ways to market online. we provides visual channels which allows sellers to show off thier products.</p>
                </span>
            </div>
            <div className="row img">
                <img src={img2} alt="" />
            </div>
        </div>
        <div className="wrapper">
            <div className="row img">
                <img src={img3} alt=""/>
            </div>
            <div className="row details">
                <span>
                    <h1>Several payment modes</h1>
                    <p>We permit multiple payment mode that include UPI, cash on delivery, card on delivery, net banking, bank transfer, EMLs on card or debit card and pay-later credit facility.</p>
                </span>
            </div>
        </div>
        <div className="wrapper reverse">
            <div className="row details">
                <span>
                    <h1>Increases Visibility</h1>
                    <p>We help you reach your customers globally to deliver compelling experiences at scale. showcase your product and services, increase sales, and build relationships all with us</p>
                </span>
            </div>
            <div className="row img">
                <img src={img4} alt="" />
            </div>
        </div>
      </div>
    );
  }
export default HomeServices;