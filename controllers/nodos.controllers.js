const {addArray, sendArray} = require('./utils');
const ctrlNodos = {};
const myIp = "192.168.80.207";
let ipCome = '';

ctrlNodos.routeGo = async (req, res)=>{
    const nodos = req.body;
    res.json({msg: 'recibido!'});
    const ipSend = '192.168.80.233';
    ipCome = nodos[nodos.length-1].msg.ip;
    let arrayNodos = addArray(nodos, ipSend, myIp);
    sendArray(arrayNodos, ipSend);
}

ctrlNodos.routeCome = async (req, res)=>{
    const nodos = req.body;
    res.json({msg: 'recibido!'});
    nodos.pop();
    sendArray(nodos, ipCome);
}

// const addArray = (nodos, ipSend, myIp) =>{
//     const misDatos = {"msg":{
//             "ip": myIp,
//             "name": "D"},
//         "ip-send": ipSend,
//         "ip-recibe": nodos[nodos.length-1].msg.ip}
//     const arrayNodos = [...nodos, misDatos];
//     return arrayNodos;
// }

// const sendArray = async (arrayNodos, ipSend) =>{
//     const response = await fetch(`http://${ipSend}:4000`, {
//         method: 'post',
//         body: JSON.stringify({nodos: arrayNodos}),
//         headers: {'Content-Type': 'application/json'}
//     });
//     const data = await response.json();
//     console.log(data);
// }

module.exports = ctrlNodos;