const express = require('express');
const app = express();
const fs = require('fs');
const port = 3000;


//Create
app.put('/', (req, res) => {
    return res.status(201).send({ code: "0", message: "Create" });
})

//Update
app.post('/', (req, res) => {
    return res.send({ code: "0", message: "Update" });
})

//Delete
app.delete('/', (req, res) => {
    return res.send({ code: "0", message: "Delete" });
})

//Retrieve
app.get('/', (req, res) => {
    return res.send({ code: "0", message: "Retrieve" });
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})

