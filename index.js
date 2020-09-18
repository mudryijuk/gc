const express = require ('express');

const app = express();
app.use(express.static('public'));

app.get('/', (req,res,next)=>{
    res.sendFile(__dirname + '/idex.html')
})



app.listen(5000, ()=>{
    console.log('work now !', new Date ()); 
})

