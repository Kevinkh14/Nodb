import React,{Component} from 'react'
import axios from "axios"
import './japanese.css'
import Messages from "./Messages"

class AmericanMuscle extends Component{
    constructor(props){
        super(props);
        this.state={
            section:"AmericanMuscle",
            message:"",
            japanese:[]
        }
        this.handleMessage=this.handleMessage.bind(this)
        this.handleSubmit =this.handleSubmit.bind(this)
        
    }


    componentDidMount(){
        axios
        .get("/api/Euro")
        .then(response =>{
            this.setState({japanese: response.data})
        })
     }

    handleMessage(e){
        this.setState({message:e.target.value})
    }
    handleSubmit (e){
        
        e.preventDefault()
        axios.post('/api/Euro',{
            message:this.state.message
        })
        .then(response => {
            console.log(response)
            this.setState({japanese: response.data})
            
        })
        .catch(error =>{
            this.setState({error:"an error accured"})
        })
        
       
    }
   

    render(){
        
        return(
            <div className = 'container'>
                <div className = 'chat-container'>
                    <h1 className = 'title'>American Muscle</h1>
                     <form>
                        <div className = "messageDiv">  
                    <div className = "mes-container">
                        {this.state.japanese.map((japanese,index) =>(
                            <Messages  message ={japanese.message} key ={index}/>
                         ))}
                    </div>
                        </div>  
                            <input className ="textBox"
                            type ='text' 
                            placeholder ="Enter Message"
                            onChange = {this.handleMessage}
                            value ={this.state.text}
                            />

                            <img className ='send' 
                            src="https://img.icons8.com/ios-glyphs/30/000000/filled-sent.png"></img>

                            <input className ='send1' type ='submit'
                            onClick = {this.handleSubmit}></input>
                    </form>
                    
                </div>
                
            </div>
        )   
    }
   
        
    
}
export default AmericanMuscle;