fetch("../data.json")
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    // console.log(localStorage.getItem('employee'));
    if((localStorage.getItem('employee') || [] ).length === 0 )
    {
      window.localStorage.setItem('employee', JSON.stringify(data.employee));
      displayCard(JSON.parse(localStorage.getItem('employee')));
    }
    else
    displayCard(JSON.parse(localStorage.getItem('employee')));
  })
  .catch(function (err) {
    console.log("error: " + err);
});


//diff between document.load and DOMContentLoaded
//using DOMcontent loaded for the sake of clarity
// document.addEventListener("DOMContentLoaded", function () {
//   //checking the localStorage for the first 
//   if ((localStorage.getItem("employee") || []).length == 0) {
//     window.localStorage.setItem("employee", JSON.stringify([]));
//     readData(JSON.parse(localStorage.getItem("employee")));
//   } else {
//     readData(JSON.parse(localStorage.getItem("employee")));
//   }
// });

var grid = document.getElementsByClassName("grid-item");

function displayCard(employee) {
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

    //use data attributwes
    card.setAttribute("data-empid", employee[i].id);
    card.setAttribute("onclick", "fullDetail(event);");
    
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
    del.setAttribute("data-id", employee[i].id);
    del.setAttribute("onclick", "deleteEmployee(event)");
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

function deleteEmployee(event) {
  console.log(event.target.dataset.id);
  var Remove = localStorage.employee;

  if (Remove ===  null) var toRemove = [];
  else var toRemove = JSON.parse(Remove);

  const updatedArr = toRemove.filter(ele => { return ele.id != event.target.dataset.id });
  
  toRemove = updatedArr;
  localStorage.setItem("employee", JSON.stringify(toRemove));
  
  // The reload() method reloads the current document. same as the reloade button in the browser
  location.reload();
  
}

function fullDetail(event) {
  window.open("../screen2/screen2.html?id=" + event.target.dataset.empid);
}
