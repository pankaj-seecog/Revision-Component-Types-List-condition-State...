import React,{Component} from 'react';

class Add extends Component{

constructor(){
  super();
  this.state = {
a : 0,
b : 0
  }
}

addNumbers = ()=>{
 var t1 = parseInt(this.state.a)+parseInt(this.state.b);
 alert('The sum is '+t1);
}

changeFirst = (evt)=>{
this.setState({
  a : evt.target.value
})
}

changeSecond = (evt)=>{
this.setState({
  b : evt.target.value
})
}

render(){
  return (
    <div>
<p>
First Number : <input value={this.state.a} onChange={(evt)=>this.changeFirst(evt)}/>
</p>
<p>
Second Number : <input value={this.state.b} onChange={(evt)=>this.changeSecond(evt)}/>
</p>
<p>
<button onClick={this.addNumbers}>Add Numbers</button>
</p>
    </div>
  )
}


}

export default Add;