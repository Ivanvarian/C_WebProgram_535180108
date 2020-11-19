const express = require('express');

const router = express.Router();

router.get('/login', async (req, res) => {
  res.render('pages/login');
});

module.exports = router;

router.post('/login', async (req, res) => {
    // get user input
    const username = req.body.username;
    const password = req.body.password;
  
    if (username === "admin" && password === "admin") {
      // TODO: implement sessions to check user is logged-in
  
      // redirect to member area
      res.redirect('/');
    } 
    else {
      // TODO: render the login page with error information
    }
  });
  


