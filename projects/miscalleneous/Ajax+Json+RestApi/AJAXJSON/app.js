document.getElementById('button1').addEventListener('click', loadEmployee);
document.getElementById('button2').addEventListener('click', loadEmployees);

function loadEmployee() {
    // 1 - Create the object
    const xhr = new XMLHttpRequest();
    // 2 - Open the connection
    xhr.open('GET', 'employee.json', true);
    // 3 - Execute the funtion
    xhr.onload = function() {
            if (this.status === 200) {
                // Get the response as an Object
                const employee = JSON.parse(this.responseText);
                // Build the Template
                const output = `
               <ul>
                    <li>ID: ${employee.id}</li>
                    <li>Name: ${employee.name}</li>
                    <li>Company: ${employee.company}</li>
                    <li>Job: ${employee.job}</li>
               </ul>
            `;
                // Print the HTML
                document.getElementById('employee').innerHTML = output;
            }
        }
        // 4 - Send the request
    xhr.send();
}

function loadEmployees() {
    const xhr = new XMLHttpRequest();
    xhr.open('GET', 'employees.json', true);
    xhr.onload = function() {
        if (this.status === 200) {
            const employees = JSON.parse(this.responseText);
            let output = '';
            employees.forEach(function(employee) {
                output += `
                 <ul>
                    <li>ID: ${employee.id}</li>
                    <li>Name: ${employee.name}</li>
                    <li>Company: ${employee.company}</li>
                    <li>Job: ${employee.job}</li>
                </ul>
                 `;
            });
            document.getElementById('employees').innerHTML = output;
        }
    }
    xhr.send();
}