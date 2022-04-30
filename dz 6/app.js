const URL = 'https://jsonplaceholder.typicode.com/users';

const userId = document.getElementById('id')
const namePost = document.getElementById('name')
const surnamePost = document.getElementById('surname')
const emailPost = document.getElementById('email')

const btnPost = document.getElementById('btnPost')
const btnDeleteuser = document.getElementById('btnDeleteuser')
const btnPatch = document.getElementById('btnPatch')

//post
const postUser = () => {
    const dataUser = {
        name: namePost.value,
        surname: surnamePost.value,
        email: emailPost.value
    }

    let post = {
        method: 'POST',
        headers: {
            'Content-type': 'application/json'
        },
        body: JSON.stringify(dataUser)
    }

    fetch(URL, post).then(response => response.json())
}

btnPost.addEventListener('click', postUser);


//patch
function getUserID (){
    const id = userID.value;

    fetch(`${URL}/${id}`)
        .then(response => {
            if (response.ok){
                return response.json()
            }
            else {
                return `Error ${response.status}`
            }
        })
            .then(data => console.log(data))
}

function patchUserID (){
    const dataUser = {
        name: namePost.value,
        surname: surnamePost.value,
        email: emailPost.value
    }

    let patch = {
        method: 'PATCH',
        headers: {
            'Content-tye': 'application/json'
        },
        body: JSON.stringify(dataUser)
    }
}

btnPatch.addEventListener('click', patchUserID)


//Метод DELETE
function deleteUser () {
    const id = document.getElementById('deleteID')
    const dataUser = {
        name: namePost.value,
        surname: surnamePost.value,
        email: emailPost.value
    }
    const DELETE = {
        method: 'DELETE',
        headers: {
            'Content-type': 'application/json'
        },
        body: JSON.stringify(dataUser)
    }
}

btnDeleteuser.addEventListener('click', deleteUser);