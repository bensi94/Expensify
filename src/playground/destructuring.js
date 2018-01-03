//OBJECT destructuring


// const person = {
//     name: 'Benedikt',
//     age: 23,
//     location: {
//         city: 'Reykjavík',
//         temp: -5
//     }
// };
//
// const { name, age } = person;
// console.log(`${name} is ${age}.`);
//
// const { city, temp } = person.location;
//
// if (city && temp){
//     console.log(`It's ${temp} in ${city}.`);
// }

// const book = {
//     title: 'Ego is the Enemy',
//     author: 'Ryan Holiday',
//     publisher: {
//         name: 'Penguin'
//     }
// };
//
// const { name: publisherName = 'Self Publish'} = book.publisher;
//
// console.log(publisherName);


// ARRAY destructuring

// const address = ['1299 S Juniper Street', 'Philadelphia', 'Pennsylvania', '19147'];
// const [, city = 'Reykjavík', state = 'New York'] = address;
// console.log(`You are in ${city} ${state}.`);

const item = ['Coffee (hot)', '$2.00', '$2.50', '$2.75']

const [selling, small, med, large] = item;

console.log(`A medium ${selling} costs ${med}`);
