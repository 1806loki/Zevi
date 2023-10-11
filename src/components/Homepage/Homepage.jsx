import searchicon from "../../assets/search_icon.png";
import Navbar from "../Navbar/Navbar";
import "./Homepage.css";

const Homepage = () => {
  return (
    <div className="home">
      <div className="container">
        <Navbar/>
        <div className="searchbox">
          <input type="search" name="" id="" placeholder="Search">
          </input>
            <img className="search-icon" src={searchicon} alt="Search" />
        </div>
      </div>
    </div>
  );
};

export default Homepage;
