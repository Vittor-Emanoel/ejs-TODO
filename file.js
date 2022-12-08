const fs = require('fs');

fs.writeFile('test.txt', 'Olá mundo nodejs', (err) => {
  if (err) {
    console.log(err);
  } else {
    console.log('archive created successfully');
  }
});
