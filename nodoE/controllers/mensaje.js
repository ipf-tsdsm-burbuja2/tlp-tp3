  
const fetch = require('node-fetch');
const ctrlHome = {};
const ipSend = '192.168.80.248';
const myIp = "192.168.80.233";

ctrlHome.rutaPost = async (req, res) => {
    const nodos = req.body;
// console.log(nodos);
    const longitud = nodos.length

    console.log(nodos);

    // if(longitud == 4 && nodos[4].password == 'nodoE'){
    //     console.log(nodos);

        res.json({msg: 'recibido!'});
        let arrayNodos = addArray(nodos, ipSend, myIp);
        // console.log(arrayNodos);
        sendArray(arrayNodos);

    // }else{
    //     res.json('ERROR')
    // }


}




const addArray = (nodos, ipSend, myIp) =>{
    // console.log( JSON.parse(nodos));
   
    const misDatos = {"msg":{
            "ip": myIp,
            "name": "E"},
        "ip-send": ipSend,
        "ip-recibe": nodos[1].msg.ip,
        "password":"nodoE"}
    const arrayNodos = [...nodos, misDatos];
    return arrayNodos;
}

const sendArray = async (arrayNodos) =>{
    const response = await fetch(`http://${ipSend}:4000/nodes`, {
        method: 'post',
        body: JSON.stringify({nodos: arrayNodos}),
        headers: {'Content-Type': 'application/json'}
    });
    const data = await response.json();

    console.log(data);
}


module.exports = ctrlHome;