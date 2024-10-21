import "react";

const url = "https://espensl-app.azurewebsites.net/"; //|| "http://localhost:5168";

// ensure trailing / is removed
export const API_URL = url.replace(/\/$/, "");
