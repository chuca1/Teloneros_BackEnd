var firebaseConfig = {
  apiKey: "AIzaSyAj80EflSPqK_1FoTEGwqSc1r6Sa-3Ync0",
  authDomain: "teloneros-chuca.firebaseapp.com",
  databaseURL: "https://teloneros-chuca.firebaseio.com",
  projectId: "teloneros-chuca",
  storageBucket: "teloneros-chuca.appspot.com",
  messagingSenderId: "510926433382",
  appId: "1:510926433382:web:2f7b98d0aa4b97dd"
};
firebase.initializeApp(firebaseConfig);

// Get a reference to the storage service, which is used to create references in your storage bucket
var storage = firebase.storage();
module.exports = storage;
