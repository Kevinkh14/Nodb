const express =require("express")
const app = express()
const controller = require ("./controller")

app.use(express.json());



app.post("/api/jdm", controller.create)
app.get("/api/jdm", controller.read)
app.put("/api/jdm/:id",controller.update)
app.delete("/api/jdm/:id",controller.delet)


app.post("/api/Euro",controller.create)
app.get("/api/Euro", controller.read)


app.listen(5050,()=>{
    console.log("Listening on 5050")
})