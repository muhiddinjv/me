document.querySelector('#load').addEventListener('click', loadPosts);

function loadPosts() {
    // create the object
    const xhr = new XMLHttpRequest();

    // open the connection
    xhr.open('GET', 'https://jsonplaceholder.typicode.com/posts', true);

    // execute the function
    xhr.onload = function() {
        if (this.status === 200) {
            const response = JSON.parse(this.responseText);
            //   console.log(response);
            let output = '';
            response.forEach(function(post) {
                output += `
                    <h3>${post.title}</h3>
                    <p>${post.body}</p>
                 `;
            })
            document.getElementById('result').innerHTML = output;
        }
    }

    // send the request
    xhr.send();
}