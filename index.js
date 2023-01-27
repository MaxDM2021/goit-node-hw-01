
const {
  addContact,
  removeContact,
  listContacts,
  getContactById,
} = require("./contacts");

const { Command } = require("commander");
const program = new Command();
program
  .option("-a, --action <name>", "choose action")
  .option("-i, --id <id>", "user id")
  .option("-n, --name <name>", "user name")
  .option("-e, --email <email>", "user email")
  .option("-p, --phone <phone>", "user phone");

program.parse(process.argv);

const argv = program.opts();


// TODO: рефакторить
async function invokeAction({ action, id, name, email, phone }) {
  switch (action) {
    case "add":
      // ... name email phone
      console.log("invoke add", name, email, phone);
      await addContact(name, email, phone);

      break;

    case "remove":
      // ... id
      console.log("invoke remove");
      await removeContact(id);
      break;

    case "list":
      // ...
      console.log("invoke list");
      const contacts = await listContacts();
      console.table(contacts);
      break;

    case "get":
      // ... id
      console.log("invoke get");
      const contact = await getContactById(id);
      console.table(contact);
      break;

    default:
      console.warn("\x1B[31m Unknown action type!");
  }
}

invokeAction(argv);

// invokeAction({ action: "add", name: "some contact" + new Date(), email: "mail@gmail.com", phone: "+353 123-12-12"   });
// invokeAction({ action: "remove", id: "3HROQFMf5iNhmSYJkDNJk" });
// invokeAction({ action: "list" });


// program.command("add <name>").action((options) => {
//     const name = options;
//     console.log(name);
//     invokeAction({ action: "add", name});
//   })
  
//   program.command("list").action((options) => {
//     invokeAction({ action: "list"});
//   })

//   program.command("remove <id>").action((options) => {
//     const id = options;
//     invokeAction({ action: "remove", id});
//   })


//   program.parse();
  





// =====first version=====


// const {
//     addContact,
//     removeContact,
//     listContacts,
//     getContactById,
//   } = require("./contacts");
  
  
//   // TODO: рефакторить
//   async function invokeAction({ action, id, name, email, phone }) {
//     switch (action) {
//       case "add":
//         // ... name email phone
//         console.log("invoke add", name, email, phone);
//         await addContact(name, email, phone);
  
//         break;
  
//       case "remove":
//         // ... id
//         console.log("invoke remove");
//         await removeContact(id);
//         break;
  
//       case "list":
//         // ...
//         console.log("invoke list");
//         const contacts = await listContacts();
//         console.table(contacts);
//         break;
  
//       case "get":
//         // ... id
//         console.log("invoke get");
//         const contact = await getContactById(id);
//         console.table(contact);
//         break;
  
//       default:
//         console.warn("\x1B[31m Unknown action type!");
//     }
//   }
  
//   // invokeAction({ action: "add", name: "some contact" + new Date(), email: "mail@gmail.com", phone: "+353 123-12-12"   });
//   // invokeAction({ action: "remove", id: "3HROQFMf5iNhmSYJkDNJk" });
//   // invokeAction({ action: "list" });
  
//   const [, , action] = process.argv;
  
//   switch (action) {
//     case "add":
//       const [, , , name, email, phone] = process.argv;
//       invokeAction({ action, name, email, phone });
//       break;
  
//     case "remove":
//       const [, , , id] = process.argv;
//       invokeAction({ action, id });
//       break;
  
  
//       case "list":
//           invokeAction({ action });
//           break;
  
  
//           case "get":
//               const [, , , idn] = process.argv;
//               invokeAction({ action, idn });
//               break;
//             default:
//               break;
  
//   }
