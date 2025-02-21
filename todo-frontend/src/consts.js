import "react";

const url = import.meta.env.VITE_ENDPOINT_URL || "https://csharp-cloud-azure-day-1-jonehjorteland-bfhjcwgsd6bhe8ef.westus2-01.azurewebsites.net";

// ensure trailing / is removed
export const API_URL = url.replace(/\/$/, "");
