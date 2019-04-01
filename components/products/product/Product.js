import React from 'react';
import './Product.css';
const Product = (props)=>{
return (
  <div className="sleepyclass">
<h2>{props.pname}</h2>
<p>
Cost : {props.pcost}<hr/>
<button onClick={props.pclick}>Fire</button>
</p>
  </div>
)
}

export default Product;