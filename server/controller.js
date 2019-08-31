let messages = [];



const create= (req,res) =>{
    
    messages.push(req.body)
    res.json(messages)
};

const read=(req,res) =>{
    res.json(messages)
};

module.exports ={
    create,
    read
};