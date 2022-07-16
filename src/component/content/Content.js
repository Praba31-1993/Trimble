import React, {useContext, useState} from "react";
import "./Content.css";
import ContentImage from "../../assets/content.png";
import ContentImage2 from "../../assets/content2triangleImage.png";
import Survey_video from "../../assets/Survey_video.mp4";
// import { ContextData } from "../../App";
import { ContextValueData } from "../header/Header";
export default function Content() {
  const Datas= useContext(ContextValueData)
  return (
    <div>
      <div className="contentBag">
      {Datas ?  

        <div className="content1" ></div>: null}
        <div className="content2" >
          <div className="content2whitebackground"> 
          <div className="c2 content21">
            <h2>Total Rewards 'Irresistibility' Survey</h2>
            {/* <button className="btn btn-primary" onClick={handleOpen}>Survey</button> */}

          </div>
          <div className="c2 content22">
            <div className="c2 title">
              <img src={ContentImage} alt="" className="contentimage" />
            </div>
            <div className="c2 para">
              <img src={ContentImage2} alt="" className="contentimage2" />
            </div>
            <div>
              <h4>We are here to gather your Inputs!</h4>
            </div>
            <div>
              <button className="contentButton ">Login</button>
            </div>
            <div>
              <h3 className="contentSurvey">Survey User Guide</h3>
            </div>
            <div>
            <video className="contentVideo" src={Survey_video} type="video/mp4" autoPlay="TRUE" loop="TRUE" controls="controls"></video>
            </div>
          </div>
        </div>
        </div>

      </div>
    </div>
  );
}
