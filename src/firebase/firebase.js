import * as firebase from 'firebase';

const config = {
    apiKey: "AIzaSyBhfGdyQDZ0FB8UbeLbb9NYDqAhHPRGtWo",
    authDomain: "expencify-ffd18.firebaseapp.com",
    databaseURL: "https://expencify-ffd18.firebaseio.com",
    projectId: "expencify-ffd18",
    storageBucket: "expencify-ffd18.appspot.com",
    messagingSenderId: "722878555916"
};

firebase.initializeApp(config);

const database = firebase.database();

export { firebase, database as default };

// // child_removed
//   database.ref('expenses').on('child_removed', (snapshot) => {
//     console.log(snapshot.key, snapshot.val());
//   });
  
//   // child_changed
//   database.ref('expenses').on('child_changed', (snapshot) => {
//     console.log(snapshot.key, snapshot.val());
//   });
  
//   // child_added
//   database.ref('expenses').on('child_added', (snapshot) => {
//     console.log(snapshot.key, snapshot.val());
//   });
  
  // database.ref('expenses')
  //   .once('value')
  //   .then((snapshot) => {
  //     const expenses = [];
  
  //     snapshot.forEach((childSnapshot) => {
  //       expenses.push({
  //         id: childSnapshot.key,
  //         ...childSnapshot.val()
  //       });
  //     });
  
  //     console.log(expenses);
  //   });
  
  // database.ref('expenses').on('value', (snapshot) => {
  //   const expenses = [];
  
  //   snapshot.forEach((childSnapshot) => {
  //     expenses.push({
  //       id: childSnapshot.key,
  //       ...childSnapshot.val()
  //     });
  //   });
  
  //   console.log(expenses);
  // });

// Setup "expenses" with three items (description, note, amount, createdAt)

// database.ref('expenses').push({
//     description: 'Rent',
//     note: '',
//     amount: 109500,
//     createdAt: 976123498763
//   });
  
//   database.ref('expenses').push({
//     description: 'Phone bill',
//     note: '',
//     amount: 5900,
//     createdAt: 976123498763
//   });
  
//   database.ref('expenses').push({
//     description: 'Food',
//     note: '',
//     amount: 1200,
//     createdAt: 976123498763
//   });

// const onValueChange = database.ref().on('value', (snapshot) => {
//     //console.log(snapshot.val());
//     const val = snapshot.val();
//     console.log(`${val.name} is a ${val.job.title} at ${val.job.company}`);
// }, (e) => {
//     console.log('error with data fetching', e);
// });

// setTimeout(()=>{
//     database.ref().off(onValueChange);
// },5000);

// setTimeout(()=>{
//     database.ref().off(onValueChange);
// },7000);

// setTimeout(()=>{
//     database.ref().off(onValueChange);
// },8000);


// firebase.database().ref().set({
//     name: 'jai pandey',
//     age: 26,
//     stressLevel:6,
//     isSingle: true,
//     job: {
//         title: 'software devloper',
//         company: 'sael'
//     },
//     location: {
//         city: 'New Delhi',
//         country: 'India'
//     }
// }).then(() => {
//     console.log('Data is save');
// }).catch((e) => {
//     console.log('this failed',e);
// });

// database.ref('age').set(27);
// database.ref('location/city').set('Delhi');

// database.ref('attribute').set({
//     height: 73,
//     weight: 150
// }).then(() => {
//     console.log('second set call worked');
// }).catch((e) => {
//     console.log('Thing did nott for the second error',e);
// });

// database.ref('isSingle').set(null);
// database.ref()
//     .remove()
//     .then(() => {
//         console.log('Data is removed');
//     }).catch((e) => {
//         console.log('this failed',e);
//     });

// database.ref().update({
//     stressLevel: 9,
//     'job/company': 'Amazon',
//     'location/city': 'bangalore'
// });
//console.log('requested to change data');