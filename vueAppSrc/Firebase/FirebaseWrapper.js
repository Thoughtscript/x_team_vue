import * as firebase from 'firebase'

const config = {
  apiKey: 'AIzaSyArPNxbrW44FGYBe6nJz8dX1lkTHKSELjk',
  authDomain: 'x-team-vue-app.firebaseapp.com',
  databaseURL: 'https://x-team-vue-app.firebaseio.com',
  projectId: 'x-team-vue-app',
  storageBucket: '',
  messagingSenderId: '17418064593'
}

export default {
  db: () => {
    firebase.initializeApp(config)
    return firebase.database()
  },

  /** GET All */
  fetchAll: (db, ref) => new Promise(resolve => {
    db.ref(`/${ref}`)
      .once('value')
      .then(v => resolve(v.val()))
  }),

  /** GET One */
  fetchOne: (db, ref, key) => new Promise(resolve => {
    db.ref(`/${ref}/${key}`)
      .once('value')
      .then(v => resolve(v.val()))
  }),

  /** POST One */
  addOne: (db, ref, key, contactData) => new Promise(resolve => {
    resolve(db.ref(`/${ref}`).child(key).set(contactData))
  }),

  /** DELETE One */
  removeOne: (db, ref, key) => new Promise(resolve => {
    resolve(db.ref(`/${ref}`).child(key).remove())
  })
}