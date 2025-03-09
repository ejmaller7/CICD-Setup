import db from "../config/connection.js";
import Question from "../models/Question.js";
import cleanDB from "./cleanDb.js";
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

// Get the directory name using ES modules approach
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Log paths to debug
console.log('Current __dirname:', __dirname);
const jsonPath = path.join(__dirname, './pythonQuestions.json');
console.log('Trying to read from:', jsonPath);

// Check if file exists before reading
if (fs.existsSync(jsonPath)) {
  console.log('File exists!');
  // Read and parse the JSON file
  const pythonQuestions = JSON.parse(
    fs.readFileSync(jsonPath, 'utf8')
  );

  db.once('open', async () => {
    await cleanDB('Question', 'questions');
    await Question.insertMany(pythonQuestions);
    console.log('Questions seeded!');
    process.exit(0);
  });
} else {
  console.error('File does not exist at path:', jsonPath);
  
  // Try to find the file in nearby directories
  console.log('Searching in parent directory...');
  const parentPath = path.join(__dirname, '../pythonQuestions.json');
  console.log('Checking:', parentPath);
  
  if (fs.existsSync(parentPath)) {
    console.log('Found in parent directory!');
    const pythonQuestions = JSON.parse(
      fs.readFileSync(parentPath, 'utf8')
    );
    
    db.once('open', async () => {
      await cleanDB('Question', 'questions');
      await Question.insertMany(pythonQuestions);
      console.log('Questions seeded!');
      process.exit(0);
    });
  } else {
    console.error('Could not find pythonQuestions.json in expected locations');
    process.exit(1);
  }
}