import React,{Component} from 'react';
import Product from './product/Product'
import Dynamic from './dynamic/Dynamic'
class Products extends Component{

constructor(){
  super();
  this.state = {
    products : [
{name : 'Apple',cost : 200},
{name : 'banana',cost : 150},
{name : 'Avocado',cost : 340},
{name : 'Blackberry',cost : 222}
    ]
  }
}

show(something){
  alert("Hello Products "+something);
}

editCost=(evt,index)=>{

var tmpProducts = this.state.products;

tmpProducts[index].cost = evt.target.value;
this.setState({
  products : tmpProducts
})
}

//indexing in map
render(){
  return (
    <div>
<h2>List of products</h2>
{
this.state.products.map((product,i)=>{
return (
  <div key={i}>
{i}<Dynamic changeCost={(evt)=>this.editCost(evt,i)} pname={product.name} pcost={product.cost} />
  </div>
)
})
}
    </div>
  )
}

// loop+condition in js way
//render(){
//   return (
//     <div>
// <h1>List of products</h1>
// {
//   this.state.products.map((product)=>{
// var selectedProduct = null;
// if(product.cost>300){
//   selectedProduct = <Product pname={product.name} pcost={product.cost}/>;
// }
// return(
// <div>
// {selectedProduct}
// </div>
// )
//   })
// }
//     </div>
//   )
// }

// render(){
//   return (
//     <div>
//     <h1>List Of Products</h1>
//    {
//      this.state.products.map((prod)=>{
//        return (
//          <div>
//          {
//            (prod.cost)>300?<Product pname={prod.name} pcost={prod.cost}/>:null
//          }
//          </div>
//          )
//      })
//    }
//     </div>
//   )
// }

// render(){
//   return (
//     <div>  
// <Product pclick={()=>this.show("Apple")} pname={this.state.products[0].name} pcost={this.state.products[0].cost}/>
// <Product pclick={this.show.bind(this,"Banana")} pname={this.state.products[1].name} pcost={this.state.products[1].cost}/>
// <Product pclick={this.show.bind(this,"Avocado")} pname={this.state.products[2].name} pcost={this.state.products[2].cost}/>
//     </div>
//   )
// }

/*render(){
  return (
    <div>  
<Product pclick={this.show.bind(this,"Apple")} pname={this.state.products[0].name} pcost={this.state.products[0].cost}/>
<Product pclick={this.show.bind(this,"Banana")} pname={this.state.products[1].name} pcost={this.state.products[1].cost}/>
<Product pclick={this.show.bind(this,"Avocado")} pname={this.state.products[2].name} pcost={this.state.products[2].cost}/>
    </div>
  )
}*/



}

export default Products;