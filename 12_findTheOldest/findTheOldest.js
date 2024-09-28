const findTheOldest = function(people) {

    let res = people.map((person)=>{
        if(!Object.hasOwn(person,'yearOfDeath'))
        {
            person['yearOfDeath']=new Date().getFullYear();
        }
        return person;
    })
    .sort((a,b)=>{
        return (b.yearOfDeath-b.yearOfBirth)-(a.yearOfDeath-a.yearOfBirth);
    });
    return res[0];
};

// Do not edit below this line
module.exports = findTheOldest;
