const slugify = require('slugify');
const path = require('path');

let mypath = "C:\Users\HP\.vscode\Node-Practice>";
console.log(path.extname(mypath));
console.log(path.basename(mypath));
console.log(path.dirname(mypath));
console.log(path.join("c/:" , "programs\\Node-Practice"));

let a = slugify('some string');
console.log(a);

let b = slugify('some string', '_');
console.log(b);