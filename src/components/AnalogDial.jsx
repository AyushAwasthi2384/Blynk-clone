import React, { useState } from 'react'
import './com.css'

export default function AnalogDial({dialName}) {
  const [DialV, setDialV] = useState(0);
  function clicked(){
    for (let v = 0; v < 51; v++) {
      setInterval(setDialV(v),100)
      
    }
  }
  return (

    <div>
      {/* <div className="title">{dialName}</div> */}
      <div className="dial">
        <div className="dial1"></div>
        <div className="dialVal">{DialV}</div>
      </div>
      <div className="dial2"></div>
      <button onClick={clicked}>SWITCH</button>
    </div>
  )
}
