import db from './db';

const addContact = (contact) => {
  let collection = db.collection("contacts");
  try {
    return collection.add(contact);
  } catch (e) {
    console.error('error adding contact to database: ', e);
  }
}

export {addContact};
