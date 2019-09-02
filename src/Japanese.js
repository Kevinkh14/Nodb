import React,{Component} from 'react'
import axios from "axios"
import './japanese.css'
import Messages from "./Messages"

class Japanese extends Component{
    constructor(props){
        super(props);
        this.state={
            section:"Japanese",
            message:"",
            japanese:[]
        }
        this.handleMessage=this.handleMessage.bind(this)
        this.handleSubmit =this.handleSubmit.bind(this)
        
    }


    componentDidMount(){
        axios
        .get("/api/jdm")
        .then(response =>{
            this.setState({japanese: response.data})
        })
     }

    handleMessage(e){
        this.setState({message:e.target.value})
    }
    handleSubmit (e){
        
        e.preventDefault()
        axios.post('/api/jdm',{
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
    editMessage(id,message){
        console.log('editMessage', id,message);
        axios.put('/api/jdm',{message}).then(response =>{
            this.setState({japanese:response.data})
        })
    }
    removeMessage(id){
        axios.delete("/api/jdm").then(response =>{
            this.setState({japanese:response.data})
        })
    }
   

    render(){
        
        return(
            <div className = 'container'>
                <div className = 'chat-container'>
                    <h1 className = 'title'>JDM</h1>
                     <form>
                        <div className = "messageDiv">  
                    <div className = "mes-container">
                        {this.state.japanese.map((japanese) =>(
                            <Messages id ={japanese.id}  message ={japanese.message} key ={japanese.id}/>
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
export default Japanese;