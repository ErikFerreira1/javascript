import { NavLink } from "react-router-dom";
import "./Navbar.css"
const Navbar = () => {
  return (
    <>
      <nav>
        <NavLink to={"/"}>Home</NavLink>
        <NavLink to={"/About"}>Sobre</NavLink>
        <NavLink to={"/Contapi"}>Context api</NavLink>
      </nav>
    </>
  );
};

export default Navbar;
