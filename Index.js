// used for writting to file functions
const fs = require('fs');
// Used to load inquirer and colors npm's
const inquirer = require('inquirer');
const colors = require('colors');
// Used to load shapes.js for making the svg shapes
const shapes = require("./lib/shapes");

const fileName = "./lib/logo.svg"

// Function that write's the svg logo to file
function writeToFile(data) {
    fs.writeFile(fileName, data, (err) =>
  err ? console.error(err) : console.log('.svg successfully made!')
);
}

// This variable stores all the questions for inquirer prompt
const questions = [
    {

    },
]

// Function called when program starts
function init(){
    inquirer.prompt(questions).then((data) =>
        writeToFile(generateMarkdown(data))
)}
// used to start program. Must remain bottom
init()