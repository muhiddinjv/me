document.getElementById('button').addEventListener('click', loadData)

function loadData() {
    // When working with AJAX, you have to do 4 things
    // 1 - Create the new XMLHTTPRequest Object
    const xhr = new XMLHttpRequest();

    // 2 - Open the connection
    xhr.open('GET', 'data.txt', true);

    // 3 - Excution of the AJAX call
    // xhr.onload = function() {
    // Codes
    // 200: Contact
    // 403: Forbidden
    // 404: Not Found
    // if (this.status === 200) {
    //     document.getElementById('output').innerHTML = `<h1>${this.responseText}</h1>`;
    // }
    // }
    xhr.onreadystatechange = function() {
        console.log('Ready State', xhr.readyState);
        // Ready States
        // 0 = Unsent
        // 1 = Opened
        // 2 = Received
        // 3 = Loading
        // 4 = Done
        if (this.status === 200 && this.readyState === 4) {
            document.getElementById('output').innerHTML = `<h1>${this.responseText}</h1>`;
        }
    }


    // 4 - Send the Request
    xhr.send();
}