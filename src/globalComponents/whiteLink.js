import React, { useState, useContext } from "react";
import './whiteLink.css'

function WhiteLink(props) {
  return (
      <div onClick={props.onClick} className='linkContainer'>
      <div
        className="linkContain wahniColor"
      >
          <p style={{ paddingLeft: "25px"}}>
        {props.children}
        </p>
      </div>
      </div>
  );
}

export default WhiteLink;
