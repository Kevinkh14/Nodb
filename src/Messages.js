import React, {Component} from 'react';
import "./message.css"
import Axios from 'axios';


export default class Messages extends Component{
   constructor(props){
       super(props);
       this.state ={
           editting:false,
           message:this.props.message
       }
       this.handleChange =this.handleChange.bind(this)
       this.edit = this.edit.bind(this)
   }
   handleChange(e){
       this.setState({message:e.target.value})
   }
   edit(e){
       const{message} = this.state
        const {index,edit} = this.props
        if (e.key ==="Enter"&&message.length !== 0) {
            edit(index, message);
            this.setState({editting:false})
        }
    }

   render(){
       const{index,message,edit}=this.props
       const {editting} =this.state;
       console.log(message,{index})
       return(
           <section className = "text" >
               {
                   editting
                   ?
                   <input className= "input" value={this.state.message}
                   onChange={this.handleChange} onKeyPress ={this.edit}/>
                   :
                   <ul className ="mes">{message}</ul>
               }
                {/* <ul className ="mes">{this.props.message} </ul> */}
                <button className="edit" onClick = {(e)=>{e.preventDefault(); 
                    this.setState({editting:!this.state.editting,message})}}>edit</button>
                <button className = "remove" onClick={e=>{
                    e.preventDefault()
                    
                    Axios.delete(`/api/jdm/${index}`,{
                        
                    }).then(response =>{
                        this.props.update(response.data);
                    })
                }}>Remove</button>
           </section>
       )
   }
}