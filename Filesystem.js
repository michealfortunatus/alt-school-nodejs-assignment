const fs = require('fs');

// Create directory/folder named: “Students”
fs.mkdirSync('Students');

// In the Students directory, create a file named user.js
fs.writeFileSync('Students/user.js', '');

// Update the Students directory to “Names”
fs.renameSync('Students', 'Names');

// Add your name as content to the file user.js
fs.writeFileSync('Names/user.js', 'Your Name');

// Update the file and add your age, sex, nationality, phone number, and any other information about yourself
fs.appendFileSync('Names/user.js', '\nAge: 25\nSex: Male\nNationality: Country\nPhone: 123-456-7890');

// Update the file user.js to {your_name}.js eg daniel_adesoji.js
const newName = 'daniel_adesoji.js';
fs.renameSync('Names/user.js', `Names/${newName}`);

// Read the contents from {your_name}.js. Use fs.readFile
fs.readFile(`Names/${newName}`, 'utf8', (err, data) => {
  if (err) throw err;
  console.log('File contents:', data);
});

// Delete the file {your_name}.js
fs.unlinkSync(`Names/${newName}`);

// Delete the directory “Names”
fs.rmdirSync('Names');
