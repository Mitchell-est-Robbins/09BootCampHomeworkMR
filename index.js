// TODO: Include packages needed for this application
// const xxxxxxx = require('inquirer'); ========================give it a name and delete this activity 20 could even call it inquirer
const fs= require('fs');
const inquirer = require('inquirer');


// TODO: Create an array of questions for user input
const questions = [];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    //this is a hint??
    fs.writeFile(generatMarkdown(data))

 
}

// TODO: Create a function to initialize app
//whatever code needs to fire first

function init() {
    //this console log is for when you do node index.js 
    console.log("init is calling and this is starting") //============== the skeleton of  this code came from TA Christian during office hours
    inquirer.prompt([       //----this is like activity 20
        {type: "input",
        message: "",
        name: "A",
    }

    ]).then((data)=>{
           // fs.writeFile('README.md', data.a.toString(), (err)=>{     //================from TA christian
    //     if (err){console.log(inquirer.red (err))}
    //     else{console.log(inquirer.blue)}
    // } )
    })

}

// Function call to initialize app
init();

//===========================================================================================================
//to turn this in you have to show in video no narration. just show the md cook off
//===========================================================================================================