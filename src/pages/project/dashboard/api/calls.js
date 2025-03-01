import api_requests from "../../../../api_config/config";
import routes from './routes';

export async function createProject(projectName) {
    const response = await api_requests.post_request(routes.create, {
        project_name: projectName
    });

    return response;
}

export async function getProjects() {
    const response = await api_requests.get_request(routes.get);

    return response;
}

export async function addSchema(schema) {
    const response = await api_requests.post_request(routes.addSchema, schema);

    return response;
}