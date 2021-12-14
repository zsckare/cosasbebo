//User Variables
const serviceAccount = require("./vue-ecommerce-69c04-firebase-adminsdk-8zi3h-a5a282e65b.json");
const databaseURL = "https://vue-ecommerce-69c04-default-rtdb.firebaseio.com/"
const collectionKey = "items"; //name of the collection


//Import Dependencies
const admin = require('./node_modules/firebase-admin');
const csv = require('csvtojson')

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: databaseURL
});
const firestore = admin.firestore();
const settings = { timestampsInSnapshots: true };
firestore.settings(settings);

let CSVFilePath = '../data/UploadItems.csv';

csv({ checkType: true }).fromFile(CSVFilePath).then((json) => {
  const data = json
  if (data && (typeof data === "object")) {
    Object.keys(data).forEach(docKey => {
      const ref = firestore.collection(collectionKey).doc()
      var id = { id: ref.id }
      var merged = Object.assign(id, data[docKey])
      ref.set(
        merged
      ).then((res) => {
        console.log("Document " + docKey + " successfully written!");
      }).catch((error) => {
        console.error("Error writing document: ", error);
      });
    });
  }
})

