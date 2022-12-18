import express from "express";
// import dotenv from "dotenv";
import {  Configuration, OpenAIApi  } from "openai";
 import cors from "cors";

const app = express();
 app.use(cors());
 app.use(express.json());
// import session from "express-session";
// dotenv.config();


const configuration = new Configuration({
  apiKey: "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",
});
const openai = new OpenAIApi(configuration);


const port = 8000;
// app.use(
//   session({
//     secret: "thisismysecrctekeyfhrgfgrfrty84fwir767",
//     saveUninitialized: false,
//     cookie: { maxAge: 10000000000000 },
//     resave: false,
//   })
// );

const API_KEY = "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";

// Initialize the OpenAI API client

// Define a function that generates a response using GPT-3
app.get("/", (req, res) => {
  async function generateResponse(input) {
    // Call the GPT-3 API to generate a response
    return await openai.createCompletion({
        model: "text-davinci-002",
        prompt: input,
        max_tokens: 2048,
      })
      .then((response) => {
        // Return the GPT-3 response as the chatbot's reply
        return response.data.choices[0].text;
      });
  }

  generateResponse(req.query.que).then((response) => {
    console.log(response);
    res.send(response);
  });

  // Listen for user inputs and generate responses using GPT-3
  // process.stdin.on("data", (input) => {
  //   generateResponse(input.toString().trim()).then((response) => {
  //     console.log(response);
  //   });
  // });
});


app.listen(port, () => {
  console.log("Server is running on port " + port);
});