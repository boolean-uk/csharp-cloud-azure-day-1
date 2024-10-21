import "react";

const url = "https://eyvmalwebapp.azurewebsites.net";

// ensure trailing / is removed
export const API_URL = url.replace(/\/$/, "");
