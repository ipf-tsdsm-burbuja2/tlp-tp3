const fetch = require('node-fetch');
const ctrlNodos = {};
const ipSend = '192.168.80.233';
const myIp = "192.168.80.207";

ctrlNodos.routePOST = async (req, res)=>{
    const {nodos} = req.body;
    res.json({msg: 'recibido!'});
    let arrayNodos = addArray(nodos, ipSend, myIp);
    // console.log(arrayNodos);
    sendArray(arrayNodos);
}

const addArray = (nodos, ipSend, myIp) =>{
    const misDatos = {"msg":{
            "ip": myIp,
            "name": "D"},
        "ip-send": ipSend,
        "ip-recibe": nodos[nodos.length-1].msg.ip}
    const arrayNodos = [...nodos, misDatos];
    return arrayNodos;
}

const sendArray = async (arrayNodos) =>{
    const response = await fetch(`${ipSend}:4000`, {
        method: 'post',
        body: JSON.stringify({nodos: arrayNodos}),
        headers: {'Content-Type': 'application/json'}
    });
    const data = await response.json();

    console.log(data);
}

module.exports = ctrlNodos;