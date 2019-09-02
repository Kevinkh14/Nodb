import React, {Component} from 'react';
import "./message.css"


export default class Messages extends Component{
   constructor(props){
       super(props);
       this.state ={
           message:this.props.message,
           editting:false
       }
   }
   handleChange(e){
    this.setState({message:e.target.value})
   }
   edit(e){
    const{message} = this.state
    const {id,edit} = this.props
    edit(id, message);
    this.setState({editting:false})
   }
   render(){
       const{id,message,edit,remove}=this.props
       const {editting} =this.state;
       console.log(message,id)
       return(
           <div className = "text" >
               {
                   editting
                   ?
                   <input className= "input" value={this.state.message}
                   onchange={this.handleChange} onKeyPress ={this.edit}/>
                   :
                   <ul className ="mes">{message}</ul>
               }
                {/* <ul className ="mes">{this.props.message} </ul> */}
                <span className="edit" onClick = {()=>this.setState({editting:!this.state.editting,message})}></span>
                <span className = "remove" onClick ={() => remove(id)}></span>
           </div>
       )
   }
}