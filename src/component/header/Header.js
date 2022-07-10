import React from "react";
import "./Header.css";
import Logo from "../../assets/Logo.png"
import MenuIcon from '@mui/icons-material/Menu';
export default function Header() {
  return (
    <div className="bag" >
      <div className="parent" style={{display: "flex"}}>
        <div className="col1">
        <h4 id="title"><span>Total Rewards</span> 'Irresistibility' Survey</h4>
        </div>
        <div className="col2">
          <MenuIcon className="menu"/>
        </div>
        <div className="col3">
          <img src={Logo} alt="" className="logo"/>
        </div>
      </div>
    </div>
  );
}
