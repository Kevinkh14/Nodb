let messages = [];
let id = 0 


const create= (req,res) =>{
    
    messages.push(req.body)
    res.json(messages)
    id++
};

const read=(req,res) =>{
    res.json(messages)
};

const edit =(req,res) =>{
    const{message}=req.body;
    const updateID = req.params.id;
    const messageIdex = messages.findIndex(mess => mess.id ===updateID)
    let mess = messages[messageIdex];

    messages[messageIndex] ={
        id:mess.id,
        message:message||mess.message
    }
};

const delet = (req,res)=>{
    const deleteID = req.params.id;
    messageIndex.messages.findIndex(mess => mess.id == deleteID);
    messages.splice(messageIdex,1);

};


module.exports ={
    create,
    read,
    edit,
    delet
};