const {addArray, sendArray} = require('./utils');
const ctrlNodos = {};
const myIp = "192.168.80.207";
let ipCome = '';

ctrlNodos.routeGo = async (req, res)=>{
    const nodos = req.body;
    console.log(nodos);
    if (nodos[nodos.length-1].password == 1955) {
        res.json({msg: 'recibido!'});
        const ipSend = '192.168.80.233';
        ipCome = nodos[nodos.length-1].msg.ip;
        let arrayNodos = addArray(nodos, ipSend, myIp);
        sendArray(arrayNodos, ipSend);
    }
    res.json({msg: 'Acceso denegado!'});
}

ctrlNodos.routeCome = async (req, res)=>{
    const nodos = req.body;
    res.json({msg: 'recibido!'});
    nodos.pop();
    sendArray(nodos, ipCome);
}

module.exports = ctrlNodos;