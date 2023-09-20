import "./navbar.scss";
import { AiOutlineArrowLeft, AiOutlineInfoCircle } from "react-icons/ai";
import { BiSolidBinoculars } from "react-icons/bi";
import { FiMaximize2 } from "react-icons/fi";
import { BsThreeDots } from "react-icons/bs";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-head">
        <AiOutlineArrowLeft className="navbar-icon" />
        <div>
          <p>Financial Management</p>
          <AiOutlineInfoCircle className="navbar-icon" />
        </div>
      </div>
      <div className="navbar-foot">
        <BiSolidBinoculars className="navbar-icon" />
        <div>
          <FiMaximize2 className="navbar-icon" />
          <BsThreeDots className="navbar-icon" />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
