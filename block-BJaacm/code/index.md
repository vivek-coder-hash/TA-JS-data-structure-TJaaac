```js
let user = {
  name: 'Arya',
  sibling: ['Robb', 'Ryan', 'John'],
};
let allBrothers = ['Robb', 'Ryan', 'John'];
let brothersCopy = user.sibling;
let usename = user.name;
let newUser = user;
```

1. Memory representation

- Create the memory representation of the above snippet on notebook.
- Take a photo/screenshot and add it to the folder `code`

<!-- To add this image here use ![name](./hello.jpg) -->

2. Answer the following with reason:

- `user == newUser;` // true  because both pointing towards same memory address. 
- `user === newUser;`  // True  , both are of same data types.
- `user.name === newUser.name;` // true ,  both are of same data types.
- `user.name == newUser.name;`// true , because both pointing towards same memory address.
- `user.sibling == newUser.sibling;` // true , because both pointing towards same memory address.
- `user.sibling === newUser.sibling;`  // true ,  both are of same data types.
- `user.sibling == allBrothers;` // false , both have different memory addresses.
- `user.sibling === allBrothers;`//  false 
- `brothersCopy === allBrothers;`// false , both have different memory address.
- `brothersCopy == allBrothers;` /// false , both have different memory address.
- `brothersCopy == user.sibling;` // true , both have same memory address.
- `brothersCopy === user.sibling;` // true , same type of data.
- `brothersCopy[0] === user.sibling[0];` // true
- `brothersCopy[1] === user.sibling[1];` // true
- `user.sibling[1] === newUser.sibling[1];` // true  because both pointing towards same memory address. 
