import "react";

const url = "https://joaquin-webapp.azurewebsites.net/"//import.meta.env.VITE_ENDPOINT_URL;// || "http://localhost:5168";

// ensure trailing / is removed
export const API_URL = url;//.replace(/\/$/, "");
