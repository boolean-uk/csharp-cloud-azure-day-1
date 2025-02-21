import "react";

const url = import.meta.env.VITE_ENDPOINT_URL; //|| "http://localhost:5168";

// ensure trailing / is removed
let test;
if(url)
    test = url.replace(/\/$/, "");
else
    test = "";

export const API_URL = test;

