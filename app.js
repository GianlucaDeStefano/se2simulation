const express = require('express')

var bodyParser = require('body-parser');
const app = express()
const PORT = process.env.PORT || 3000


app.use(bodyParser.json()); // support json encoded bodies
app.use(bodyParser.urlencoded({ extended: true })); // support encoded bodies

app.listen(PORT, () => console.log('Listening on port '+ PORT));

app.get('/square',(req,res)=> {

    var str = req.query.string;

    res.json("{result:"+string_square(str)+"}");

})

function string_square(s){

    if(s == null) {
        return -1;
    }

    return (s.length*s.length);
}