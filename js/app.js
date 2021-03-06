$(document).foundation()

var myForm = document.querySelector('form');
myForm.onsubmit = function(ev) {
  ev.preventDefault();
  var details = document.querySelector('div.details');
      // this, is assigned to the element that the event fired
  var firstName = this.firstName.value;
  var hairColor = this.hairColor.value;
  var age = this.age.value;
  var birthplace = this.birthplace.value;


//   '\' allows you to have multi-line text
details.innerHTML += ' \
  <dl> \
    <dt>First Name</dt> \
    <dd>' + firstName + '</dd> \
      \
    <dt>Hair Color</dt> \
    <dd>' + hairColor + '</dd> \
      \
    <dt>Age</dt> \
    <dd>' + age + '</dd> \
      \
    <dt>Birthplace</dt> \
    <dd>' + birthplace + '</dd> \
      \
  </dl>';
};
