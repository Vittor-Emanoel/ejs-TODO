import fs from 'fs';

fs.writeFile('test.txt', 'Olá mundo nodejs', (err) => {
  console.log(err);
});
