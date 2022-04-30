// дз по promise, создать XMLHttpRequest запрос,методом POST, отправить данные по апи https://jsonplaceholder.typicode.com/users, используя promise создать функцию на успех и ошибку, НЕЛЬЗЯ ИСПОЛЬЗОВАТЬ МЕТОД fetch()

const name = document.getElementById('name');
const username = document.getElementById('surName');
const email = document.getElementById('email');
const btn = document.getElementById('btnPost');


const myPromise = ()=> {
    return new Promise( (resolve, reject) => {
        const URL = 'https://jsonplaceholder.typicode.com/users';

        const xhr = new XMLHttpRequest()
        const data = {
            name: name.value,
            username: username.value,
            email: email.value
        }

        xhr.open('POST', URL)
        xhr.responseType = 'json'


        xhr.onload = function (){
            if (xhr.status === 200){
                resolve('успешно выполнено')
            }else if (xhr.status === 404){
                reject('ошибка')
            }
        }

        xhr.setRequestHeader('Content-type', 'application/json')

        
        xhr.send(JSON.stringify(data))
    })
}


btn.addEventListener('click', myPromise)