const findTheOldest = function(people) {
    let today = new Date().getFullYear()

    for (let person of people){
        if (!person.hasOwnProperty('yearOfDeath')){
            person.yearOfDeath = today
        }
    }
    
    let oldestAge = people[0].yearOfDeath - people[0].yearOfBirth
    let oldestPerson = 0

    for (let i = 1; i < people.length; i++){
        if (!people[i].hasOwnProperty('yearOfDeath')){
            people[i].yearOfDeath = today
        }
        if ((people[i].yearOfDeath - people[i].yearOfBirth) > oldestAge) {
            oldestAge = people[i].yearOfDeath - people[i].yearOfBirth
            oldestPerson = i
        }
    }
    return people[oldestPerson]

};

// Do not edit below this line
module.exports = findTheOldest;
