document.getElementById('name').addEventListener('input', validateName);
document.getElementById('email').addEventListener('input', validateEmail);
document.getElementById('phone').addEventListener('input', validatePhone);
document.getElementById('street').addEventListener('input', validateStreet);
document.getElementById('zip').addEventListener('input', validateZip);
document.getElementById('city').addEventListener('input', validateCity);
document.getElementById('submitAddress').addEventListener('click', validateForm);

function validateName() {
  let x = document.forms["order-form"]["name"].value;
  if (x.length < 2 || x.length > 50) {
    setElementsToRed('name');
    document.getElementById('nameHelp').innerHTML = 'Name must contain 2-50 characters';
  } else {
    document.getElementById('nameHelp').innerHTML = ' ';
    setElementsToGreen('name');
  }
}

function validateEmail() {
  let x = document.forms["order-form"]["email"].value;
  if (!x.includes('@') || x.length > 50) {
    setElementsToRed('email');
    document.getElementById('emailHelp').innerHTML = 'Email must contain @ and be under 50 characters';
  } else {
    document.getElementById('emailHelp').innerHTML = ' ';
    setElementsToGreen('email');
  }
}

function validatePhone() {
  let x = document.forms["order-form"]["phone"].value;
  const phoneRegex = /^[\d()\-]{1,50}$/;
  if (!phoneRegex.test(x)) {
    setElementsToRed('phone');
    document.getElementById('phoneHelp').innerHTML = 'Phone must only contain "0-9 - ()"';
  } else {
    document.getElementById('phoneHelp').innerHTML = ' ';
    setElementsToGreen('phone');
  }
}

function validateStreet() {
  let x = document.forms["order-form"]["street"].value;
  if (x.length <= 50 && x.length != 0) {
    document.getElementById('streetHelp').innerHTML = ' ';
    setElementsToGreen('street');
  } else {
    setElementsToRed('street');
    document.getElementById('streetHelp').innerHTML = 'Street must be under 50 characters';
  }
}

function validateZip() {
  let x = document.forms["order-form"]["zip"].value;
  const zipRegex = /^\d{3} \d{2}$/;
  if (zipRegex.test(x) && x.length != 0) {
    document.getElementById('zipHelp').innerHTML = ' ';
    setElementsToGreen('zip');
  } else {
    setElementsToRed('zip');
    document.getElementById('zipHelp').innerHTML = 'Zip code must be in format 000 00';
  }
}

function validateCity() {
  let x = document.forms["order-form"]["city"].value;
  if (x.length <= 50 && x.size != 0) {
    document.getElementById('cityHelp').innerHTML = ' ';
    setElementsToGreen('city');
  } else {
    setElementsToRed('city');
    document.getElementById('cityHelp').innerHTML = 'City must be under 50 characters';
  }
}



function setElementsToGreen(value) {
  document.getElementById(value).className = document.getElementById(value).className.replace(" error", "");
  document.getElementById(value).className = document.getElementById(value).className.replace(" lucky", "");
  document.getElementById(value).className = document.getElementById(value).className += " lucky";
}

function setElementsToRed(value) {
  document.getElementById(value).className = document.getElementById(value).className.replace(" lucky", "");
  document.getElementById(value).className = document.getElementById(value).className.replace(" error", "");
  document.getElementById(value).className = document.getElementById(value).className += " error";
}

function validateForm() {
  if (document.getElementById('name').className.includes('lucky') &&
    document.getElementById('email').className.includes('lucky') &&
    document.getElementById('phone').className.includes('lucky') &&
    document.getElementById('street').className.includes('lucky') &&
    document.getElementById('zip').className.includes('lucky') &&
    document.getElementById('city').className.includes('lucky')) {
    open('order-details.html', '_self');
    //document.getElementById('submitAddress').className = document.getElementById('submitAddress').classname.replace("disabled", "")
  } else {
    alert("Please fill in all fields correctly! ");
  }
}