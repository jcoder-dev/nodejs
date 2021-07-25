'use strict'
const fs = require('fs');
fs.writeFile('target.txt', 'Janete Pálido', (err) => {

	if(err){
	  throw err;
      }
console.log('File Saved!');
});
