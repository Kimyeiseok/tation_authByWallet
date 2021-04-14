const functions = require("firebase-functions");
const algoliasearch = require("algoliasearch");
const admin = require("firebase-admin");
const ALGOLIA_ID = functions.config().algolia.app_id;
const ALGOLIA_ADMIN_KEY = functions.config().algolia.api_key;
const ALGOLIA_SEACRCH_KEY= functions.config().algolia.search_key;
const ALGOLIA_INDEX_NAME = "taction_authByWallet";
const client = algoliasearch(ALGOLIA_ID, ALGOLIA_ADMIN_KEY);

admin.initializeApp(functions.config().firebase);

// Update the search index every time a blog post is written.
exports.onUserCreated = functions.firestore.document('users/{usersId}').onCreate((snap, context) => {
  // Get the note document
  const users = snap.data();

  // Add an 'objectID' field which Algolia requires
  users.objectID = context.params.usersId;

  // Write to the algolia index
  const index = client.initIndex(ALGOLIA_INDEX_NAME);
  return index.saveObject(users);
});

exports.onUserDeleted = functions.firestore.document('users/{usersId}').onDelete((snap, context) => {
    // Delete an user from the algolia index
    const index = client.initIndex(ALGOLIA_INDEX_NAME);
    return index.deleteObject(context.params.usersId);
});

exports.onUserEdited = functions.firestore.document('users/{usersId}').onUpdate((change, context) => {
    const newValue = change.after.data();
    const previousValue = change.before.data();
	newValue.objectID = change.after.id;
    //newValue.objectID = context.params.usesrId;
    // Write the update to the algolia index
    const index = client.initIndex(ALGOLIA_INDEX_NAME);
    return index.saveObject(newValue);
});