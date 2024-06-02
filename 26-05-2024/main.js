import inquirer from "inquirer";
// Variable Initialization
let collectionOfEmployee = [];
async function startEmployeeManagementSystem() {
    console.log("*********** Welcome to Employee Management System *************");
    console.log("\n");
    let selectedOption = await inquirer.prompt([
        {
            message: "Please select an option from below list:",
            type: "list",
            name: "userSelectedOption",
            choices: [
                "Add Employee",
                "View Employee",
                "Delete Employee",
                "Update Employee",
                "Exit"
            ]
        }
    ]);
    switch (selectedOption.userSelectedOption) {
        case "Add Employee":
            addEmployee();
            break;
        case "View Employee":
            viewAllEmployee();
            break;
        case "Update Employee":
            break;
        case "Delete Employee":
            deleteEmployee();
            break;
        default:
            process.exit();
    }
}
async function addEmployee() {
    console.log("\n");
    let employeeDetail = await inquirer.prompt([
        {
            name: "employeeName",
            message: "Please enter employee name : ",
            type: "input",
        },
        {
            name: "employeeId",
            message: "Please enter employee ID : ",
            type: "number",
        },
        {
            name: "salary",
            message: "Please enter employee salary : ",
            type: "number",
        },
    ]);
    collectionOfEmployee.push({
        employeeId: employeeDetail.employeeId,
        employeeName: employeeDetail.employeeName,
        salary: employeeDetail.salary,
    });
    console.log("\n");
    console.log("****** Employee Added Successfully ! ******");
    console.log("\n");
    console.log(collectionOfEmployee[collectionOfEmployee.length - 1]);
    startEmployeeManagementSystem();
}
function viewAllEmployee() {
    console.log("*********** View All Of Your Employees **********");
    console.log("\n");
    for (let index = 0; index < collectionOfEmployee.length; index++) {
        console.log(collectionOfEmployee[index]);
        console.log("\n");
    }
    startEmployeeManagementSystem();
}
async function deleteEmployee() {
    let employeeDetail = await inquirer.prompt([
        {
            message: "Please enter employee id : ",
            type: "number",
            name: "employeeId",
        },
    ]);
    collectionOfEmployee = collectionOfEmployee.filter((x) => x.employeeId != employeeDetail.employeeId);
    console.log("********** Employee Deleted Successfully ! **********");
    console.log("\n");
    startEmployeeManagementSystem();
}
startEmployeeManagementSystem();
