//define a variable and place it into the http package (shared code) from node js
let myhttp = require("http");

//use dot notation in javascript to access an object and it's properties
//create server needs some arguments to make it useful
//1. function that will run whenever a server makes a http request
let myserver=myhttp.createServer( 
  //function to run when a request comes in
  function( myrequest, myresponse){
    console.log (myrequest.url);

    //http response header, including status code (200 OK)
    myresponse.writeHead( 200, {"Content-Type":"text/plain"} );

    //end() returns some data and closes the response (send it) 
    myresponse.end("Goodbye World!\n");
}

);
//ask http to start listening on a tcp port for incoming http requests 
//listen takes 2 args: 1: tcp port #, string of IP Address
myserver.listen(8080, "0.0.0.0");


//single-line comment
console.log("Hello world!");