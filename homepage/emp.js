// fetch("../data.json")
//   .then(function (response) {
//     return response.json();
//   })
//   .then(function (data) {
//     // console.log(localStorage.getItem('employee'));
//     if((localStorage.getItem('employee') || []).length == 0 )
//     {
//       window.localStorage.setItem('employee', JSON.stringify(data.employee));
//       readData(JSON.parse(localStorage.getItem('employee')));
//     }
//     else
//     readData(JSON.parse(localStorage.getItem('employee')));
//   })
//   .catch(function (err) {
//     console.log("error: " + err);
//   });

//using DOMcontent loaded for the sake of clarity
document.addEventListener("DOMContentLoaded", function () {
  //checking the localStorage for the first 
  if ((localStorage.getItem("employee") || []).length == 0) {
    window.localStorage.setItem("employee", JSON.stringify([]));
    readData(JSON.parse(localStorage.getItem("employee")));
  } else {
    readData(JSON.parse(localStorage.getItem("employee")));
  }
});

var grid = document.getElementsByClassName("grid-item");

function readData(employee) {
  // console.log(employee);

  for (var i = 0; i < employee.length; i++) {
    //creating elements for the card
    var card = document.createElement("div");
    var img = document.createElement("img");
    var container = document.createElement("div");
    var name = document.createElement("p");
    var ageGender = document.createElement("p");
    var team = document.createElement("p");
    var manager = document.createElement("p");
    var del = document.createElement("span");

    //assigining the class name for the elements
    card.className = "card";
    container.className = "container";
    name.className = "name";
    ageGender.className = "age-gender";
    team.className = "team";
    manager.className = "manager";
    del.className = "del";

    card.setAttribute("id", i);
    card.setAttribute("onclick", "fullDetail(this.id)");
    
    //Appending to the main grid and creating a DOM for the card
    grid[0].appendChild(card);

    //setting avatar on the basis of the gender
    if (employee[i].gender.toUpperCase() == "MALE") {
      img.src = "../img/m_avatar.png";
      img.alt = "../img/m_avatar.png";
    } else {
      img.src = "../img/f_avatar.png";
      img.alt = "../img/f_avatar.png";
    }

    del.innerHTML = "&times;";
    del.setAttribute("id", i);
    del.setAttribute("onclick", "deleteEmployee(this.id)");
    card.append(img, container, del);

    name.innerHTML =
      "<b>" +
      (employee[i].name.first ? employee[i].name.first : "") +
      " " +
      (employee[i].name.middle ? employee[i].name.middle : "") +
      " " +
      (employee[i].name.last ? employee[i].name.last : "") +
      "</b>";

    ageGender.innerHTML = employee[i].age + " " + employee[i].gender;
    team.innerHTML = employee[i].team;
    manager.innerHTML = employee[i].manager;

    container.append(name, ageGender, team, manager);
  }
}

function deleteEmployee(id) {
  // var toRemove = JSON.parse(localStorage.employee)[id];
  var Remove = localStorage.employee;

  if (Remove == null) var toRemove = [];
  else var toRemove = JSON.parse(Remove);

  toRemove.splice(id, 1);

  localStorage.setItem("employee", JSON.stringify(toRemove));
  location.reload();
  // console.log(toRemove);
}

function fullDetail(id) {
  window.open("../screen2/screen2.html?id=" + id);
}
