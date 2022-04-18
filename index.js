// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const Engineer = require('./lib/Engineer');
const Manager = require('./lib/Manager');
const Intern = require('./lib/Intern');
let employeeList = [];


// TODO: create input function
function promptManager() {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'teamManagerName',
            message: "What is the team manager's name",
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log("Please enter the team manager's name.");
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
// engineer questions
function promptEngineer() {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'engineerName',
            message: "What is the engineer's name",
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log("Please enter the engineer's name.");
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
            name: 'github',
            message: "Enter employee's GitHub username.",
            validate: githubInput => {
                if (githubInput) {
                    return true;
                } else {
                    console.log('Please enter GitHub username.');
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

// intern questions
function promptIntern() {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'internName',
            message: "What is the intern's name",
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log("Please enter the intern's name.");
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
            name: 'school',
            message: "Enter the intern's school.",
            validate: githubInput => {
                if (githubInput) {
                    return true;
                } else {
                    console.log('Please enter GitHub username.');
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

// TODO: Create a function to initialize app
function init() {
    promptManager().then(function (res) {
        let manager = new Manager(res.teamManagerName, res.employeeId, res.email, res.officeNumber);//create instance of manager for employee list
        employeeList.push(manager);//add manager to employee list
        if (res.employeeType == 'Add Engineer') {
            //call promptEngineer
            promptEngineer().then(function (res) {
                //create instance of engineer
                let engineer = new Engineer(res.engineerName, res.employeeId, res.email, res.github)
                //push to employee list
                employeeList.push(engineer);
                console.log(employeeList);
            });
        } else if (res.employeeType == 'Add Intern') {
            // call promptIntern
            promptIntern().then(function (res) {
                //create instance of engineer
                let intern = new Intern(res.internName, res.employeeId, res.email, res.school)
                //push to employee list
                employeeList.push(intern);
                console.log(employeeList);
            });
        } else if (res.employeeType == 'Finish Building Team') {
            //build html by looping through employee list build card per item in array.
        }

    });
}

// Function call to initialize app
init();