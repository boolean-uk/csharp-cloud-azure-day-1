import "react";

const url = "https://ingeborg-api.azurewebsites.net" ; //import.meta.env.VITE_ENDPOINT_URL; //|| "http://localhost:5168";

// ensure trailing / is removed
export const API_URL = url.replace(/\/$/, "");
