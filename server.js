const express = require('express')

const app = express()

app.get('/', (req,res)=>{
    res.send(`<h1>99 Bottles of beer on the wall</h1>
    <a href='http://localhost:3000/98'>take one down, pass it around</a>`)
})

app.get('/:number_of_bottles', (req,res)=>{
    console.log(req.params)
    const {number_of_bottles} = req.params
    res.send(`<h1>${number_of_bottles} Bottles of beer on the wall</h1>
    <a href='http://localhost:3000/${number_of_bottles -1}'>take one down, pass it around</a>`)
})


app.listen(3000, () => {
    console.log('Server is running at port 3000...')
})