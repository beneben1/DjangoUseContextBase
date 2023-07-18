// A mock function to mimic making an async request for data
import axios from "axios";
import { SERVER } from "../../settings";
import { access } from "fs";


export function myLogin(user: string, pwd: string) {
    return axios.post(SERVER + 'login/', {"username":user, "password":pwd})
}


export function logoutUser() {
    console.log();
    return new Promise<{ data: any }>((resolve) => resolve({ data: false }));
}

