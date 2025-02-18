let btn = document.getElementById("button");

btn.addEventListener("click", function (event) {
  event.preventDefault();

  const inputFields = document.querySelectorAll(".form-input");
  let emptyFields = [];

  inputFields.forEach((field) => {
    if (field.value.trim() === "") {
      emptyFields.push(field);
    }
  });

  if (emptyFields.length > 0) {
    alert("Please fill out all fields.");
    emptyFields[0].focus();
    return;
  }

  document.querySelector(".container1").style.display = "none";
  document.querySelector(".container2").style.display = "block";
  document.querySelector("body").style.backgroundColor = "white";

  document.getElementsByClassName("name").innerText =
    document.getElementById("form-name").value;
  document.getElementById("fatherName").innerText =
    document.getElementById("form-father-name").value;
  document.getElementById("dob").innerText =
    document.getElementById("form-dob").value;
  document.getElementById("gender").innerText =
    document.getElementById("form-gender").value;
  document.getElementById("Mstatus").innerText =
    document.getElementById("form-Mstatus").value;
  document.getElementById("Nationality").innerText =
    document.getElementById("form-Nationality").value;
  document.getElementById("lang").innerText =
    document.getElementById("form-lang").value;
  document.getElementById("hobby").innerText =
    document.getElementById("form-hobby").value;
  document.getElementById("address").innerText =
    document.getElementById("form-address").value;
  document.getElementById("no").innerText =
    document.getElementById("form-no").value;
  document.getElementById("objective").innerText =
    document.getElementById("form-objective").value;
  document.getElementById("edu1").innerText =
    document.getElementById("form-edu1").value;
  document.getElementById("edu2").innerText =
    document.getElementById("form-edu2").value;
  document.getElementById("edu3").innerText =
    document.getElementById("form-edu3").value;
  document.getElementById("pro").innerText =
    document.getElementById("form-pro").value;
  document.getElementById("work").innerText =
    document.getElementById("form-work").value;
});
