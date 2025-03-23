import api_requests from "../../../api_config/config";
import routes from './routes';

export async function sendQuery(query) {
    const response = await api_requests.post_request(routes.send, query);

    return response;
}
