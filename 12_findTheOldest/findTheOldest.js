const people = [
  {
    name: "Carly",
    yearOfBirth: 1942,
    yearOfDeath: 1970,
  },
  {
    name: "Ray",
    yearOfBirth: 1962,
    yearOfDeath: 2011,
  },
  {
    name: "Jane",
    yearOfBirth: 1912,
    yearOfDeath: 1941,
  },
];
const findTheOldest = function (people) {
  return people.reduce((oldest, person) => {
    const currentYear = new Date().getFullYear();
    const personAge = (person.yearOfDeath || currentYear) - person.yearOfBirth;
    const oldestAge = (oldest.yearOfDeath || currentYear) - oldest.yearOfBirth;

    return personAge > oldestAge ? person : oldest;
  });
};
findTheOldest(people);
// Do not edit below this line
module.exports = findTheOldest;
