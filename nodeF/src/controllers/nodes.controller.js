import nodes from '../models/nodes.models'
import fetch from 'node-fetch'
const contrasenia = '2912'

const myData = {
      "msg":{
        "ip": "192.168.80.248",
        "name": "F"},
        "ip-send": "192.168.80.233",
      "ip-recibe": "192.168.80.233"
    }

const saveNodes = async (req, res) => {
  try {
    const datos = req.body
    console.log(datos)
    const largo = datos.length
    const password = datos[4].password
    
    const newNode = new nodes(datos)
      newNode.save()

    if (largo == 5) {
      if (password===contrasenia) {
        datos.push(myData)
      }
      // const newNode = new nodes(datos)
      // newNode.save()
    }
  } catch (error) {
    console.error(error)
  }
}
  

const sendNodes = (req, res) => {
  try {
    fetch('192.168.80.233:4000/', {
      method: 'POST',
      body: JSON.stringify(myData)
    })
    res.json({'status':'Cadena inicializada'})
  } catch (error) {    
    console.error(error)
    res.json({'status':'Cadena fallida'})
  }
}

export { sendNodes, saveNodes }