let express = require('express');
let app = express(); 
let cors = require('cors');
let bodyParser = require('body-parser')
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
// parse application/json
app.use(bodyParser.json())

app.use(express.json());
app.use(cors());

app.get('/', (req,res)=>{
  res.json({
    message: 'tweeetoooo'
  });
});

app.post('/twits', (res,req)=>{
   console.log(req.body );
})


app.listen(5000, ()=>{
  console.log('listening on http://localhost:5000');
  
})