var express = require('express');
 
var app = express();
 
app.use(express.cookieParser());
app.use(express.session({secret: 'hdhdbehzjsksasmd'}));

app.get('/user/:user', function(req, res){
	req.session.name = req.params.user;
	res.send('<p>Session Set: <a href="/user">View Here</a></p>');
});

app.use(express.cookieParser());
 
app.get('/user/:user', function(req, res){
	res.cookie('username', req.params.user)
	    .send('<p>Cookie Set: <a href="/user">View Here</a>');
});
app.get('/user', function(req, res){
	if(req.session.name)
	 res.send(req.session.name+'<br /><a href="/logout">Logout</a>');
	else
	 res.send('user logged out!');
});

app.get('/logout', function(req, res){
	req.session.destroy();
	res.send('<br />logged out!<br /><a href="/user">Check Session</a>');
});

var names = [
 "Satish",
 "Kiran",
 "Sunitha",
 "Jyothi"
];
 
app.param('username', function(req, res, next, username){
	var flag = parseInt(names.indexOf(username), 10);
 
	if(flag >= 0)
	 next();
	else 
	 res.end("No Such User!");
});
 
app.get('/user/:username', function(req, res){
	res.send("Viewing user: "+req.params.username);
});