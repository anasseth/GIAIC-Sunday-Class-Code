// Defining Types
interface Employee {
    employeeId: number;
    employeeName: string;
    salary: number;
}

// Variable Initialization
let collectionOfEmployee: Employee[] = [
    {
        employeeId: 7625,
        employeeName: "Fahad Khan",
        salary: 25000
    },
    {
        employeeId: 7487,
        employeeName: "Imran Sindhi",
        salary: 50000
    },
    {
        employeeId: 242536,
        employeeName: "Atif Aslam",
        salary: 100000,
    },
];

let filterBySalary = collectionOfEmployee
    .filter((employee) => employee.salary >= 50000);

let filterByEmployeeId = collectionOfEmployee
    .filter((employee: Employee) => employee.employeeId != 7487); // woh employee jis ki id barabar hai 7487

let filterByEmployeeName = collectionOfEmployee
    .filter((employee: Employee) => employee.employeeName.includes("Atif"))
