<div>
  import React from 'react'
  export default function Survey() {'{'}
  return (
  <div>
    <div className="container">
      <h2 className="suvey-header">Total Reward Categories</h2>
      <p className="suvey-para">1.Please rank the Total Reward Categories by order of importance to you</p>
      <div className="facet-container">
        <div className="flex">
          <label className="suvey-label">Please drag and drop to rank the Total Reward Categories</label>
          <ul id="allFacets" className="facet-list">
            <li id={1} href="#" className="facet Compensation" data-toggle="tooltip" title="Fair and competitive compensation (cash and equity)" style={{{{fontsize: ''}} "20px", textdecoration: "none", textalign: "center"}}>Compensation</li>
            <li id={2} href="#" className="facet Benefits" data-toggle="tooltip" title="Benefits Programs to manage your health and wealth" style={{{{fontsize: ''}} "20px", textdecoration: "none" ,textalign: "center"}}>Benefits</li>
            <li id={3} href="#" className="facet Well-being" data-toggle="tooltip" title="Programs to help manage your physical, financial and emotional well-being" style={{{{fontsize: ''}} "20px", extdecoration: "none", textalign: "center"}}>Well-being</li>
            <li id={4} href="#" className="facet Career" data-toggle="tooltip" title="Working for a company driven by purpose (environmental, social and societal impact, including DEI commitment and meaningful work)" style={{{{fontsize: ''}} "20px",textdecoration: "none", textalign: "center"}}>Career</li>
            <li id={5} href="#" className="facet Purpose" data-toggle="tooltip" title="Programs available to help you grow professionally" style={{{{fontsize: ''}} "20px", textdecoration: "none" , textalign: "center"}}>Purpose</li>
            <li id={6} href="#" className="facet Workplace" data-toggle="tooltip" title="The tools, workspace and flexibility to make work work for you" style={{{{fontsize: ''}} "20px", textdecoration: "none" , textalign: "center"}}>Workplace/Work-life</li>
          </ul>
        </div>
        <div className="flex">
          <label className="suvey-label1">My Order of Preferences</label>
          <hr />
          <ul id="userFacets" className="facet-list">
          </ul>
        </div>
      </div>
      <a href="file:///C:\Users\DELL\Desktop\Nivedhan\Survey tool/survey-2.html"><button type="button" className="submit-button" id="submit-button">Submit</button></a>
    </div>
  </div>
  )
  {'}'}
</div>
