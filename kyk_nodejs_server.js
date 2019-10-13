/**This server application is written by Timothy Mwandha for KYK APP 
 * First declare and define variables for importing packages.
 * Then 'use' packages and thier methods and objects for various tasks.
 * Set up the routes to request, and respond with static and dynamic web pages.
 * GET - to pass requests to the file system (single thread) for web pages.
 * POST - to pass data from user inputs into the database.
 * Make calculate outputs i.e. functions to perform specific tasks. And post results to database.
 * To listen to browser for user actions and inputs, using a virtual port.
 * To retrive data from data base and populate browser with content.
 * To throw errors, give feedback and alerts when something breaks e.g. faults * 
 * */


const express = require('express');
const parser = require('body-parser');
const session = require('express-session');
const mysql = require('mysql');
const morgan = require('morgan');
const cypto = require('crypto');


/** Set up the middleware. Express package 'uses' methods of other packages for 
 * 1 - morgan for logging traffic between client and server 2 - body parse for selecting DOM sections 
 * 3 - connecting to database, 4 - managing sessions in Express 5 - data encryption */

const kykserver = express();               // defining the server
kykserver.use(morgan('short'));           //to view diagnostic info about data comms
kykserver.use(parser.urlencoded({ extended: false }));
var html_dir = './public/';             //a variable to refer to the HTML directory
kykserver.use(express.static('./public')); //server access to html & static files in public folder.
kykserver.use(session({               //keep track of user sessions
    secret: 'secret',                //do not expose the data
    resave: true,                   //keep historical data
    saveUninitialized: true        // keep track of uninitialized attempts/sessions.
}));


/** Set up routes for seaching the file system to provides responses to requests.
 * Express fetches specified html pages from the file directory and sends them to client browser */

kykserver.get('./', (request, respond) => {
    respond.sendfile(dir_html + 'index.html');
    console.log('index file called');
})

kykserver.get('./hhsignup', (request, respond) => {
    respond.sendfile(dir_html + 'hhsignup.html');
    console.log('hhsignup form called');

})

kykserver.get('./hosignup', (request, respond) => {
    respond.sendfile(dir_html + './hosignup.html');
})

/** A connection with the database is created using a mysql method, and it is stored in a 
 * constant variable for re-use whilst querying the database. */

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'kyk1'
})

/** Upon detecting the submit event of the signUp form, Express receives the data and inserts 
 * it into the database. The password value is encrypted. User is redirected to a login page*/

kykserver.post('/posthh', (request, respond) => {

    const fname = request.body.hhfnam;
    const mname = request.body.hhmnam;
    const lname = request.body.hhlnam;
    const date = request.body.hhdobod;
    const month = request.body.hhdobom; 
    const year = request.body.hhdoboy;
    const gender = request.body.hhgend;
    const nation = request.body.hhnati;
    const nin = request.body.hhnidn;
    const mob1 = request.body.hhmob1;
    const mob2 = request.body.hhmob2;
    const whatsno = request.body.hhwanu;
    const relig = request.body.hhreli;
    const tribe = request.body.hhtrib; 
    const email = request.body.hhemad;
    const educ = request.body.hhedul;
    const salary = request.body.hhsalo;
    const expernce = request.body.hhexp;
    const add1 = request.body.hhadd1;
    const add2 = request.body.hhadd2;
    const add3 = request.body.hhadd3;
    const add4 = request.body.hhadd4;
    const add5 = request.body.hhadd5;
    const add6 = request.body.hhadd6;
    const add7 = request.body.hhadd7;
    const add8 = request.body.hhadd8;
    const add9 = request.body.hhadd9;
    const lang1 = request.body.hhlang1;
    const lang2 = request.body.hhlang2;
    const lang3 = request.body.hhlang3;
    const kykno = request.body.hhkykid;
    const med = request.body.hhmedcom;
    const bgchk = request.body.hhintpocle;
    const user = request.body.hhusername;
    const pass = request.body.hhpass;
    const copass = request.body.hh1pass;

    // hash = crypto.createHash('md5').update(pass).digest('hex');

    /** create a string to query and insert into househelp table of kyk 1(3) database*/

    const querystring = "INSERT INTO  `kyk1`.`househelp` (`fname` ,`mname` ,`lname` ,`date` ,`month` ,`year` ,`gender`,`nation` ,`nin` ,`mob1` ,`mob2` ,`whatsno` ,`relig` ,`tribe` ,`email` ,`educ` ,`salary` , `expernce` ,`add1` ,`add2` ,`add3` ,`add4` ,`add5` ,`add6` ,`add7` ,`add8` ,`add9` ,`lang1` ,`lang2` ,`lang3` ,`kykno` ,`med` ,`bgchk` ,`user` ,`pass` ,`copass`) VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)";

    console.log('querystring inserted fields');
    /** the connection method passes arguments of the variables*/

    connection.query(querystring, [fname ,mname ,lname ,date ,month ,year ,gender,nation ,nin ,mob1 ,mob2 ,whatsno ,relig ,tribe ,email ,educ ,salary ,expernce ,add1 ,add2 ,add3 ,add4 ,add5 ,add6 ,add7 ,add8 ,add9 ,lang1 ,lang2 ,lang3 ,kykno ,med ,bgchk ,user ,pass,copass]);
    console.log('getting the form');
    respond.redirect('/');
    console.log('re-direction done');

    //res.end();

    setTimeout(function () {
        respond.redirect("/")
        respond.end();
        console.log('set time out working...');
    }, 15000000);


})

/** Express creates a listener on port 3000 of the client and whenever an event or
 *  request comes to this port, node interprets the request/responds as per the script */

kykserver.listen(8080);
console.log("server started at port 8080. Waiting to serve you @ localhost:8080");
console.log('server waiting for you...');


//mname,nation,nin,mob1,mob2,whatsno,relig,lang,email,educ,salary,expernce,add1,add2,add3,add4,add5,add6,add7,add8,add9,lang1,lang2,lang3,kykno,med,bgchk,user,pass,copass

//mname,nation,nin,mob1,mob2,whatsno,relig,lang,email,educ,salary,expernce,add1,add2,add3,add4,add5,add6,add7,add8,add9,lang1,lang2,lang3,kykno,med,intpol,user,pass,copass]

//,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?