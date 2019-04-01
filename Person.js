import React,{Component} from 'react';
import './myperson.css';
import Mohan from './Mohan';
import Sohan from './Sohan';
class Person extends Component{


render(){
return  (
<div className="myperson">
<h1>List of persons</h1>
<Mohan name="Ajit" wt="62" ht="5.9"/>
<Sohan name="Sohan" wt="64" ht="5.8"/>
</div>
)
}


}

export default Person;