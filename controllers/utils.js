const fetch = require('node-fetch');
const utils = {};

utils.addArray = (nodos, ipSend, myIp) =>{
    // const misDatos = {"msg":{
    //         "ip": myIp,
    //         "name": "D"},
    //     "ip-send": ipSend,
    //     "ip-recibe": nodos[nodos.length-1].msg.ip,
    //     "password": "1955"};
    const misDatos = {
        msg: {
            ip: myIp,
            name: "D"
        },
        "ip-send": ipSend,
        "ip-recibe": nodos[nodos.length-1].msg.ip,
        password: "1955"
    }
    // const arrayNodos = [...nodos, misDatos];
    // console.log(arrayNodos);
    // return arrayNodos;
    nodos.push(misDatos)
    return nodos;
}

utils.sendArray = async (arrayNodos, ipSend) =>{
    console.log(arrayNodos);
    try{
        const response = await fetch(`http://${ipSend}:4000`, {
            method: 'post',
            body: arrayNodos,
            headers: {'Content-Type': 'application/json'}
        });
        const data = await response.json();
    }catch(err){
        console.log(err);
    }
}

module.exports = utils;