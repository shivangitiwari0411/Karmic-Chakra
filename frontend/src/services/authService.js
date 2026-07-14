import api from "./api";

export const loginUser = (email, password) => {

    return api.post("/auth/login", {
        email,
        password,
    });

};