const path = require('path');
const os = require('os');
const process = require('process');

// Print out the current working directory
console.log('Current working directory:', process.cwd());

// Print out the separator of a given file path
const filePath = '/path/to/file.txt';
console.log('File path separator:', path.sep);

// Print out the extension name of a file path
console.log('File extension:', path.extname(filePath));

// Print out the process id of the current running process
console.log('Process ID:', process.pid);

// Print out the user information of the os
console.log('User info:', os.userInfo());

// Print out the platform of an operating system
console.log('Operating system platform:', os.platform());
