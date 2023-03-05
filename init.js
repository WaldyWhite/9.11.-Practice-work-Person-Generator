// generate
window.onload = init;
function init () {

const comma = ' ,'
    document.querySelector('.gener').addEventListener('click', function() {
        const initPerson = personGenerator.getPerson();
        document.getElementById('firstNameOutput').innerText = initPerson.firstName;
        document.querySelector("#surnameOutput").textContent = initPerson.surName;
        document.querySelector("#patronymicOutput").textContent = initPerson.patronymic;
        document.querySelector('#genderOutput').textContent = initPerson.gender + comma;
        document.querySelector('#birthYearOutput').textContent = initPerson.dateOfBirth + comma;
        document.querySelector('#job').textContent = initPerson.job + comma;
        document.querySelector('.photo').src = initPerson.photo;
        });
// clear
     document.querySelector('.clear').addEventListener('click', function() {
        document.getElementById('firstNameOutput').innerText = '';
        document.querySelector("#surnameOutput").textContent = '';
        document.querySelector("#patronymicOutput").textContent = '';
        document.querySelector('#genderOutput').textContent = '';
        document.querySelector('#birthYearOutput').textContent = '';
        document.querySelector('#job').textContent = '';
        document.querySelector('.photo').src = 'placeholder_200.png'
         });
        }
