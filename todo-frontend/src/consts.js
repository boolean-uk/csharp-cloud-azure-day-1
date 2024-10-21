import "react";

const url = "https://georgewebapp.azurewebsites.net/"; //|| "http://localhost:5168";
//const url = "http://localhost:5173/"
// ensure trailing / is removed
export const API_URL = url.replace(/\/$/, "");
