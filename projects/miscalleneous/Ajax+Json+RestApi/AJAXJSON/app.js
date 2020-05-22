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
    xhr.open('GET', 'contacts.json', true);
    xhr.onload = function() {
        if (this.status === 200) {
            const contacts = JSON.parse(this.responseText);
            let output = '';
            contacts.forEach(function(employee) {
                output += `
                 <ul>
                    <li>ID: ${employee.id}</li>
                    <li>Status: ${employee.status}</li>
                    <li>Name: ${employee.name}</li>
                    <li>Country: ${employee.country}</li>
                    <li>City: ${employee.city}</li>
                    <li>Company: ${employee.company}</li>
                    <li>Job: ${employee.job}</li>
                    <li>Description: ${employee.description}</li>
                    <li>Email: ${employee.email}</li>
                    <li>Phone: ${employee.phone}</li>
                    <li>Adress: ${employee.address}</li>

                </ul>
                 `;
            });
            document.getElementById('employees').innerHTML = output;
        }
    }
    xhr.send();
}