const personGenerator = {
  surnameJson: `{
    "count": 20,
    "list": {
      "id_1": "Иванов",
      "id_2": "Смирнов",
      "id_3": "Кузнецов",
      "id_4": "Васильев",
      "id_5": "Петров",
      "id_6": "Михайлов",
      "id_7": "Новиков",
      "id_8": "Федоров",
      "id_9": "Кравцов",
      "id_10": "Николаев",
      "id_11": "Семёнов",
      "id_12": "Славин",
      "id_13": "Степанов",
      "id_14": "Павлов",
      "id_15": "Александров",
      "id_16": "Морозов",
      "id_17": "Макаров",
      "id_18": "Дегтярёв",
      "id_19": "Калашников",
      "id_20": "Шпагин"
    }
  }`,
  firstNameMaleJson: `{
    "count": 10,
    "list": {
      "id_1": "Александр",
      "id_2": "Максим",
      "id_3": "Иван",
      "id_4": "Артём",
      "id_5": "Дмитрий",
      "id_6": "Никита",
      "id_7": "Михаил",
      "id_8": "Даниил",
      "id_9": "Егор",
      "id_10": "Андрей"
    }
  }`,
  patronymicMaleJson: `{
    "count": 10,
    "list": {
      "id_1": "Альбертович",
      "id_2": "Маратович",
      "id_3": "Игнатович",
      "id_4": "Алексеевич",
      "id_5": "Давидович",
      "id_6": "Николаевич",
      "id_7": "Васильевич",
      "id_8": "Викторович",
      "id_9": "Сергеевич",
      "id_10": "Валентинович"
    }
  }`,
  firstNameFemaleJson: `{
    "count": 10,
    "list": {
      "id_1": "Александра",
      "id_2": "Марина",
      "id_3": "Ирина",
      "id_4": "Алиса",
      "id_5": "Диана",
      "id_6": "Наталья",
      "id_7": "Маргарита",
      "id_8": "Дарья",
      "id_9": "Елизавета",
      "id_10": "Анжелика"
    }
  }`,
  professionMaleJson: `{
    "count": 10,
    "list": {
      "id_1": "грузчик",
      "id_2": "солдат",
      "id_3": "шахтёр",
      "id_4": "бульдозерист",
      "id_5": "экскаваторщик",
      "id_6": "каменщик",
      "id_7": "кузнец",
      "id_8": "токарь",
      "id_9": "сантехник",
      "id_10": "электрик"
    }
  }`,
  professionFemaleJson: `{
    "count": 10,
    "list": {
      "id_1": "балерина",
      "id_2": "проводница",
      "id_3": "стюардесса",
      "id_4": "кладовщица",
      "id_5": "швея",
      "id_6": "медсестра",
      "id_7": "певица",
      "id_8": "уборщица",
      "id_9": "доярка",
      "id_10": "актриса"
    }
  }`,
  monthJson: `{
    "count": 12,
    "list": {
      "id_1": {"name": "января", "days": 31},
      "id_2": {"name": "февраля", "days": 28},
      "id_3": {"name": "марта", "days": 31},
      "id_4": {"name": "апреля", "days": 30},
      "id_5": {"name": "мая", "days": 31},
      "id_6": {"name": "июня", "days": 30},
      "id_7": {"name": "июля", "days": 31},
      "id_8": {"name": "августа", "days": 31},
      "id_9": {"name": "сентября", "days": 30},
      "id_10": {"name": "октября", "days": 31},
      "id_11": {"name": "ноября", "days": 30},
      "id_12": {"name": "декабря", "days": 31}
    }
}`,

  GENDER_MALE: 'мужчина',
  GENDER_FEMALE: 'женщина',

  randomIntNumber: (max = 1, min = 0) =>
    Math.floor(Math.random() * (max - min + 1) + min),

  randomValue: function (json) {
    const obj = JSON.parse(json);
    const prop = `id_${this.randomIntNumber(obj.count, 1)}`; // this = personGenerator
    return obj.list[prop];
  },

  randomGender: function () {
    // const gender = this.randomIntNumber(1, 0);
    // return gender ? this.GENDER_MALE : this.GENDER_FEMALE;
    return this.randomIntNumber() ? this.GENDER_MALE : this.GENDER_FEMALE;
  },

  randomFirstName: function () {
    if (this.person.gender == 'мужчина') {
      return this.randomValue(this.firstNameMaleJson);
    }
    else {
      return this.randomValue(this.firstNameFemaleJson);
    }
  },

  randomSurname: function () {
    if (this.person.gender == 'мужчина') {
      return this.randomValue(this.surnameJson);
    }
    else {
      return this.randomValue(this.surnameJson) + 'a';
    }
  },

  randomPatronymic: function () {
    if (this.person.gender == 'мужчина') {
      return this.randomValue(this.patronymicMaleJson);
    }
    else {
      return this.randomValue(this.patronymicMaleJson).slice(0, -2) + 'на';
    }
  },

  randomDateOfBirth: function () {
    const randomYearOfBirth = this.randomIntNumber(2003, 1979);
    const randomMonthOfBirth = this.randomValue(this.monthJson);
    return (
      this.randomIntNumber(randomMonthOfBirth.days, 1) +
      ' ' +
      randomMonthOfBirth.name +
      ' ' +
      randomYearOfBirth +
      ' г.р.'
    );
  },

  randomProfession: function () {
    if (this.person.gender == 'мужчина') {
      return this.randomValue(this.professionMaleJson);
    }
    else {
      return this.randomValue(this.professionFemaleJson);
    }
  },

  getPerson: function () {
    this.person = {};
    this.person.gender = this.randomGender();
    this.person.surname = this.randomSurname();
    this.person.firstName = this.randomFirstName();
    this.person.patronymic = this.randomPatronymic();
    this.person.dateOfBirth = this.randomDateOfBirth();
    this.person.profession = this.randomProfession();
    return this.person;
  },
};
