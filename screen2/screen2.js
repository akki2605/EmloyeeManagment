const urlParam = new URLSearchParams(location.search);
const id = urlParam.get("id");
const grid = document.querySelector(".full");
var toUpdateEmployee = JSON.parse(localStorage.employee);
var index;
var employee = JSON.parse(localStorage.employee);
for (let i = 0; i < employee.length; i++) {
  if(id== employee[i].id)
  {
    index = i;
    employee = employee[i];
    break;
  } 
}

(() => {
  // console.log(employee);
  //creating elements for the card
  var card = document.createElement("div");
  var img = document.createElement("img");
  var container = document.createElement("div");
  var empName = document.createElement("p");
  var ageGender = document.createElement("p");
  var email = document.createElement("p");
  var team = document.createElement("p");
  var idType = document.createElement("p");
  var address = document.createElement("address");
  var edit = document.createElement("button");

  //assigining the class name for the elements
  card.className = "card";
  container.className = "container";
  empName.setAttribute("id", "name");
  ageGender.setAttribute("id", "age-gender");
  email.setAttribute("id", "email");
  team.setAttribute("id", "team");
  idType.setAttribute("id", "id");
  address.className = "address";
  edit.className = "edit";

  grid.appendChild(card);

  if (employee.gender.toUpperCase() == "MALE") {
    img.src = "../img/m_avatar.png";
    img.alt = "../img/m_avatar.png";
  } else {
    img.src = "../img/f_avatar.png";
    img.alt = "../img/f_avatar.png";
  }

  edit.setAttribute("id", "btn");
  edit.innerHTML = "Edit";

  card.append(img, container, edit);

  empName.innerHTML =
    "<b>Name : " +
    employee.name.first +
    " " +
    (employee.name.middle ? employee.name.middle : "") +
    " " +
    employee.name.last +
    "</b>";

  ageGender.innerHTML =
    "<b>Age : </b>" + employee.age + " <b>Gender: </b>" + employee.gender;
  email.innerHTML = "<b>Email :</b>" + employee.emailId;
  team.innerHTML =
    "<b>Team : </b>" + employee.team + " <b>Manager : </b>" + employee.manager;
  idType.innerHTML =
    "<b> Id : </b>" +
    employee.identity.idType +
    " <b>No. : </b>" +
    employee.identity.idNumber;
  address.innerHTML =
    "<b>Address :</b> " +
    employee.address.lineOne +
    ', <br /><p style="padding-left: 140px; margin: unset">' +
    employee.address.lineTwo +
    ",<br />" +
    employee.address.city +
    "-" +
    employee.address.pincode +
    "<br />" +
    employee.address.state;

  container.append(empName, ageGender, email, team, idType, address);
})();

document.getElementById("btn").addEventListener("click", function () {
  document.querySelector(".bg-modal").style.display = "flex";
});

var newEmployee = {
  name: {
    first: null,
    middle: null,
    last: null,
  },

  emailId: null,
  phoneNumber: null,
  gender: null,
  age: null,
  team: null,
  manager: null,
  address: {
    lineOne: null,
    lineTwo: null,
    city: null,
    state: null,
    pincode: null,
  },
  id:null,
  identity: {
    idType: null,
    idNumber: null,
  }
};
//add empluyee id
// pre populating the modal
(() => {
  document.getElementById("modalFirst").value = employee.name.first;
  document.getElementById("modalMiddle").value = employee.name.middle
    ? employee.name.middle
    : "";
  document.getElementById("modalLast").value = employee.name.last;
  document.getElementById("modalEmail").value = employee.emailId;
  document.getElementById("modalNumber").value = employee.phoneNumber;
  document.getElementById("modalGender").selectedIndex =
    employee.gender.toUpperCase() == "MALE" ? 0 : 1;
  document.getElementById("modalAge").value = employee.age;
  document.getElementById("modalIdType").selectedIndex =
    employee.identity.idType == "Aadhar Card"
      ? 0
      : employee.identity.idType == "Pan Card"
      ? 1
      : 2;

  document.getElementById("modalIdValue").value = employee.identity.idNumber;
  document.getElementById("modalTeam").value = employee.team;
  document.getElementById("modalManager").value = employee.manager;
  document.getElementById("lineOne").value = employee.address.lineOne;
  document.getElementById("lineTwo").value = employee.address.lineTwo;
  document.getElementById("modalCity").value = employee.address.city;
  //loop for state
  var state = document.getElementById("modalState");
  for (var i, j = 0; (i = state.options[j]); j++) {
    if (i.value == employee.address.state) {
      state.selectedIndex = j;
      break;
    }
  }
  document.getElementById("modalPin").value = employee.address.pincode;
})();


document.getElementById('submit').addEventListener('click', function () {


  newEmployee.name.first = document.getElementById("modalFirst").value;
  newEmployee.name.middle =
    document.getElementById("modalMiddle").value != ""
      ? document.getElementById("modalMiddle").value
      : null;
  newEmployee.name.last = document.getElementById("modalLast").value;
  // console.log(newEmployee);

  newEmployee.emailId = document.getElementById("modalEmail").value;

  newEmployee.phoneNumber = document.getElementById("modalNumber").value;

  var selectGender = document.getElementById("modalGender");
  newEmployee.gender = selectGender.options[selectGender.selectedIndex].value;

  newEmployee.age = document.getElementById("modalAge").value;
  newEmployee.team = document.getElementById("modalTeam").value;
  newEmployee.manager = document.getElementById("modalManager").value;

  //updating address
  newEmployee.address.lineOne = document.querySelector(".lineOne").value;
  newEmployee.address.lineTwo = document.querySelector(".lineTwo").value;
  newEmployee.address.city = document.getElementById("modalCity").value;
  var selectState = document.getElementById("modalState");
  newEmployee.address.state =
    selectState.options[selectState.selectedIndex].text;
  newEmployee.address.pincode = document.getElementById("modalPin").value;

  var selectId = document.getElementById("modalIdType");
  newEmployee.identity.idType = selectId.options[selectId.selectedIndex].value;
  newEmployee.identity.idNumber = document.getElementById("modalIdValue").value;

  newEmployee.id=employee.id;

  //validating the inputs
  if (newEmployee.name.first && newEmployee.name.last && newEmployee.emailId && newEmployee.phoneNumber && newEmployee.age && newEmployee.team && newEmployee.manager && newEmployee.address.lineOne && newEmployee.address.city && newEmployee.address.pincode && newEmployee.identity.idNumber ) {
    if(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(newEmployee.emailId)){

      if (!isNaN(parseInt(newEmployee.age, 10)) && parseInt(newEmployee.age, 10) > 0) {
        var msg = "";
        if (newEmployee.identity.idType === "Aadhar Card" ) {
          var regex = /^[2-9]\d{3}\d{4}\d{4}$/;
          if (!regex.test(newEmployee.identity.idNumber) || !(newEmployee.identity.idNumber.length === 12)) msg = "Enter Valid Aadhar";
          else msg = "";
        }

        if (newEmployee.identity.idType === "Pan Card") {
          var regex = /[A-Z]{5}[0-9]{4}[A-Z]{1}$/;
          if (!regex.test(newEmployee.identity.idNumber)) msg = "Enter Valid PAN";
          else msg = "";
        }
        
        if (newEmployee.identity.idType === "Driving Licence") {
          var regex =
            /^(([A-Z]{2}[0-9]{2})( )|([A-Z]{2}-[0-9]{2}))((19|20)[0-9][0-9])[0-9]{7}$/;
          if (!regex.test(newEmployee.identity.idNumber))
            msg = "Enter Valid Driving Licence number";
          else msg = "";
        }
        if (msg != "") 
          alert(msg);
        else if((newEmployee.address.pincode))
        {
          var regex=/^[1-9]{1}[0-9]{2}[0-9]{3}$/;
          if(!regex.test(newEmployee.address.pincode))
            alert("Enter valid pincode");
          else{
            toUpdateEmployee.splice(index, 1, newEmployee);
            localStorage.setItem("employee", JSON.stringify(toUpdateEmployee));
            location.reload();
          }
        }
    } 
    else {
      alert("Enter a valid Age !!!!!");
    }
      
    }else{
      alert("Enter a valid EmailId")
    }
} 
else{
  alert("please Enter all details!!!!!");
}
  
});
//geting updated value


document.querySelector(".closeModal").addEventListener("click", function () {
  document.querySelector(".bg-modal").style.display = "none";
});


//toUpdateEmployee.splice(index, 1, newEmployee);
        // localStorage.setItem("employee", JSON.stringify(toUpdateEmployee));
        // location.reload();