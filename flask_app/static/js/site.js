
function getUsers(){
    fetch('http://localhost:5000/users')
        .then(result =>  result.json())
        .then(data => {
            for( let i = 0; i < data.length; i++){
                let row = document.createElement('tr');

                let name = document.createElement('td');
                name.innerHTML = data[i].user_name;
                row.appendChild(name);
                
                let email = document.createElement('td');
                email.innerHTML = data[i].email;
                row.appendChild(email);
                
                users.appendChild(row);
            }
        })
        users.innerHTML = '';
        user_name.value = '';
        email.value = '';
}

function addUser() {
    myForm.onsubmit = function(e) {
        e.preventDefault();
        // create FormData object from javascript and send it through a fetch post request.
        var form = new FormData(myForm);
        // this how we set up a post request and send the form data.
        fetch("http://localhost:5000/create/user", { method :'POST', body : form})
            .then( response => response.json() )
            .then( data => getUsers())
        
        }
}

addUser();
getUsers();
