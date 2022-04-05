document.getElementById("add").addEventListener("click", function () {
  document.querySelector(".bg-modal").style.display = "flex";
});

document.querySelector(".closeModal").addEventListener("click", function () {
  document.querySelector(".bg-modal").style.display = "none";
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
  },
};

document.getElementById("submit").addEventListener("click", () => {
  
  newEmployee.name.first = document.getElementById("modalFirst").value;
  newEmployee.name.middle =
    document.getElementById("modalMiddle").value != ""
      ? document.getElementById("modalMiddle").value
      : null;
  newEmployee.name.last = document.getElementById("modalLast").value;

  newEmployee.emailId = document.getElementById("modalEmail").value;

  newEmployee.phoneNumber = document.getElementById("modalNumber").value;

  var selectGender = document.getElementById("modalGender");
  newEmployee.gender = selectGender.options[selectGender.selectedIndex].value;

  newEmployee.age = document.getElementById("modalAge").value;

  newEmployee.team = document.getElementById("modalTeam").value;
  newEmployee.manager = document.getElementById("modalManager").value;

  //updating address
  newEmployee.address.lineOne = document.getElementById("lineOne").value;
  newEmployee.address.lineTwo = document.getElementById("lineTwo").value;
  newEmployee.address.city = document.getElementById("modalCity").value;
  var selectState = document.getElementById("modalState");
  newEmployee.address.state =
    selectState.options[selectState.selectedIndex].text;
  newEmployee.address.pincode = document.getElementById("modalPin").value;

  var selectId = document.getElementById("modalIdType");
  newEmployee.identity.idType = selectId.options[selectId.selectedIndex].value;
  newEmployee.identity.idNumber = document.getElementById("modalIdValue").value;
  

  // console.log(empid);
  // sleep(100);

  console.log(newEmployee);
  //validation
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
               //creatinmg id of new employee
               const lastId = localStorage.getItem("lastEmpId") || 1000;
               newEmployee.id = lastId +1;
               localStorage.setItem('lastEmpId',newEmployee.id);

              var employee = JSON.parse(localStorage.getItem("employee"));
              employee.push(newEmployee);

              localStorage.setItem("employee", JSON.stringify(employee));
              
              document.querySelector(".bg-modal").style.display = "none";
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
