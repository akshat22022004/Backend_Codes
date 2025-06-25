const express = require("express")
const path = require("path")

const app = express();
const PORT = 8000;

app.set('veiw engine','ejs');
app.set("veiws",path.resolve("./veiws"));



app.listen(PORT,() => console.log(`Server started at port ${PORT}`));

app.get('./',(req,res) =>{
    res.render('Homepage');
})