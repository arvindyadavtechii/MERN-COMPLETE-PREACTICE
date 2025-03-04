// const http = require('node:http');
// const fs = require("fs");

// import http from "http"

// const hostname = '127.0.0.1';
// const port = 3000;

// const server = http.createServer((req, res) => {
//   res.statusCode = 200;
//   res.setHeader('Content-Type', 'text/plain');
//   res.end('Hello World');
// });

// server.listen(port, hostname, () => {
//   console.log(`Server running at http://${hostname}:${port}/`);
// });

// import obj from "./main1.js"
// import {a} from "./main1.js"
// console.log(a);
// console.log(obj);

// const a = require("./modul1.js");
// console.log(a);

// var fs = require("fs");
// var os = require("os");
// var user = os.userInfo();
// console.log(user);
// console.log(user.username);

// fs.appendFile("greeting.text", "hii" + user.username + "!\n", () => {
//   console.log("file is created");
// });
// console.log(os);
// console.log(fs);

// var _ = require("lodash");
// var data = ["person", "ajay", "person", 1, 4, 7, 7, "name"];

// var filter = _.uniq(data);
// console.log(filter);
// console.log(_);
// console.log(_.isString("person"));
// console.log(_.isString(2));// return data only string ....

// const jsonString = `{"name":"john","age":30,"city":"newYork"}`;
// const jsonobject = JSON.parse(jsonString);
// console.log(jsonobject.name);


// const objecttoconvert = {
//     name:"alice",
//     age:30,
// };


// const json = JSON.stringify(objecttoconvert);
// console.log(json);
// console.log(typeof json);
// console.log(typeof jsonobject);

// const express = require('express')
// const app = express()

// app.get('/', function (req, res) {
//   res.send('Hello World')
// })

// app.get('/idli', function (req,res){
//     var customized_idli = {
//         name : "raavi idli",
//         size : "10 cm ",
//         is_sambhar : true,
//     }
//     res.send(customized_idli);
// })

// app.listen(3000,()=>{
//     console.log("server active");
// });

// const express = require('express')
// const app = express()
// const port = 3000

// app.use(express.static('public'));

// app.get('/', (req, res) => {
//   res.send('Hello World!')
// })

// app.listen(port, () => {
//   console.log(`Example app listening on port ${port}`)
// })

// app.get('/about', (req, res)=> {
//   res.send('Hello about')
// });

// app.get('/contact', (req, res)=> {
//     res.send('hello contact')
//   });

// app.get('/blog', (req, res)=> {
//     res.send('Hello blog')
//   });

// app.get('/blog/:slug/:second',(req, res)=> {
//     console.log(req);
//     // for url = "http://localhost:3000/blog/into/padoshi?mode=dark%20and%20region%20=in";
//     console.log(req.params);
//     console.log(req.query);
//       res.send(`hello ${req.params.slug} and ${req.params.second}`);
//     });


// const express = require('express')
// const app = express()
// const port = 3000

// app.use(express.static('public'));

// app.get('/', (req, res) => {
//     console.log('Hello its get request !!');
//   res.send('Hello its get request !!');
// })

// app.post('/', (req, res)=> {
//     console.log('Hello its post request!!');
//     res.send('hello post');
//   });

//   app.put('/', (req, res)=> {
//     console.log('Hello its put request!!');
//     res.send('hello put');
//   });

//   app.delete('/', (req, res)=> {
//     console.log('Hello its delete request!!');
//     res.send('hello delete');
//   });

//   app.get('/index', (req, res) => {
//     console.log('Hello its index !!');
//   res.sendFile('templates/index.html', {root:__dirname});
// })

// other methods 

// rest.download() .... prompt a file to  be a downloaded 
// res.end() ..... end the respose process 
// res.json() .... send a json response 
// res.jsonp() ....... send a json 
// res.redirect ..... redirect a request 
// res.render ..... render a veiw template. 
// res.send ......... sends a response of various type .
// res.sendfile .......... sends a file as an ocatet system 
// res.sendstatus ......... set the response status code and sends its string represtation as the response body.

// const blog = require('./routes/blog');
// app.use('/blog', blog)

// const shop = require('./routes/shop');
// app.use('/shop', shop)

// app.get('/api', (req, res) => {
//     res.json({a : 1 , b:2 , c:3});
// })

// app.listen(port, () => {
//   console.log(`Example app listening on port ${port}`)
// })

// const express = require('express')
// const app = express()
// const port = 3000 ;
// const fs = require("fs");

// //middlewares 
// app.use((req, res, next)=>{
//   // fs.writeFile("avii.text", `${Date.now()} is a ${req.method} }`);
//   console.log(req.headers);
//   // console.log('m1');
//   req.avii = " i am avii ";
//   console.log(`${Date.now()} is a ${req.method}`);
//   next();
// });

// app.use((req, res, next)=>{
//   console.log('m2');
//   next();
// })

// app.get('/', (req, res) => {
//   res.send('hello'+ req.avii);
// })

// app.listen(port, () => {
//   console.log(`Example app listening on port ${port}`)
// });

// const express = require('express')
// const app = express()
// const port = 3000

// app.set('view engine', 'ejs');

// app.get('/', (req, res) => {
//   let sitename = "aviiworld";
//   let searchtext = "Search Now";
//   res.render("index", {sitename:sitename,searchtext:searchtext});
// })

// app.get('/blog/:slug', (req, res) => {
//   let blogtittle = "aviiworld why and when";
//   let blogcontent = "Its a very good brand";
//   res.render("index", {blogtittle:blogtittle,blogcontent:blogcontent});
// });

// app.listen(port, () => {
//   console.log(`Example app listening on port ${port}`)
// });


///////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////


//mongoose 

// https://www.npmjs.com/package/mongodb
// import mongoose from "mongoose";
// import express from "express";
// import { Todo } from "./models/Todo.js";

// let conn = await mongoose.connect("mongodb://localhost:27017/todo")
// const app = express()
// const port = 3000

// app.get('/', (req, res) => {

//     const todo = new Todo({  desc: "Description of this todo", isDone: false, days: Math.floor(Math.random() * 45 + 5* Math.random()) })
//     todo.save() 
//     res.send('Hello World!')
// })

// app.get('/a', async (req, res) => { 
//     let todo = await Todo.findOne({})
//     console.log(todo)
//     res.json({title: todo.title, desc: todo.desc})
// })



// app.listen(port, () => {
//     console.log(`Example app listening on port ${port}`)
// })

