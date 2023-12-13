const url = "http://localhost:3000";
const section = document.getElementById("app");
const ul = document.createElement("ul")


ul.classList.add("list-group")
section.classList.add("container-xl")
section.appendChild(ul);






let user_data;

fetch(url + '/users')
    .then(res => res.json())
    .then(data => {
      console.log(data)
      data.forEach(user => {
        ul.innerHTML += `<li class="list-group-item" style="background: linear-gradient(270deg, rgba(0,35,36,0.9) 10%, ${user.color});">${user.firstName} ${user.lastName} <br> ${user.username}</li>`;
      })
});

