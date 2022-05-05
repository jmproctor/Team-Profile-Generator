const inquirer = require("inquirer");
const fs = require("fs");
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');

const code = [];
const info = [];
const whichRole = [];
const employees = [];
function app() {
    createHTML();
    newEmployee();
};
function newEmployee() {
    inquirer
        .prompt([{
            message: "What is the name of your employee?",
            name: "name"
        },
        {
            type: "list",
            message: "What is the employee's role?",
            name: "role",
            choices: [
                "Manager",
                "Engineer",
                "Intern"
            ]
        },
        {
            message: "What is their ID number?",
            name: "id"
        },
        {
            message: "What is the employee's email?",
            name: "email"
        }
    ])
    .then(function({ name, role, id, email }){
        let roleDetails = "";
        if (role === "Manager") {
            roleInfo = "Office Number";
        } 
        else if (role === "Engineer") {
            roleInfo = "Github";
        } 
        else {
            roleInfo = "School";
        }
        inquirer.prompt([{
                message: `Please enter employee's ${roleInfo}:`,
                name: "roleDetails"
            },
            {
                message: "Do you want to add another employee?",
                type: "list",
                name: "anotherEmployee",
                choices: [
                    "yes",
                    "no"
                ]
            }
        ])
        .then(function({ roleDetails, anotherEmployee }) {
            let employeeRole = '';
            if (role === 'Manager') {
                employeeRole = new Manager(name, id, email, roleDetails);
            } else if (role === 'Engineer') {
                employeeRole = new Engineer(name, id, email, roleDetails);
            } else {
                employeeRole = new Intern(name, id, email, roleDetails);
            }
            info.push(roleDetails);
            whichRole.push(roleInfo);
            employees.push(employeeRole);
            createCard(employeeRole)
            .then(function() {
                if (anotherEmployee === 'yes') {
                    newEmployee();
                } else {
                    stopHTML();
                }
            });
        });
    });
};
function createHTML() {
    let code = `
    
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">
    <script src="https://kit.fontawesome.com/a6614c4a77.js" crossorigin="anonymous"></script>
    <title>The Team</title>
</head>
<body>
    <header class="bg-danger py-5">
        <h1 class="fs-1 text-white text-center">The Team</h1>
    </header>
    <div class="d-flex container justify-content-center">
        <div class="d-flex card-deck col-9 flex-wrap justify-content-center align-self-center">
    `;
    fs.writeFile('./dist/team_profile.html', code, function(err) {
        if (err) {
            console.log(err);
        }
    });
}

function createCard(employee) {
    return new Promise(function(resolve, reject) {
        const name = employee.getName();
        const role = employee.getRole();
        const id = employee.getId();
        const email = employee.getEmail();
        const roleInfo = whichRole
        const roleDetails = info

        let code = `

        <div class="d-flex container justify-content-center">
            <div class="d-flex card-deck col-9 flex-wrap justify-content-center align-self-center">
                <div class="card rounded shadow m-4 col-3" style="width: 15rem;">
                    <div class="card-header">
                        <img class="mw-100 mh-100" src="../images/engineer.jpg">
                    </div>
                    <div>
                        <p>${name}</p>
                        <p><i class="fas fa-microchip"></i> Engineer</p>
                        <ul class="list-group col">
                            <li class="list-group-item">ID: ${id}</li>
                            <li class="list-group-item">Email: ${email}</li>
                            <li class="list-group-item">${roleInfo}: ${roleDetails}</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
        `
        ;
        console.log('New employee added!');
        fs.appendFile('./dist/team_profile.html', code, function(err) {
            if (err) {
                return reject(err);
            };
            return resolve();
        });
    });
}
function stopHTML() {
    const code = `
        </div>
    </div>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-ka7Sk0Gln4gmtz2MlQnikT1wXgYsOg+OMhuP+IlRH9sENBO0LRn5q+8nbTov4+1p" crossorigin="anonymous"></script>
</body>
</html>
    `;
    fs.appendFile('./dist/team_profile.html', code, function(err){
        if (err) {
            console.log(err);
        };
    });
    console.log('Your team profile has been created!')
};
app();