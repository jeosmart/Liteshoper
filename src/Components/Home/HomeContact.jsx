import "./HomeContact.scss";
import {BiLogoFacebook, BiLogoTelegram, BiLogoWhatsapp, BiPhone} from "react-icons/bi";
function HomeContact() {
    return (
      <div className="HomeContact">
        <div className="wrapper">
            <div className="row details">
                <h1 className="nth-cl">Contact us using our 24/7 live chat customer support</h1>
                <p>Having problem using our services? our customer support team are always ready to help you with any service related question. we believe a good blace to live can make you fell better</p>
            </div>
            <div className="row links">
                <div className="box">
                    <i style={{color:"#0897cf"}}><BiLogoFacebook/></i>
                    <h4>Chat</h4>
                    <h4>Facebook</h4>
                </div>
                <div className="box">
                    <i style={{color:"#08c9cf"}}><BiLogoTelegram/></i>
                    <h4>Chat</h4>
                    <h4>Telegram</h4>
                </div>
                <div className="box">
                    <i style={{color:"#0ecc5d"}}><BiLogoWhatsapp/></i>
                    <h4>Chat</h4>
                    <h4>WhatsApp</h4>
                </div>
                <div className="box">
                    <i style={{color:"#f56"}}><BiPhone/></i>
                    <h4>Call us</h4>
                    <h4>08117991899</h4>
                </div>
            </div>
        </div>
      </div>
    );
  }
export default HomeContact;