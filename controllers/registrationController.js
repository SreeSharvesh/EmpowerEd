const formidable = require('formidable');
const registrationService = require('../services/RegistrationService');

exports.getRegistrationForm = (req, res) => {
  res.render('signup');
};

exports.registerUser =  (req, res) => {
    try {
    const form = new formidable.IncomingForm();   
    form.parse(req, (err, fields, files) => {
     if (err) {
       console.error(err);
       return res.status(500).json({ error: 'Error parsing form data' });
     }
 
     const { username, email, number, password } = fields;

     console.log(fields);
     
     registrationService.registerUser(username[0], email[0], number[0], password[0]);
 
     res.redirect('/login');
   });
}
catch (err) {
    res.status(400).json({ error: `Registration failed: ${error.message}` });
}
};
