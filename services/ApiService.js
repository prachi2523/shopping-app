import axios from "axios";

const defaultConfig = {
    baseURL: process.env.REACT_APP_API_URL,
    paramsSerializer: (params) => qs.stringify(params, { arrayFormat: 'repeat' }),
};

export default class ApiService {
    static baseUrl = `https://dummyjson.com/`;


    static getConfigs = (additionalConfig = {}) => {
        const config = {
            ...defaultConfig,
            headers: { 'Content-Type': 'application/json' },
        };
        console.log("VADE", process.env.REACT_APP_API_URL)

        const accessToken = ""

        if (accessToken && accessToken !== null && additionalConfig?.isAuth) {
            config.headers = { ...config.headers, Authorization: accessToken };
        }
        return config;
    };

    static get = async (url, params) =>
        axios.get(url, this.getConfigs({ params }));

    static post = async function post(url, data, config = {}) {
        try {
            return axios.post(url, data, this.getConfigs());
        } catch (err) {
            console.log(err, "ERRE")
            return err?.message || {}
        }
    };

    static put = async (url, data) => axios.put(url, data, this.getConfigs());

    static patch = async (url, data) => axios.patch(url, data, this.getConfigs());

    static delete = async (url) => axios.delete(url, this.getConfigs());
}
