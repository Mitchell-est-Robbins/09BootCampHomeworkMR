
//==icons =========from https://gist.github.com/lukas-h/2a5d00690736b4c3a7ba========================================================
//for the anchors this deep voice dude https://www.youtube.com/watch?v=EKqhENATIKg
const generateMarkdown = ({A, B, C, D, E, F, G, H, I, J,}) =>
`#  **${C}** 

[![made-with-javascript](https://img.shields.io/badge/Made%20with-JavaScript-1f425f.svg)](https://www.javascript.com)  [![Npm package version](https://badgen.net/npm/v/express)](https://npmjs.com/package/express)  [![GitHub license](https://img.shields.io/github/license/Naereen/StrapDown.js.svg)](https://github.com/Naereen/StrapDown.js/blob/master/LICENSE)

### **Navigation**

[Description](#description)

[Screenshots](#screenshots)

[Questions](#questions)

[Installation](#installation)

[Testing](#testing)

[Contact-me](#contact-me)

[Ideas-for-improvement](#ideas-for-improvement)

-------

## **Description** 
${D}

--------

## **Screenshots:**

![Screenshot 1 Landing](image.jpg)



![Screenshot 2 Features](image.jpg)



![Screenshot 3 Features](image.jpg)


-------

## **Questions:**

### **What licenses are needed?**
${E}

<br/><br/> 

### **Installation**
${F}

<br/><br/> 

### **Testing** 
${G}

<br/><br/> 

### **Will it be maintained?** 
${H}

<br/><br/> 

### **Can I contribute?** 
${I}

<br/><br/> 

--------

## **Contact me:**
### ${A}
### ${B}

----------

## **Ideas for improvement:**
${J}
`;

// Description, Installation, Usage, Contributing, and Tests

module.exports = generateMarkdown;


//===========from https://gist.github.com/lukas-h/2a5d00690736b4c3a7ba========================================================
//MIT license 
//[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
//[![GitHub license](https://img.shields.io/github/license/Naereen/StrapDown.js.svg)](https://github.com/Naereen/StrapDown.js/blob/master/LICENSE)
//npm license
//[![Npm package version](https://badgen.net/npm/v/express)](https://npmjs.com/package/express)
//made with js
//[![made-with-javascript](https://img.shields.io/badge/Made%20with-JavaScript-1f425f.svg)](https://www.javascript.com)



// // TODO: Create a function that returns a license badge based on which license is passed in
// // If there is no license, return an empty string
// function renderLicenseBadge(license) {}

// // TODO: Create a function that returns the license link  ///-----------------------------------future dev
// // If there is no license, return an empty string
// function renderLicenseLink(license) {}

// // TODO: Create a function that returns the license section of README
// // If there is no license, return an empty string
// function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
