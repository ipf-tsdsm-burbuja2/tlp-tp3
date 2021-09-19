import mongoose from "mongoose";

const nodeSchema = new mongoose.Schema({
  nodos: [
    {
        msg:{
            ip: { type : String, required: true },
            name: { type: String, max: 1, required: true }
            },
        "ip-send":{ type : String, required: true },
        "ip-recibe": { type : String, required: true }
    }
  ]
})


export default mongoose.model('nodes', nodeSchema)