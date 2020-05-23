import axios from "axios";

export async function register(user) {
    const result = await axios.post("http://localhost:5000/api/users", {
        name: user.name, email: user.email, password: user.password
    })

    return result;

};
export async function login(user) {
    const result = await axios.post("http://localhost:5000/api/auth", {
        email: user.email, password: user.password
    })

    return result;

}
