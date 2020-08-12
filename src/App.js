// import React, { Component } from 'react';
// import './App.css';
// class App extends Component {
//   state = {
//     active : true
//   }
//    ToggleClass = () =>  {
//     this.setState({active : !this.state.active});
//     //  this.setState({active : !this.state.active});
//      console.log(this.state.active);
//     // if(this.state.active){
//     //   console.log("False"); 
//     // }else{
//     //   console.log("True"); 
//     // }
// }
//   render(){
//     const AddActive = (this.ToggleClass ? 'active' : ' ');
//     return (
//       <div className="App">
//       <div className={`toggle ${AddActive}`} onClick={()=> (this.ToggleClass)}>
//       <button onClick={this.ToggleClass}>Menu ddcdcd</button>
//       <button onClick={this.ToggleClass} className="ShowButton">Shooooooooooooooow</button>
//           <i className="fas fa-star"></i>
//         </div>
//         <div className={`overlay ${AddActive}`} onClick={this.ToggleClass}></div>
//         <div className={`menu ${AddActive}`}>
          
//             <ul className="list-menu">
//                      <li><a  href="#" data-scroll="home">home</a></li>
//                      <li><a  href="#" data-scroll="services">Services</a></li>
//                      <li><a  href="#" data-scroll="skills">skills</a></li>
//                      <li><a  href="#" data-scroll="projects">projects</a></li>
//                      <li><a  href="#" data-scroll="contact">contact</a></li>
//             </ul>
//         </div>
      
//       </div>
//     );
//   }
// }
// export default App;

import "bootstrap/dist/css/bootstrap.min.css";

import './App.css'
import React, { Component } from "react";
import Navbar from './components/Navbar';

import Home from './components/Home';
import About from './components/About';
import Port from './components/Portfolio';
import Contact from './components/Contact';
import Tech from './components/Tech';
import { Route, Switch } from "react-router-dom";

 class App extends Component {
 
  render() {
    return (
     <>
       
      <Navbar/>
      <Switch>
        <Route exact path="/" component={Home}/>
        <Route exact path="/about" component={About}/>
        <Route exact path="/Port" component={Port}/>
        <Route exact path="/Tech" component={Tech}/>
        <Route exact path="/Contact" component={Contact}/>
      </Switch>

     </>
    );
  }
}
export default App;