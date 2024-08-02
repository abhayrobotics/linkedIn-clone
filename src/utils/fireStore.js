import { initializeApp, applicationDefault, cert } from 'firebase-admin/app';
import { getFirestore, Timestamp, FieldValue, Filter } from 'firebase-admin/firestore';


initializeApp({
    credential: applicationDefault()
  });
const db = getFirestore();

const docRef = db.collection('users').doc('alovelace');

await docRef.set({
  first: 'Ada',
  last: 'Lovelace',
  born: 1815
});

const aTuringRef = db.collection('users').doc('aturing');

await aTuringRef.set({
  'first': 'Alan',
  'middle': 'Mathison',
  'last': 'Turing',
  'born': 1912
});


const snapshot = await db.collection('users').get();
snapshot.forEach((doc) => {
  console.log(doc.id, '=>', doc.data());
});