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

  id: {
    idType: null,
    idNumber: null,
  },
};

document.getElementById("submit").addEventListener("click", () => {
  newEmployee.name.first = document.querySelector("#first").value;
  newEmployee.name.middle =
    document.querySelector("#middle").value != ""
      ? document.querySelector("#middle").value
      : null;
  newEmployee.name.last = document.querySelector("#last").value;
  // console.log(newEmployee);

  newEmployee.emailId = document.querySelector("#email").value;

  newEmployee.phoneNumber = document.querySelector("#number").value;

  var selectGender = document.getElementById("gender");
  newEmployee.gender = selectGender.options[selectGender.selectedIndex].value;

  newEmployee.age = document.getElementById("age").value;

  newEmployee.team = document.getElementById("team").value;
  newEmployee.manager = document.getElementById("manager").value;

  //updating address
  newEmployee.address.lineOne = document.querySelector(".lineOne").value;
  newEmployee.address.lineTwo = document.querySelector(".lineTwo").value;
  newEmployee.address.city = document.querySelector(".city").value;
  var selectState = document.getElementById("state");
  newEmployee.address.state =
    selectState.options[selectState.selectedIndex].text;
  newEmployee.address.pincode = document.querySelector(".pin").value;

  var selectId = document.getElementById("idType");
  newEmployee.id.idType = selectId.options[selectId.selectedIndex].value;
  newEmployee.id.idNumber = document.getElementById("idvalue").value;

  if (
    newEmployee.name.first &&
    newEmployee.name.last &&
    newEmployee.emailId &&
    newEmployee.phoneNumber &&
    newEmployee.age &&
    newEmployee.team &&
    newEmployee.manager &&
    newEmployee.address.lineOne &&
    newEmployee.address.city &&
    newEmployee.address.pincode &&
    newEmployee.id.idNumber
  ) {
    if (
      !isNaN(parseInt(newEmployee.age, 10)) &&
      parseInt(newEmployee.age, 10) > 0
    ) {
      var mes = "";
      if (newEmployee.id.idType === "Aadhar Card") {
        var regex = /^[2-9]\d{3}[\s-]?\d{4}[\s-]?\d{4}$/;
        if (!regex.test(newEmployee.id.idNumber)) msg = "Enter Valid Aadhar";
        else msg = "";
      }

      if (newEmployee.id.idType === "Pan Card") {
        var regex = /[A-Z]{5}[0-9]{4}[A-Z]{1}$/;
        if (!regex.test(newEmployee.id.idNumber)) msg = "Enter Valid PAN";
        else msg = "";
      }
      if (newEmployee.id.idType === "Driving Licence") {
        //     Where:
        // ^ represents the starting of the string.
        // ( represents the starting of group 1.
        // ( represents the starting of group 2.
        // [A-Z]{2} represents the first two characters should be upper case alphabets.
        // [0-9]{2} represents the next two characters should be digits.
        // ) represents the ending of the group 2.
        // ( ) represents the white space character.
        // | represents the or.
        // ( represents the starting of group 3.
        // [A-Z]{2} represents the first two characters should be upper case alphabets.
        // – represents the hyphen.
        // [0-9]{2} represents the next two characters should be digits.
        // ) represents the ending of the group 3.
        // ) represents the ending of the group 1.
        // ((19|20)[0-9][0-9]) represents the year from 1900-2099.
        // [0-9]{7} represents the next seven characters should be any digits from 0-9.
        // $ represents the ending of the string.
        var regex =
          /^(([A-Z]{2}[0-9]{2})( )|([A-Z]{2}-[0-9]{2}))((19|20)[0-9][0-9])[0-9]{7}$/;
        if (!regex.test(newEmployee.id.idNumber))
          msg = "Enter Valid Driving Licence number";
        else msg = "";
      }

      {
        if((newEmployee.address.pincode))
        var regex=/^[1-9]{1}[0-9]{2}[0-9]{3}$/;
          if(!regex.test(newEmployee.address.pincode))
            msg="Enter valid pincode";
          else
            msg='';
      }
      
      if (msg != "") alert(msg);
      else {
        var employee = JSON.parse(localStorage.getItem("employee"));
        employee.push(newEmployee);
        localStorage.setItem("employee", JSON.stringify(employee));
        document.querySelector(".bg-modal").style.display = "none";
        location.reload();
      }
    } else {
      alert("Enter a valid Age !!!!!");
    }
  } else {
    alert("please Enter all details!!!!!");
  }
});
