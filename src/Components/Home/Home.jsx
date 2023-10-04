import Navbar from "./Navbar";
import HomeWelcome from "./HomeWelcome";
import HomeNewsleter from "./HomeNewsleter";
import HomeServices from "./HomeServices";
import HomeFeatures from "./HomeFeatures";
import HomeTeam from "./HomeTeam";
import HomeFaq from "./HomeFaq";
import HomeContact from "./HomeContact";
import Footer from "./Footer";
function Home() {
    return (
      <div className="Home">
        <Navbar/>
        <HomeWelcome/>
        <HomeServices/>
        <HomeFeatures/>
        <HomeTeam/>
        <HomeContact/>
        <HomeFaq/>
        <HomeNewsleter/>
        <Footer/>
      </div>
    );
}
export default Home;