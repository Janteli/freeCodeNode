// Modules- Encapsulated Code (Only share minimum)
// CommonJS, Every file is module (by default)
// const names = require('./02_names')
const {john, peter} = require('./02_names')
const sayHi = require('./03_utils')
const data = require('./04-alternative-flavor')
require('./05-mind-grenade')

// console.log(data);

// console.log(names);
// sayHi('Susan')
// // sayHi(name.john)
// // sayHi(name.peter)
// sayHi(peter)
// sayHi(john)