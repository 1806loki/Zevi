import zevilogo from "../../assets/zevilogo.webp";

import "./Navbar.css"

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="container">
        <img src={zevilogo} alt="" />
      </div>
    </div>
  );
};

export default Navbar;
