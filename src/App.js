import React, {Component} from 'react';
import Header from './Header'
import Home from './Home'
import Japanese from './Japanese'
import './App.css';

class App extends Component{
  constructor(props){
    super(props)
    this.state ={
      section: "Home"
    }
    
  }
  render(){
     return (
      <div className="App">
        <img className = 'homeButton' 
        src="https://img.icons8.com/material-outlined/50/000000/home--v1.png" 
        onClick ={()=> this.setState({section:"Home"})}></img>
        
        <Header/>
        {this.state.section === "Home"? <Home />:null}
        <ul className="chatrooms">
          <li onClick={()=>this.setState({section:'American Muscle'})}>#American Muscle</li>
          <li onClick ={()=>this.setState({section:'Japanese'})}>#JDM</li>
          <li onClick={()=>this.setState({section:'European'})}>#European</li>
        </ul>
        
        {this.state.section ==="Japanese"?(
          <Japanese className= 'jap' changeSection ={()=> this.setState({section:Home})}/>
        ): null}
        {this.state.section ==="home"?(
          <Home changeSection ={()=> this.setState({section:Japanese})}/>
        ): null}
        
        
      </div>
    );
  }
}

export default App;
