import * as firebase from 'firebase'

const config = {
  apiKey: '',
  authDomain: '',
  databaseURL: '',
  projectId: '',
  storageBucket: '',
  messagingSenderId: ''
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