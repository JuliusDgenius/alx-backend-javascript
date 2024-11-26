const fs = require('fs');
const path = require('path');

module.exports = function countStudents (filename) {
  try {
    // Resolve directory and find the first .csv file
    const directory = path.dirname(path.resolve(__dirname, filename));
    const files = fs.readdirSync(directory);

    // Locate a .csv file in the directory
    const csvFile = files.find((file) => path.extname(file) === '.csv');
    if (!csvFile) {
      throw new Error('No .csv file found in the directory.');
    }

    // Resolve full path to the .csv file
    const csvPath = path.join(directory, csvFile);

    // Read and process file content
    const data = fs.readFileSync(csvPath, 'utf-8');
    const lines = data.trim().split('\n');
    if (lines.length <= 1) {
      throw new Error('The file is empty or only contains headers.');
    }

    // Extract header and indices
    const header = lines[0].split(',');
    const idxFn = header.indexOf('firstname');
    const idxFd = header.indexOf('field');
    if (idxFn === -1 || idxFd === -1) {
      throw new Error('Missing required headers: "firstname" or "field".');
    }

    // Process student data
    const fields = {};
    const students = {};
    lines.slice(1).forEach((line) => {
      const values = line.split(',');
      const field = values[idxFd];
      const firstname = values[idxFn];
      fields[field] = (fields[field] || 0) + 1;
      students[field] = students[field]
        ? `${students[field]}, ${firstname}`
        : firstname;
    });

    // Output results
    console.log(`Number of students: ${lines.length - 1}`);
    for (const field of Object.keys(fields)) {
      console.log(
        `Number of students in ${field}: ${fields[field]}. List: ${students[field]}`
      );
    }
  } catch (error) {
    console.error(error.message);
    throw new Error('Cannot load the database');
  }
};
