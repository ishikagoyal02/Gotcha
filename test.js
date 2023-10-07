const axios = require('axios');
const cheerio = require('cheerio');
const dotenv = require('dotenv');

// Load environment variables from .env file
dotenv.config();

// Input statement (you can use the readline module for interactive input)
const input_stmt = "India"; // Replace with your input
const word = input_stmt;

const url = `https://www.google.com/search?q=${word}&tbm=isch`;

// Send an HTTP GET request to the URL
axios.get(url)
  .then((response) => {
    const content = response.data;
    const $ = cheerio.load(content);
    const images = $('img');

    const url1 = images.eq(1).attr('src');
    const url2 = images.eq(2).attr('src');
    
    console.log(url1);
    console.log(url2);

    // Store the values in regular variables or an object
    const myVariable = url1;
    const anotherVariable = url2;

    console.log(`My variable: ${myVariable}`);
    console.log(`Another variable: ${anotherVariable}`);
  })
  .catch((error) => {
    console.error('Error:', error);
  });