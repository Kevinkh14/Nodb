import React,{Component} from 'react'
import axios from "axios"
import './japanese.css'
import Messages from "./Messages"

export default class Japanese extends Component{
    constructor(props){
        super(props);
        this.state={
            section:"Japanese",
            message:"",
            japanese:[]
        }
        this.handleMessage=this.handleMessage.bind(this)
        this.handleSubmit =this.handleSubmit.bind(this)
        this.editMessage = this.editMessage.bind(this)
        this.update = this.update.bind(this)
    }


    componentDidMount(){
        axios
        .get("/api/jdm")
        .then(response =>{
            console.log(response)
            this.setState({japanese: response.data})
        })
     }
    //  componentDidUpdate(prevState){
    //     if (prevState !== this.state.japanese){
    //         this.setState({message:this.state.japanese})
    //     }
    //  }
     update(japanese){
        this.setState({japanese:japanese})
        console.log(japanese)
    }


    handleMessage(e){
        this.setState({message:e.target.value})
    }
    handleSubmit (e){
        e.preventDefault()
        axios.post('/api/jdm',{
            messages:this.state.message
        })
        .then(response => {
            console.log(response)
            this.setState({japanese: response.data})
            
        })
        .catch(error =>{
            this.setState({error:"an error accured"})
        })   
    }

    editMessage(index,messages){
        // console.log('editMessage',index,message);
        axios.put(`/api/jdm/${index}`,{messages}).then(response =>{
            this.setState({japanese:response.data})
            console.log(index)
            console.log(response.data)
        })
        .catch(err =>{
            this.setState({error:"error accured"})
        })
    }

   
    render(){
        console.log(this.state)
        return(
            <div className = 'container'>
                <div className = 'chat-container'>
                    <h1 className = 'title'>JDM</h1>
                    <form>
                        <div className = "messageDiv">  
                            <div className = "mes-container">
                                {this.state.japanese.map((japanese,index) =>(
                                    <Messages edit = {this.editMessage}index={index}  message ={japanese.messages} key ={index} update ={this.update}/>
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
