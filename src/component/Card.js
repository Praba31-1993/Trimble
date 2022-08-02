import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import Card from "react-bootstrap/Card";
import Form from "react-bootstrap/Form";
import Box from "@mui/material/Box";
import Slider from "@mui/material/Slider";

const marks = [
  {
    value: 0,
    label: "Poor",
  },
  {
    value: 30,
    label: "Normal",
  },
  {
    value: 60,
    label: "Good",
  },
  {
    value: 100,
    label: "Excellent",
  },
];

// function valuetext(value) {
//   return `${value}°%`;
// }

function valueLabelFormat(value) {
  const SliderIndex =  marks.findIndex((mark) => mark.value === value) + 1;
console.log("index", SliderIndex)
if(SliderIndex===0){
    return +1
}

}

export default function () {
  const { state } = useLocation();
  // const Data = {state}

  console.log("dat", state);
  const [value, setValue] = React.useState("");

  const [data, setData] = useState(state);
  const [dataitem, setDataItem] = useState();
  const [slideData, setSlideData] = useState(0);
  const [isLable, setLable] = useState(true)

  console.log("datas", data);
console.log("Valid", isLable)
  return (
    <div style={{display:"flex", flexWrap:"wrap"}}>
      {data.map((item) => {
        return (
          <Card border="primary" style={{ width: "20rem",margin:"10px" }}>
            <Card.Header>{item.content}</Card.Header>
            <Card.Body>
              <Card.Text>
                Is this total reward program available to you at trimble
              </Card.Text>
              <Form >
                {["radio"].map((type) => (
                  <div key={`inline-${type}`} className="mb-3" >
                    <Form.Check
                      inline
                      label="Yes"
                    //   onClick={setLable(true)}
                    // isValid={()=>setLable(true)}
                      name="group1"
                      value='true'
                      type={type}
                      id={`inline-${type}-1`}
                      onChange={()=>setLable(true)}

                    />
                    <Form.Check
                      inline
                      label="No"
                      name="group1"
                      value='false'
                      onChange={()=>setLable(false)}

                    //   onClick={setLable(false)}
                    // isValid={!isLable}
                    // isValid={()=>setLable(false)}    
                      type={type}
                      id={`inline-${type}-2`}
                    />
                  </div>
                ))}
              </Form>
              <Card.Text>
                How satisfied are you with the current program at Trimble?
                <Box sx={{ width: 250 }}>
                    {isLable ?
                  <Slider
                    aria-label="Restricted values"
                    defaultValue={30}
                    // valueLabelFormat={valueLabelFormat}
                    // getAriaValueText={valuetext}
                    step={null}
                    valueLabelDisplay="auto"
                    marks={marks}
                    
                  />
                  :
                  <Slider
                    aria-label="Restricted values"
                    defaultValue={30}
                    // valueLabelFormat={valueLabelFormat}
                    // getAriaValueText={valuetext}
                    step={null}
                    valueLabelDisplay="auto"
                    marks={marks}
                    disabled
                  />
                    }
                </Box>
              </Card.Text>
            </Card.Body>
          </Card>
        );
      })}
    </div>
  );
}
