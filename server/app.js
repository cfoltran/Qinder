const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const port = 8000;

const user = require('./user.js');
const setting = require('./setting.js');
const home = require('./home.js');

let urlencodedParser = bodyParser.urlencoded({ extended: false });

app.use(bodyParser.json());

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Content-Type');
  next();
});

app.get('/', (req, res) => {
  res.send('Server works');
});

// Check the request
// const checkUserToken = (req, res, next) => {
//   if (!req.header('Authorization')) {
//     return res.status(401).json({
//       success: false,
//       message: 'Missing authentication header'
//     });
//   }
//   const token = req.header('authorization').split(' ')[1];
//   jwt.verify(token, secret);
//   next();
// };

// POST routes
app.post('/login', urlencodedParser, user.login);
app.post('/register', urlencodedParser, user.register);

app.post('/updateName', urlencodedParser, setting.updateName);
app.post('/updateEmail', urlencodedParser, setting.updateEmail);
app.post('/updatePassword', urlencodedParser, setting.updatePassword);
app.post('/updateNotifications', urlencodedParser, setting.updateNotifications);

app.post('/updatePreferences', urlencodedParser, home.updatePreferences);
app.post('/uploadPhoto', urlencodedParser, home.uploadPhoto);

// GET routes
app.get('/setting/:id', urlencodedParser, setting.enterViewSetting);

app.get('/home/:id', urlencodedParser, home.enterViewHome);

app.get('/getUserPhotos/:id', urlencodedParser, home.getUserPhotos);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
