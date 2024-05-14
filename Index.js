// Used to load inquirer and colors npm's
const inquirer = require('inquirer');
const colors = require('colors');
// used for writting to file functions
const fs = require('fs');
// Used to load shapes.js for making the svg shapes
const {shapes} = require("./lib/shapes");
const colorList = require("./data/colorList");

const fileName = "./examples/logo.svg"

// Function that write's the svg logo to file
function writeToFile(data) {
    fs.writeFile(fileName, data, (err) =>
  err ? console.error(err) : console.log('.svg successfully made!')
);
}
// Used as part of the validation of colors selected limiting to hexidecimal range and 3 - 6 charachters, while requiring to start with a #
const hexRegex = /^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/;
// This variable stores all the questions for inquirer prompt
function validation(data) {
        if (colorList.includes(data) || hexRegex.test(data)){
            return true;
        } else {
            return "This color is an invalid selection or is not a valid hexadcimal color code which is somewhere between #000000 and #FFFFFF"
        }
}

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
        type: 'input',
        message: colors.brightGreen('Please type a color for your title or a valid hexidecimal code, that must start with a # and 3 - 6 chacters between 0-9 and a-f'),
        name: "titleColor",
        validate: validation
    },
    {
        type:`list`,
        message:colors.brightBlue(`Please select a shape`),
        name: 'svgShape',
        choices: ["square","triangle","circle"]
    },
    {
        type: 'input',
        message: colors.brightGreen('Please type a color for your inner shape color or a valid hexidecimal code, that must start with a # and 3 - 6 chacters between 0-9 and a-f'),
        name: "shapeColor",
        validate: validation
    },
    {
        type: 'input',
        message: colors.brightGreen('Please type a color for your background or a valid hexidecimal code, that must start with a # and 3 - 6 chacters between 0-9 and a-f'),
        name: "backgroundColor",
        validate: validation
    },
]

// Function called when program starts
function init(){
    inquirer.prompt(questions).then((data) => {
        writeToFile(shapes(data))
        console.log(data)
    }
)
}
// used to start program. Must remain bottom
init()