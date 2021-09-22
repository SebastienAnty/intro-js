const students = [{
    firstName: 'Alina',
    lastName: 'Maliuk',
    age: 33,
    gender: 'female'
}, {
    firstName: 'Dariel',
    lastName: 'Mera',
    age: 32,
    gender: 'male',
}, {
    firstName: 'Diana',
    lastName: 'Tineo',
    age: 32,
    gender: 'female'
}, {
    firstName: 'Sebastien',
    lastName: 'Anty',
    age: 21,
    gender: 'male'
}, {
    firstName: 'Manny',
    lastName: 'Toribio',
    age: '28',
    gender: 'male',
}]

function returnsFullName(person) {
    const fullName = `${person.firstName} ${person.lastName}`
    console.log(fullName)
}


for(let i = 0; i < students.length; i++) {
returnsFullName(students[i])
}