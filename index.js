const express = require('express');
const path = require('path');


const app = new express;
app.use(express.static('public'));

app.listen(4000,()=>{
	console.log("listening to 4000")
});

app.get('/',(req,res)=>{
	res.sendFile(path.join(__dirname + '/public/home.html'))
})

app.post('/api',(req,res)=>{
	const data = {
		time:new Date(),
		content:"Hello World!"
	}
	console.log(data)
	res.send(data)
	
})