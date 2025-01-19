import api_requests from "../../../api_config/config";
import routes from "../api_routes/routes";

export async function login(email, password) {
    const response = await api_requests.post_request(routes.login, {
        email: email,
        password: password
    });

    return response.user;
}

export async function signup(name, email, password) {
    const response = await api_requests.post_request(routes.signup, {
        name: name,
        email: email,
        password: password
    });

    return response.user;
}