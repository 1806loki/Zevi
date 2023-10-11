import searchicon from "../../assets/search_icon.png";

import Modal from "../Modal/Modal";
import Navbar from "../Navbar/Navbar";
import "./Homepage.css";

const Homepage = () => {

  const [data, setData] = useState()
  const 




  return (
    <div className="home">
      <div className="container">
        <Navbar />
        <h1 style={{display:'flex', justifyContent:"center"}}>hi</h1>
        <div className="searchbox">
          <input type="search" name="" id="" placeholder="Search" />
          <img className="search-icon" src={searchicon} alt="Search" />
        </div>
        <Modal />
      </div>
    </div>
  );
};

export default Homepage;
