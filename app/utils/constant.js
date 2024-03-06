import config from './config';

export default function api() {
    const env = process.env.NODE_ENV || 'development';
    return config[env].serverUrl;
}

API_SERVICES ={
    LOGIN: {
        END: '/api/login',
        METHOD : 'POST'
    },
    REGISTER: {
        END :'/api/register',
        METHOD : 'POST'
    },
    LOGOUT:{
        END: '/api/logout',
        METHOD: 'GET'
    },
    GET_USER:{
        END: '/api/user',
        METHOD: 'GET'
    },
    UPDATE_USER:{
        END: '/api/user',
        METHOD: 'PUT'
    },
}