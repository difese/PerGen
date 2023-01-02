document.querySelector('#generationButton').addEventListener('click', () => {
  const initPerson = personGenerator.getPerson();
  document.querySelector('#surnameOutput').innerText = initPerson.surname;
  document.querySelector('#firstNameOutput').innerText = initPerson.firstName;
  document.querySelector('#patronymicOutput').innerText = initPerson.patronymic;
  document.querySelector('#genderOutput').innerText = initPerson.gender;
  document.querySelector('#dateOfBirthOutput').innerText = initPerson.dateOfBirth;
  document.querySelector('#professionOutput').innerText = initPerson.profession;
});

document.querySelector('#clearingButton').addEventListener('click', () => {
  document.querySelector('#surnameOutput').innerText = 'Фамилия';
  document.querySelector('#firstNameOutput').innerText = 'Имя';
  document.querySelector('#patronymicOutput').innerText = 'Отчество';
  document.querySelector('#genderOutput').innerText = 'пол';
  document.querySelector('#dateOfBirthOutput').innerText = 'дата рождения';
  document.querySelector('#professionOutput').innerText = 'профессия';
});
