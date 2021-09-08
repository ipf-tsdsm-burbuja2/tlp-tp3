const express = require('express')
const app = express()
const port = 4000

app.use(express.json());
app.use(express.urlencoded({extended: false}));

app.use(require('./routes/nodos.routes'));

app.listen(port, () => console.log(`Example app listening on port port!`))