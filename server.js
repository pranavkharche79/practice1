var express= require('express');
const path = require('path');

const app = express();
const port=8000;
const directory=path.join(__dirname,'public');

app.use(express.static(directory));

app.get('/',(req,res)=>{
    res.sendFile(path.join(directory,'/index.html'));
});

app.listen(port,()=>{
    console.log(`app is running on port ${port}`);
});