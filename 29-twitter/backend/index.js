// let bodyParser = require('body-parser');
const express = require('express');
const cors = require('cors');
const monk = require('monk');

const app = express();
const db = monk('localhost/twitter');
const twits = db.get('twits');

app.use(cors());
app.use(express.json());
// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended: false }));
app.listen(5000, ()=> console.log('listening on http://localhost:5000'))

app.get('/', (req,res)=>{
  res.json({
    message: 'tweeetoooo'
  });
});

app.get('/twits', (req,res)=>{
  twits.find().then(twits=>{
    res.json(twits);
  })
})

function isValidTwit(twit){
  // take the name, make it a string, trim to remove white space
  // and make sure that it doesn't equal an empty string
  return twit.name && twit.name.toString().trim() !== '' &&
  twit.content && twit.content.toString().trim() !== '';
}

app.post('/twits', (req,res)=>{
  // Validation will keep your database(db) safe from bad stuff such as injections from hackers. So ALWAYS validate info!
  if (isValidTwit(req.body)){
    // insert into database(db)
    const twit = {
      name: req.body.name.toString(),
      content: req.body.content.toString(),
      created: new Date()
    };
    twits.insert(twit).then(createdTwit =>{
      res.json(createdTwit);
    })
  } else {
    // respond with an error
    res.status(422);
    res.json({
      message: 'Hey! Name and Content are required!'
    });
  }
});