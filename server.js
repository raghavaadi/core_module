'use strict';

var fs = require('fs');
var _ = require('lodash')
console.log(_.now());
_chunk(['this','grps','array'],2);
_.compact([0, 1, false, 2, '', 3]);
var array = [3];
var other = _.concat(array, 2, [3]);


var port = process.env.PORT || 1337;
const express = require('express');
const helmet = require('helmet');
const app = express();
app.listen(port, () => { console.log(`connecting port ${port}....`) })
app.get('/', (req, res) => {
    res.send("hello world");
});
app.use(helmet());
try {
    app.use(dnsPrefetchControl({ allow }));// for the purpose of dns prefetching to avoid dns spoofing attackon the victim
    //usually not all browser suports prefecth so by default it is in off state
    app.use(helmet.xssFilter());// to prevent cross site scripting attack
    //by def on state
    app.use(helmet.frameguard());/// to prevent iframe attack 
   //by hiding the framein the background

}
catch (err) {
    console.log(err);
    app.use(dnsPrefetchControl());
}
fs.readFileSync(new URL('file:///C:/Users/Raghav/source/repos/core modules practice/helloworld.txt'));
/*Deletion of file using file system both sync and async*/
app.get('delete/:filename', (req, res) => {
    const n = req.params.filename;
    fs.unlink(n, (err) => {
        if (err) {
            console.log(err);
            res.send(err);
            try {
                fs.unlinkSync(n);
                console.log("the another file was deleted sucessfully");
            }
            catch (err) {
                console.log('file not found');
            }
        }
        else {
            console.log('file deleted sucessfully')
            res.send('your mentioned file has been deleted sucessfully');
        }
    }); 
});
/*renaming of the file */
app.get('/rename/:filename/:newfilename', (req, res) => {
    var a = req.params.filename;
    var b = req.params.newfilename;
    res.send(a);
    fs.rename(a,  b,(err) => {
        if(err) {
            console.log(err);
        }
    else{
        console.log('rename successful');
        }
});
});
