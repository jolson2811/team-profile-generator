// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const Manager = require('./lib/Manager');
let employeeList = [];


// TODO: create input function
function promptManager() {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'teamManagerName',
            message: "What is your team manager's name",
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log("Please enter your team manager's name.");
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'employeeId',
            message: 'Enter employee ID',
            validate: employeeIdInput => {
                if (employeeIdInput) {
                    return true;
                } else {
                    console.log('Please enter employee ID');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'email',
            message: 'Enter employee email',
            validate: emailInput => {
                if (emailInput) {
                    return true;
                } else {
                    console.log('Please enter employee email.');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'officeNumber',
            message: 'Enter employee office number',
            validate: officeInput => {
                if (officeInput) {
                    return true;
                } else {
                    console.log('Please enter employee office number.');
                    return false;
                }
            }
        },
        {
            type: 'list',
            name: 'employeeType',
            message: 'Select from the following options.',
            choices: ['Add Engineer', 'Add Intern', 'Finish Building Team']
        },
    ]);
}

function promptEngineer() {
    return inquirer.prompt([

    ]);
}

// TODO: Create a function to initialize app
function init() {
    promptManager().then(function (res) {
        let manager = new Manager(res.teamManagerName, res.employeeId, res.email, res.officeNumber);
        employeeList.push(manager);
        if (res.employeeType == 'Add Engineer') {
            // If engineer 
        } else if (res.employeeType == 'Add Intern') {
            // If intern
        } else if (res.employeeType == 'Finish Building Team') {
            // If finished 
        }

    });
}

// Function call to initialize app
init();