import React, {useState, useContext, createContext} from "react";
import Header from './component/header/Header';
import Content from "./component/content/Content"
import SurveyWithoutFirebase from "./component/survey/SurveyWithoutFirebase";
export const ContextData = createContext()

function App() {
  // const [open, setOpen] = useState(false);
  // const handleOpen = () => setOpen(p=>!p);

  return (
    <div className="App">
       <ContextData.Provider value={true} >
       <Header/>
       {/* <SurveyWithoutFirebase/> */}
       {/* <Content/> */}
      </ContextData.Provider>
      
    </div>
  );
}

export default App;
