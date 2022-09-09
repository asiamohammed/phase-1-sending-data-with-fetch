// Add your code here


function submitData(userName, email) {
    debugger
    var userData = {
        name: userName,
        email: email
    };
    return fetch("http://localhost:3000/users", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json"
        },
        body: JSON.stringify(userData)
    })
        .then(response => response.json())
        .then(data => {
            console.log(data);
        })
        .catch(error => {
            document.querySelector('div').innerHTML = error;
        });
}



console.log(submitData("Steve", "steve@steve.com"))