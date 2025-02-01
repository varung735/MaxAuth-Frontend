import config from '../env_config/config';

const base_url = config.env === 'dev' ? config.local : config.prod;
const headers = {
    'Accept': 'application/json',
    'Content-Type': 'application/json'
}

const api_requests = {
    get_request: async function(route) {
        const response = await fetch(`${base_url}/${route}`, {
            method: 'GET',
            headers: headers
        });

        let res_object;

        try {
            res_object = await response.json();
            
            if(!res_object.success) {
                throw new Error(`API: ${res_object.message}`);
            }
        } catch (error) {
            console.error(res_object.message);
        }

        return res_object;
    },
    post_request: async function(route, body) {
        const response = await fetch(`${base_url}/${route}`, {
            method: 'POST',
            headers: headers,
            body: JSON.stringify(body)
        });

        let res_object;

        try {
            res_object = await response.json();
            
            if(!res_object.success) {
                throw new Error(`API: ${res_object.message}`);
            }
        } catch (error) {
            console.error(res_object.message);
        }

        return res_object;
    },
    put_request: async function(route, body) {
        const response = await fetch(`${base_url}/${route}`, {
            method: 'PUT',
            headers: headers,
            body: JSON.stringify(body)
        });

        let res_object;

        try {
            res_object = await response.json();
            
            if(!res_object.success) {
                throw new Error(`API: ${res_object.message}`);
            }
        } catch (error) {
            console.error(res_object.message);
        }

        return res_object;
    },
    patch_request: async function(route, body) {
        const response = await fetch(`${base_url}/${route}`, {
            method: 'PATCH',
            headers: headers,
            body: JSON.stringify(body)
        });

        let res_object;

        try {
            res_object = await response.json();
            
            if(!res_object.success) {
                throw new Error(`API: ${res_object.message}`);
            }
        } catch (error) {
            console.error(res_object.message);
        }

        return res_object;
    },
    delete_request: async function(route, body) {
        const response = await fetch(`${base_url}/${route}`, {
            method: 'DELETE',
            headers: headers,
            body: JSON.stringify(body)
        });

        let res_object;

        try {
            res_object = await response.json();
            
            if(!res_object.success) {
                throw new Error(`API: ${res_object.message}`);
            }
        } catch (error) {
            console.error(res_object.message);
        }

        return res_object;
    }
}

export default api_requests;