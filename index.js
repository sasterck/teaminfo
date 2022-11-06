// Making const requirements
const inquirer = require ('inquirer');
const Manager = require('./lib/Manager');
const Intern = require('./lib/Intern');
const Engineer = require('./lib/Engineer');
const Employee = require('./lib/Employee');
const validator = require('email-validator');

// now let's see how to generate the card aka main function of the app
async function main() {
    try {
        await prompt()
        for(let i = 0; i <teamArray.length; i++) {
            teamString = teamString + html.generateCard(teamArray[i]);
        }
    }
}
