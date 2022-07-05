const getApiUrl = () => process.env.API_URL || '/';

const ENDPOINTS = {
  auth: {
    url: `${getApiUrl()}user/auth`,
    method: 'GET',
  },
};

export { ENDPOINTS, getApiUrl };
