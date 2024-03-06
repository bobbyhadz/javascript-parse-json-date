// EXAMPLE 1 - Parse a JSON Date in JavaScript

const json = new Date().toJSON();

console.log(json); // 👉️ "2023-07-27T09:53:51.111Z"

const date = new Date(json);

console.log(date); // 👉️ Thu Jul 27 2023 12:54:06

// ------------------------------------------------------------------

// // EXAMPLE 2 - Parse a JSON Date manually

// const json = JSON.stringify(new Date().toISOString());

// console.log(json); // 👉️ "2023-07-27T09:55:15.209Z"

// const date = new Date(JSON.parse(json));

// console.log(date); // 👉️ Thu Jul 27 2023 12:55:38

// // 👇️ "2023-07-27T09:55:15.209Z"
// console.log(date.toISOString());

// ------------------------------------------------------------------

// // EXAMPLE 3 - Getting an ISO-formatted string

// // 👇️ "2023-07-27T09:56:46.833Z"
// console.log(new Date().toISOString());
