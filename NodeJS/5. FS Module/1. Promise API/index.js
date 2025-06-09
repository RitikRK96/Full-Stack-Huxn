import { log } from "console";
import * as fs from "fs/promises";

try {
  // Creating a folder
  // await fs.mkdir('output/Course/hello')
  // Creating a folder with recursive flag true
  // await fs.mkdir('output/Course/hello', {recursive : true})
  // console.log('Folder created successfully!');
  // Accessing all the files and folders in a directory
  // const files = await fs.readdir('output/Course')
  // for (const file of files){
  //     console.log(files);
  // }
  // Create and Write a file
  // await fs.writeFile("README.md", "Hello World ") // Creating and writing a file
  // await fs.appendFile("README.md", " \n Ritik is the best 😎") // Appending a file
  // const data = await fs.readFile('README.md', 'utf-8') // Read a file
  // console.log(data);
  // Copy a file
  // await fs.copyFile('README.md', 'info.txt')
  // Get file Information
  // const info = await fs.stat('README.md')
  // console.log(info);
} catch (error) {
  console.log(error);
}

