function editNav() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

// DOM Elements
const modalbg = document.querySelector(".bground");
const modalBtn = document.querySelectorAll(".modal-btn");
const formData = document.querySelectorAll(".formData");

const sendBtn = document.querySelector(".btn-submit")
const closeCross = document.querySelector(".close");

sendBtn.addEventListener("click", sending);

/**
 * Permet d'envoyer le formulaire
 * @param {Event} event 
 */
function sending(event) {
  event.preventDefault();
  if (checkFirstName() && checkLastName() && checkEmail() && checkBirthdate() && checkQuantity() && checkCondition() && checkTown()) {
    console.log("ok")
  }else{
    console.log("ko")
  }
}

let regexName = /^[A-Za-z - éèàùîûôê]+$/;
let regexMail = /\b[\w\.-]+@[\w\.-]+\.\w{2,4}\b/gi;
let regexNum = /[0-9]*[^-e]+$/;


//Vérification du formulaire grâce au regex
function verifyInput(input, regex, errorTag, errorMessage) {
  let result = input.value.match(regex);
  if (result && input.value.length >= 2) {
    input.style.cssText += 'border:0px red solid';
    errorTag.innerHTML = ''
    return true;
  } else {
    input.style.cssText += 'border:2px red solid';
    errorTag.innerHTML = errorMessage;
    return false;
  }
}

//Vérification formulaire sans restriction de nb de caractères
function verifyInputRegex(input, regex, errorTag,errorMessage){
  let filter = input.value.match(regex);
  if(filter){
    input.style.cssText += 'border:0px red solid';
    errorTag.innerHTML = ''
    return true
  }else{
    input.style.cssText += 'border:2px red solid';
    errorTag.innerHTML = errorMessage;
    return false;
  }
}

//Prénom

let firstName = document.getElementById('first');
let firstNameError = document.getElementById('firstNameErrorMsg')

function checkFirstName() {
  return verifyInput(firstName, regexName, firstNameError, "Le prénom dois contenir au minimum 2 caractères et uniquement des lettres")
};
firstName.addEventListener("change", checkFirstName);

//Nom

let lastName = document.getElementById('last');
let lastNameError = document.getElementById('lastNameErrorMsg')

function checkLastName() {
  return verifyInput(lastName, regexName, lastNameError, "Le nom dois contenir au minimum 2 caractères et uniquement des lettres")
};
lastName.addEventListener("change", checkLastName);

//Email

let email = document.getElementById('email');
let emailError = document.getElementById('emailErrorMsg')

function checkEmail() {
  return verifyInput(email, regexMail, emailError, "Le format de l'adresse email n'est pas correcte")
};
email.addEventListener("change", checkEmail);

//Date
let birthdate = document.getElementById("birthdate");
let birthdateError = document.getElementById('birthdateErrorMsg');

function checkBirthdate() {
  if (!birthdate.value) {
    birthdateError.innerHTML = "Vous devez entrer votre date de naissance."
    birthdate.style.cssText += 'border:2px red solid';
    return false
  } else {
    birthdateError.innerHTML = "";
    birthdate.style.cssText += 'border:0px red solid';
    return true
  }
};
birthdate.addEventListener("change", checkBirthdate);

//Number of tournament

let quantity = document.getElementById('quantity');
let quantityError = document.getElementById('quantityErrorMsg');

function checkQuantity() {
  return verifyInputRegex(quantity, regexNum,quantityError,"Le champs ne peux pas être vide")};
  /*
  if (!quantity.value) {
    quantityError.innerHTML = "Le champs ne peux pas être vide"
    quantity.style.cssText += 'border:2px red solid';
    console.log(quantityFilter)
    return true
  } else {
    quantityError.innerHTML = ""
    quantity.style.cssText += 'border:0px red solid';
    console.log(quantityFilter)
    return false
  }
};*/
quantity.addEventListener("change", checkQuantity);

// Location
let locationTown = document.querySelectorAll('input[type=radio]')
let locationTownError = document.getElementById("locationTownError");

function checkTown() {
let locationName = document.querySelector("input[name='location']:checked")
console.log(locationName)
  
  if (locationName) {
    locationTownError.innerHTML = ""
    return true
  } else {
    locationTownError.innerHTML = "Veuillez séléctionner une ville"
    return false
  }
}

for (let i = 0; i < locationTown.length; i++) {
  let location = locationTown[i];
  console.log(location)
  
  console.log(location.checked)
  location.addEventListener("change", checkTown)
  };


//Checkbox condition

let checkedCondition = document.getElementById('checkbox1');
let checkConditionError = document.getElementById('checkedErrorMsg');

function checkCondition() {
  if (checkedCondition.checked === true) {
    checkConditionError.innerHTML = "";
    checkedCondition.style.cssText += 'border:0px red solid';
    return true
  } else {
    checkConditionError.innerHTML = "Vous devez vérifier que vous acceptez les termes et conditions."
    checkedCondition.style.cssText += 'border:2px red solid';
    return false
  }
}
checkedCondition.addEventListener("change", checkCondition);


// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));
closeCross.addEventListener("click", closeModal);

// launch modal form
function launchModal() {
  modalbg.style.display = "block";
}
// close modal form
function closeModal() {
  modalbg.style.display = "none";
}


