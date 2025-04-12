const fs = require('fs');
const path = require('path');

/**
 * Counts students from a CSV file and logs the results.
 * @param {string} filename - The path to the CSV file.
 */
module.exports = function countStudentss(filename) {
  try {
    const resolvedFilename = path.resolve(__dirname, filename);
    const data = fs.readFileSync(resolvedFilename, 'utf-8');
    const lines = data.trim().split('\n');
    if (lines.length <= 1) {
      throw new Error('The file is empty or only contains headers.');
    }

    const header = lines[0].split(',');
    const idxFn = header.indexOf('firstname');
    const idxFd = header.indexOf('field');
    if (idxFn === -1 || idxFd === -1) {
      throw new Error('Missing required headers: "firstname" or "field".');
    }

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

    console.log(`Number of students: ${lines.length - 1}`);
    Object.entries(fields).forEach(([field, count]) => {
      console.log(
        `Number of students in ${field}: ${count}. List: ${students[field]}`
      );
    });
  } catch (error) {
    throw new Error('Cannot load the database');
  }
};
