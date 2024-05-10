// Used to load inquirer and colors npm's
const inquirer = require('inquirer');
const colors = require('colors');
// used for writting to file functions
const fs = require('fs');
// Used to load shapes.js for making the svg shapes
// const shapes = require("./lib/shapes");

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
        type: 'input',
        message: colors.brightRed('Please enter 3 or less chacters for you project'),
        name: 'title',
        // used to ensure input is valid
        validate:  (title) => {
        if (!title){
            return "You must enter a title";
        } else if(title.length > 3){
            return "You must enter less than 3 charcters"
        }else {
            return true;
        }    
    },
    },
    {
        type: 'list',
        message: colors.brightGreen('Please Select a color for your title'),
        name: "titleColor",
        choices: ["red", "yellow", "blue", "green", "black", "white"],
    },
    {
        type:`list`,
        message:colors.brightBlue(`Please select a shape`),
        name: 'svgShape',
        choices: ["square","triangle","circle"]
    },
    {
        type: 'list',
        message: colors.brightGreen('Please Select a color for your shape'),
        name: "shapeColor",
        choices: ["red", "yellow", "blue", "green", "black", "white"],
    },
    {
        type: 'list',
        message: colors.brightGreen('Please Select a color for your background'),
        name: "backgroundColor",
        choices: ["red", "yellow", "blue", "green", "black", "white"],
    },
]

// Function called when program starts
function init(){
    inquirer.prompt(questions).then((data) =>
//         // writeToFile(generateMarkdown(data))
        console.log(data)
)
}
// used to start program. Must remain bottom
init()