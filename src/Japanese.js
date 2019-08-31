import React,{Component} from 'react'
import axios from "axios"
import './japanese.css'

class Japanese extends Component{
    constructor(props){
        super(props);
        this.state={
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
            message: this.state.message
        })
        .then(response => {
            console.log(response)
        })
        .catch(error =>{
            this.setState({error:"an error accured"})
        })
       
    }

    render(){
        
        return(
            <div className = 'container'>
                <div className = 'chat-container'>
                {/* this.state.message.map((mes,index)=>(
                    <p>{mes.message}</p>
                    )) */}
                    <form>
                        <div className = "messageDiv">  
                            <input className ="textBox"
                            type ='text' 
                            placeholder ="Enter Message"
                            onChange = {this.handleMessage}/>

                            <img className ='send' 
                            src="https://img.icons8.com/ios-glyphs/30/000000/filled-sent.png"></img>

                            <input className ='send1' type ='submit'
                            onClick = {this.handleSubmit}></input>
                        </div>  
                    </form>
                    <h1 className = 'title'>JDM</h1>
                </div>
                
            </div>
        )   
    }
   
        
    
}
export default Japanese;