const fs= require('fs');
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown')


// an array of questions for user input
const promptUser = () => {
 return inquirer.prompt ([
    {type: "input",
        message: "What is your github link?",
        name: "A",
     },
        {type: 'input',
        message: 'What is your email address?',
        name: 'B',
     },
        {type: 'input',
        message: 'What is the Project Name?',
        name: 'C',
     },
        {type: 'input',
        message: 'Write a short description of the project',
        name: 'D',
     },
        {type: 'input',
        message: 'What licenses should the project have',  //-----maybe multichoice //I choose a license for my application from a list of options
        name: 'E',
     },
        {type: 'input',
        message: 'List command to install dependencies',
        name: 'F',
     },
        {type: 'input',
        message: 'Command to run tests?',
        name: 'G',
     },
        {type: 'input',
        message: 'What does user need to know about using repo?',
        name: 'H',
     },
        {type: 'input',
        message: 'what does user need to know about contributing to repo?',
        name: 'I',
      },
        {type: 'input',
        message: 'Ideas for improvement?',
        name: 'J',
      },
      
   ]);
};


// ==================bits from miniproject==============================
const init = () => {
   promptUser()
   //promptuser runs the questions. then the bit from the miniproject promises becomes the file formated from the generatemarkdown
   .then((answers) => fs.writeFileSync('README.md', generateMarkdown(answers)))
   .then(() => console.log('Success'))
   .catch((err) => console.error(err));
};





// Function call to initialize app
init();

//===========================================================================================================
//to turn this in you have to show in video no narration... added to the README  just show the md cook off
//===========================================================================================================


// TODO: Create a function to initialize app  

//-------------------------------------------------------------------there needs to be a destructured object of with the answers `${}` into the markdown

// function init() {
//    //this console log is for when you do node index.js 
//    console.log("init is calling and this is starting") //============== the skeleton of  this code came from TA Christian during office hours
//    inquirer.prompt(questions   //questions from const    //----this is like activity 20--------------use the const question array?/
      
//       ).then((data)=>{
//          console.log(data);              //----------------------------------------------so this actually gets results they just aren't formatted
//          fs.writeFile("README.md", JSON.stringify(data, '\n' ), (err)=>
//          //     fs.writeFile(generateMarkdown(data)) //-------------this could be its own thing it is its own thing in generateMarkdown.js
//          err ? console.log(err) : console.log ("Success!")
//       );
//    });
    
// }