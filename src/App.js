import React from "react";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Card from "./component/Card";
import SurveyThird from "./component/SurveyThird";
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from "./component/header/Header";
function App(){
  return(
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Header/>}/>
      <Route path="/survey" element={<SurveyThird />}/>

      <Route path="/card" element={<Card />}/>
    </Routes>
  </BrowserRouter>
  )
}
export default App