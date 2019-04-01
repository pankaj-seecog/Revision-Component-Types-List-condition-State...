import React from 'react';
import './Dynamic.css';
const Dynamic = (props)=>{
return (
  <div className="sleepyclass">
<h2>{props.pname} | {props.pcost}</h2>
<p>
Cost : <input value={props.pcost} onChange={props.changeCost} />
<hr/>
<button onClick={props.pclick}>Fire</button>
</p>
  </div>
)
}

export default Dynamic;