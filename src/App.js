import React, {Component} from 'react';
import Header from './Header'
import Home from './Home'
import Japanese from './Japanese'
import European from "./European"

import './App.css';
import AmericanMuscle from './AmericanMuscle';

class App extends Component{
  constructor(props){
    super(props)
    this.state ={
      section: "Home"
    }
    
  }
  render(){
     return (
      <main className="App">
        <div>
          <Header/>
          <img className = 'homeButton' 
          src="https://img.icons8.com/material-outlined/50/000000/home--v1.png" 
          onClick ={()=> this.setState({section:"Home"})}></img>
        </div>
        {this.state.section === "Home"? <Home />:null}
        <ul className="chatrooms">
          <li onClick={()=>this.setState({section:'AmericanMuscle'})}>American Muscle</li>
          <li onClick ={()=>this.setState({section:'Japanese'})}>JDM</li>
          <li onClick={()=>this.setState({section:'European'})}>European</li>
        </ul>
        
        {this.state.section ==="Japanese"?(
          <Japanese className= 'jap' changeSection ={()=> this.setState({section:Home})}/>
        ): null}
        {this.state.section ==="European"?(
          <European changeSection ={()=> this.setState({section:European})}/>
        ): null}
        {this.state.section ==="AmericanMuscle"?(
          <AmericanMuscle changeSection ={()=> this.setState({section:AmericanMuscle})}/>
        ): null}
        
        
      </main>
    );
  }
}

export default App;
