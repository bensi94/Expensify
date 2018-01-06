// database.ref('expenses').on('child_removed', (snapshot) => {
//     console.log(snapshot.key, snapshot.val());
// });
//
// database.ref('expenses').on('child_changed', (snapshot) => {
//     console.log(snapshot.key, snapshot.val());
// });
//
// database.ref('expenses').on('child_added', (snapshot) => {
//     console.log(snapshot.key, snapshot.val());
// });


// database.ref('expenses').on('value', (snapshot) => {
//     const expenses = [];
//
//     snapshot.forEach((childSnapshot)  => {
//         expenses.push({
//             id: childSnapshot.key,
//             ...childSnapshot.val()
//         });
//     });
//
//     console.log(expenses);
// });


// database.ref('expenses').once('value').then((snapshot) => {
//     const expenses = [];
//
//     snapshot.forEach((childSnapshot)  => {
//         expenses.push({
//             id: childSnapshot.key,
//             ...childSnapshot.val()
//         });
//     });
//
//     console.log(expenses);
// });

// database.ref('expenses').push({
//     description: 'Hallo',
//     note: 'My note',
//     amount: 1532,
//     createdAt: 0
// });
//
// database.ref('expenses').push({
//     description: 'Hallo 2',
//     note: 'My note 2',
//     amount: 15312,
//     createdAt: 1
// });
//
// database.ref('expenses').push({
//     description: 'Hallo 3',
//     note: 'My note 3',
//     amount: 1234,
//     createdAt: 2
// });

// database.ref('notes').push({
//     title: 'Course Topics',
//     body: 'React, node'
// });

// const notes = [{
//     id: '12',
//     title: 'First note!',
//     body: 'This is my note'
// }, {
//     id: '12',
//     title: 'First note!',
//     body: 'This is my note'
// }];
//
// database.ref('notes').set(notes);


// const subscription = database.ref().on('value', (snapshot) => {
//     const data = snapshot.val();
//     console.log(data.name + ' is a ' + data.job.title + ' at ' + data.job.company);
// });
//
// setTimeout (() => {
//     database.ref('name').set('Andrew');
// }, 3500);
//
// setTimeout (() => {
//     database.ref().off('value', subscription);
// }, 7000);
//
// setTimeout (() => {
//     database.ref('name').set('Izabele');
// }, 10500);

// database.ref().set({
//     name: 'Benedikt Óskarsson',
//     age: 23,
//     isSingle: false,
//     location: {
//         city: 'Reykjavík',
//         country: 'Iceland'
//     }
// }).then(() => {
//     console.log('Data is saved');
// }).catch((e) => {
//     console.log('This failed', e);
// });
//
// database.ref('attributes').set({
//         height: 180,
//         weight: 99
// }).then(() => {
//     console.log('attributes are saved');
// }).catch((e) => {
//     console.log('Error on attributes', e);
// });
//
// database.ref().set({
//     name: 'Benedikt Óskarsson',
//     age: 23,
//     stressLevel: 6,
//     job: {
//         title: 'Software developer',
//         company: 'Google'
//     },
//     location: {
//         city: 'Reykjavík',
//         country: 'Iceland'
//     }
// }).then(() => {
//     console.log('Data is saved');
// }).catch((e) => {
//     console.log('This failed', e);
// });
//
// database.ref().update({
//     stressLevel: 9,
//     'job/company': 'Amazon',
//     'location/city':'Seattle'
// });

// database.ref('attributes').set({
//         height: 180,
//         weight: 99
// }).then(() => {
//     console.log('attributes are saved');
// }).catch((e) => {
//     console.log('Error on attributes', e);
// });

// database.ref('isSingle').remove().then(() => {
//     console.log('attributes are saved');
// }).catch((e) => {
//     console.log('Error on attributes', e);
// });
