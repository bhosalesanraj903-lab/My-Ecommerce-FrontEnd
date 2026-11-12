import axios from "axios";

export const API_BASE_URL="http://localhost:8485"
// export const API_BASE_URL="https://diligent-solace-production.up.railway.app"


export const api = axios.create({
    baseURL: API_BASE_URL,
    headers: {
        "Content-Type": "application/json"
    }
});

// read jwt on every request so it works right after login/logout
api.interceptors.request.use((config) => {
    const jwt = localStorage.getItem("jwt");
    if (jwt) {
        config.headers.Authorization = `Bearer ${jwt}`;
    }
    return config;
});
