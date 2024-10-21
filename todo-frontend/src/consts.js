import "react";

const url = "https://daniel-azure-day-1.azurewebsites.net/"; //|| "http://localhost:5168";

// ensure trailing / is removed
export const API_URL = url.replace(/\/$/, "");
