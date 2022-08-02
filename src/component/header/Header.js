import React, {useState, useContext, createContext} from "react";
import "./Header.css";
// import Logo from "../../assets/Logo.png"
import MenuIcon from '@mui/icons-material/Menu';
import Content from "../content/Content";
// import { ContextData } from "../../App";
export const ContextValueData = createContext()

export default function Header() {
  // const Value = useContext(ContextData)
  // const [opn, setOpn]=useState(p=>!p)

  return (
    <ContextValueData.Provider className="bag"  >
      <div className="parent" style={{display: "flex"}}>
        <div className="col1">
        <h4 id="title">Total Rewards 'Irresistibility' Survey</h4>
        </div>
        <div className="col2" >
          <MenuIcon className="menu" />

        </div>
        <div className="col3">
          {/* <img src={Logo} alt="" className="logo"/> */}
        </div>
      </div>
     <Content/>
     </ContextValueData.Provider>
     
  );
}
