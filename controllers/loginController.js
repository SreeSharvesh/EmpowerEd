const formidable = require('formidable');
const LoginService = require('../services/LoginService');

exports.getLoginForm = (req, res) => {
  res.render('login');
};

exports.loginUser = async (req, res) => {
    try {
    const form = new formidable.IncomingForm();   
    form.parse(req, async (err, fields, files) => {
     if (err) {
       console.error(err);
       return res.status(500).json({ error: 'Error parsing form data' });
     }
 
     const { username, password } = fields;

     console.log(username, password);
     
     const sessionId = await LoginService.loginUser(username[0], password[0]);

     console.log(sessionId.toString());

     if (sessionId) {
         req.session.userId = sessionId.toString();
     }
 
     res.redirect(`/profile?name=${username}`);
   });
}
catch (err) {
    res.status(400).json({ error: `Registration failed: ${error.message}` });
}
};
