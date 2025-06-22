console.log("Hello, World!");

const clicked = () => {


  const btn = document.getElementById("btnClick");
  // console.log `random number is `(Math.floor(Math.random() * 255));
  let r,g,b
  r=Math.floor(Math.random() * 255);
  g=Math.floor(Math.random() * 255);
  b=Math.floor(Math.random() * 255);
  Color = `rgb(${r}, ${g}, ${b})`;

  btn.style.backgroundColor = Color;

  
}
 function getName(event) {
  console.log(event.target.value);

 }
 function changeColor(event) {
    const inputBox = event.target;
    inputBox.style.backgroundColor = inputBox.value;
}
// function sum(num1,num2,p) {
  // p(num1 + num2);
// }
// function print(res){
  // console.log(res);
// }
// sum(1,2, print) 
// let student1 = {
//   name: "John",
//   age: 20,
//   phone: "123-456-7890",
//   address: {
//     home:{ place:"kozhikode"},
//     college:{ place:"ernakulam"}
//   },
// } 
// let student2 = {
//   name: "jane",
//   age: 23,
//   phone: "143-456-7890",
//   address: {
//     home:{ place:"kannur"},
//     college:{ place:"ernakulam"}
//   },
// } 
// let student3 = {
//   name: "doe",
//   age: 20,
//   phone: "123-456-7860",
//   address: {
//     home:{ place:"kozhikode"},
//     college:{ place:"ernakulam"}
//   },
// } 
//   let students =[ student1, student2, student3]

//   console.log(students[2]); 

// function checkName(e) {
//   let Name =e.target.value;
//   console.log(Name.length); 
//   if (Name.length < 12 && Name.length > 3) {
//     console.log("Valid Name");
//     document.getElementById("nameError").innerHTML = "valid Name";
//     document.getElementById("nameError").style.color = "green";
//   } 
//   else {
//     console.log("Invalid Name");
//     document.getElementById("nameError").innerHTML = "Name should be between 3 and 12 characters";
//     document.getElementById("nameError").style.color = "red";
//   }
// }



// function checkEmail(e) {
//   let email = e.target.value;
//   const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//   console.log(emailRegex.test(email));
//   if(!emailRegex.test(email)) {
//     console.log("Invalid Email");
//     document.getElementById("emailError").innerHTML = "Invalid Email";
//     document.getElementById("emailError").style.color = "red";
//   }
//   else {
//     console.log("Valid Email");
//     document.getElementById("emailError").innerHTML = "Valid Email";
//     document.getElementById("emailError").style.color = "green";
//   }
// }



// function checkPassword(e) {
//   let password = e.target.value;
//   const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/;
//   console.log(passwordRegex.test(password));
//   if (!passwordRegex.test(password)) {
//     console.log("Invalid Password");
//     document.getElementById("passwordError").innerHTML = "Password must be at least 8 characters long, contain at least one uppercase letter, one lowercase letter, and one number";
//     document.getElementById("passwordError").style.color = "red";
//   } else {
//     console.log("Valid Password");
//     document.getElementById("passwordError").innerHTML = "Valid Password";
//     document.getElementById("passwordError").style.color = "green";
//   }
  // if (password.length < 8) {
  //   console.log("Password must be at least 8 characters long");
  //   document.getElementById("passwordError").innerHTML = "Password must be at least 8 characters long";
  //   document.getElementById("passwordError").style.color = "red";
  // } else {
  //   console.log("Valid Password");
  //   document.getElementById("passwordError").innerHTML = "Valid Password";
  //   document.getElementById("passwordError").style.color = "green";
  // }
// }
function checkName(e) {
  let Name = e.target.value;
  if (Name.length >= 3 && Name.length <= 12) {
    document.getElementById("nameError").innerHTML = "Valid Name";
    document.getElementById("nameError").style.color = "green";
    return true;
  } else {
    document.getElementById("nameError").innerHTML = "Name should be between 3 and 12 characters";
    document.getElementById("nameError").style.color = "red";
    return false;
  }
}

function checkEmail(e) {
  let email = e.target.value;
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (emailRegex.test(email)) {
    document.getElementById("emailError").innerHTML = "Valid Email";
    document.getElementById("emailError").style.color = "green";
    return true;
  } else {
    document.getElementById("emailError").innerHTML = "Invalid Email";
    document.getElementById("emailError").style.color = "red";
    return false;
  }
}

function checkMessage(e) {
  let message = e.target.value;

  if (message.length >= 10) {
    document.getElementById("messageError").innerHTML = "Message looks good";
    document.getElementById("messageError").style.color = "green";
    return true;
  } else {
    document.getElementById("messageError").innerHTML = "Message should be at least 10 characters";
    document.getElementById("messageError").style.color = "red";
    return false;
  }
}

function submitForm(event) {
  event.preventDefault();

  let nameValid = checkName({ target: document.getElementById('name') });
  let emailValid = checkEmail({ target: document.getElementById('email') });
  let messageValid = checkMessage({ target: document.getElementById('message') });

  if (nameValid && emailValid && messageValid) {
    document.getElementById("successMessage").style.display = "block";
    document.getElementById("contactForm").reset();

    // Clear error messages after submission
    document.getElementById("nameError").innerHTML = "";
    document.getElementById("emailError").innerHTML = "";
    document.getElementById("messageError").innerHTML = "";

  } else {
    document.getElementById("successMessage").style.display = "none";
  }
}
