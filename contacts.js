const fs = require("fs/promises");
const path = require("path");
const { nanoid } = require("nanoid");

// __dirname - абсолютный путь, в котором находится фаил
const contactPath = path.resolve(__dirname, "./db/contacts.json");

async function readDb() {
  const contactRaw = await fs.readFile(contactPath);
  const db = JSON.parse(contactRaw);
  return db;
}

async function writeDB(db) {
  await fs.writeFile(contactPath, JSON.stringify(db, null, 2));
}

//   =========ADD===========

async function addContact(name, email, phone) {
  const id = nanoid();
  const contact = { id, name, email, phone };

  const db = await readDb();
  db.push(contact);

  await writeDB(db);
}

//   =========REMOVE===========

async function removeContact(id) {
  const db = await readDb();
  const updatedDb = db.filter((contact) => contact.id !== id);
  await writeDB(updatedDb);
}

//   =========LIST===========

async function listContacts() {
  const db = await readDb();
  return db;
}

//   =========GET===========

async function getContactById(id) {
  const db = await readDb();
  const updatedDb = db.find(contact => contact.id === id.toString());
  await writeDB(updatedDb);
}

module.exports = {
  addContact,
  removeContact,
  listContacts,
  getContactById,
};
