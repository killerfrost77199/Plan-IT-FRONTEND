let serverUrl = process.env.SERVER_URL || 'http://localhost:8081';

const config = {
    development: {
      serverUrl: serverUrl,
    },
    staging: {
      serverUrl: serverUrl,
    },
    production: {
      serverUrl: serverUrl,
    }
};

export default config;