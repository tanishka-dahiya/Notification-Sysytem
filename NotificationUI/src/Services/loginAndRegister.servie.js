import axios from "axios";

export async function register(user) {
    const result = await axios.post("http://localhost:5000/api/users", {
        name: user.name, email: user.email, password: user.password
    });
    sessionStorage.setItem("token", result.data.token);

    console.log(sessionStorage.getItem("token"));
    return result;

}
