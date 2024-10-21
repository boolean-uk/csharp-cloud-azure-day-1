import "react";

const url = "https://jacobsen-webapp.azurewebsites.net/"; //|| "http://localhost:5168";

// ensure trailing / is removed
export const API_URL = url.replace(/\/$/, "");
