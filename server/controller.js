let messages = [];



const create= (req,res) =>{ 
    messages.push(req.body)
    res.json(messages)
   
};

const read=(req,res) =>{
    console.log(messages  + "hit ")
    res.json(messages)
};

const update =(req,res) =>{
    console.log(req.body);
 messages[+req.params.id] = req.body
 res.json(messages)
};

const delet = (req,res)=>{
    messages.splice(+req.params.id,1)
    res.json(messages)
    console.log(messages)

};


module.exports ={
    create,
    read,
    update,
    delet
};