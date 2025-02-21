import "react";

const url = import.meta.env.VITE_ENDPOINT_URL; //|| "http://localhost:5168";

// ensure trailing / is removed BB
export const API_URL = url;
