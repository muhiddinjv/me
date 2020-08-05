const express = require('express');
// turn input into string
const cors = require('cors');
// automatically refresh db
const monk = require('monk');
const Filter = require('bad-words');
// cannot use profanity
const rateLimit = require('express-rate-limit');
//limit to 1 request ever 15 seconds

const app = express();
const db = monk(process.env.MONGO_URI || 'localhost/twitter');
const twits = db.get('twits');
const filter = new Filter();

app.use(cors());
app.use(express.json());

app.listen(5000, ()=> console.log('listening on http://localhost:5000'))

app.get('/', (req,res)=>{
  res.json({
    message: 'tweeeteee'
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

app.use(rateLimit({
  windowMs: 10 * 1000, // 10 seconds
  max: 1 // Limit each IP to 1 request per windowMs
}));

app.post('/twits', (req,res)=>{
  console.log(req.body);
  // Validation will keep your database(db) safe from bad stuff such as injections from hackers. So ALWAYS validate info!
  if (isValidTwit(req.body)){
    // insert into database(db)
    const twit = {
      name: filter.clean(req.body.name.toString()),
      content: filter.clean(req.body.content.toString()),
      created: new Date()
    };
    twits.insert(twit).then(createdTwit =>{
      res.json(createdTwit);
    })
    // console.log(twit);
  } else {
    // respond with an error
    res.status(422);
    res.json({
      message: 'Hey! Name and Content are required!'
    });
  }
});