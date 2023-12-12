const url = "http://localhost:3000";
const table_body = document.getElementById("table_body");

let user_data;

fetch(url + '/users')
    .then(res => res.json())
    .then(data => {
      data.forEach(user => {
        table_body.innerHTML += `<tr><td>${user.id}</td><td>${user.firstName}</td><td>${user.lastName}</td><td>${user.username}</td><td>${user.color}</td></tr>`;
      })
});