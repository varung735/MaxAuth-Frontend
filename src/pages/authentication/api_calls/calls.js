import api_requests from "../../../api_config/config";
import routes from "../api_routes/routes";

export async function login(email, password) {
    const response = await api_requests.post_request(routes.login, {
        email: email,
        password: password
    });

    return response;
}

export async function signup(name, email, password) {
    const response = await api_requests.post_request(routes.signup, {
        name: name,
        email: email,
        password: password
    });

    return response;
}

export async function sendEmailVerificationToken(email) {
    const response = await api_requests.post_request(routes.verifyEmailToken, {
        email: email
    });

    return response;
}

export async function verifyEmail(token, otp) {
    const response = await api_requests.get_request(`${routes.verifyEmail}?token=${token}&otp=${otp}`);

    return response;
}

export async function sendForgetPasswordToken(email) {
    const response = await api_requests.post_request(routes.resetPasswordToken, {
        email: email
    });

    return response;
}

export async function resetPassword(password, token, otp) {
    const response = await api_requests.post_request(`${routes.resetPassword}?token=${token}&otp=${otp}`, {
        password: password
    });

    return response;
}