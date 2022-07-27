import React, { useContext, useEffect, useState } from "react";
import "./Content.css";
import ContentImage from "../../assets/content.png";
import ContentImage2 from "../../assets/content2triangleImage.png";
import Survey_video from "../../assets/Survey_video.mp4";
// import { ContextData } from "../../App";
import { signInWithGoogle } from "../firebaseConfig";
import { ContextValueData } from "../header/Header";
import { auth } from "../firebaseConfig";
export default function Content() {
  const Datas = useContext(ContextValueData);
  const [mail, setEmail]= useState("")
  const [fakedata, setFakeData]= useState("")

  const fakeId = "prabaidymoto@gmail.com"
  const DAtaApi = ["prabaidymoto@gmail.com", "prabakarandhanasekar@twilightsoftwares.com"]

  useEffect(()=>{
    DAtaApi.map((item)=>{
      console.log("item", item)
      setFakeData(item)
    })
  })
  // console.log("mail",mail)
  useEffect(()=>{
    setEmail(localStorage.getItem("email"))
  },[mail])
  return (
    <div>
      <div className="contentBag">
        {Datas ? <div className="content1"></div> : null}
        <div className="content2">
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
                <button className="contentButton " onClick={signInWithGoogle}>
                  {fakedata===mail ? "Launch Survey" : "Login"}</button>
              </div>
              <div>
                <h3 className="contentSurvey">Survey User Guide</h3>
              </div>
              <div>
                <video
                  className="contentVideo"
                  src={Survey_video}
                  type="video/mp4"
                  autoPlay="TRUE"
                  loop="TRUE"
                  controls="controls"
                ></video>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
