import mongoose from 'mongoose'
const URI = 'mongodb://localhost:27017/nodos'

mongoose.connect(URI)
	.then(() => console.log('DB is connected'))
	.catch(err => console.log(err))
