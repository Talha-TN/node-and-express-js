const fs = require("fs/promises");
const myDetails = {
  emp_id: 245,
  name: "Talha nawaz",
  age: "24 years",
  gender: "male",
  location: "lahore",
  salary: 200000,
};

// Write to File
const writeInFile = async (filename) => {
  try {
    await fs.writeFile(filename, JSON.stringify([myDetails]), "utf-8");
    console.log("Data has been written to file");
  } catch (err) {
    console.error(err);
  }
};

// Update File (Append as Array)
const updateFile = async (filename) => {
  try {
    let data = await fs.readFile(filename, "utf-8");
    const parsedData = JSON.parse(data);
    if (Array.isArray(parsedData)) {
      parsedData.push(myDetails); // Append new data to the array
    } else {
      throw new Error("File content is not an array");
    }
    await fs.writeFile(filename, JSON.stringify(parsedData), "utf-8");
    console.log("Data has been updated in the file");
  } catch (err) {
    console.error(err);
  }
};

// Read File
const readFileExample = async (filename) => {
  try {
    let data = await fs.readFile(filename, "utf-8");
    const parsedData = JSON.parse(data);
    console.log("The data in the file is:", parsedData);
  } catch (err) {
    console.error(err);
  }
};

// Function Calls
writeInFile("./practice1.txt");
updateFile("./practice1.txt");
readFileExample("./practice1.txt");
