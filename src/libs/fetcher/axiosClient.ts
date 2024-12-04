import axios, { AxiosRequestConfig } from 'axios';

import { ObjectProps } from '@/libs/@types';

export type AxiosOptionsProps = { token?: string } & Pick<AxiosRequestConfig, 'withCredentials'>;

export type AxiosParamsProps = {
    key: string;
    value: string;
};

export type AxiosProps = {
    method: 'get' | 'post';
    url: 'movies-entries' | 'movies-posters' | 'next-api' | string;
    params?: AxiosParamsProps[];
    options?: { token?: string } & AxiosOptionsProps;
};

const IS_DEV = process.env.NODE_ENV === 'development';

const AXIOS_HEADERS = {
    'Content-Type': 'application/json',
    Accept: 'application/json',
};

export const axiosClient = async ({ method, url, params }: AxiosProps) => {
    let res: ObjectProps<string | any> = {};
    let err: ObjectProps<string | any> = {};

    let axiosUrl: string = url;
    if (url === 'movies-entries') {
        axiosUrl = `${process.env.NEXT_PUBLIC_API_URL}?apiKey=${process.env.NEXT_PUBLIC_API_KEY}`;
    }
    if (url === 'movies-posters') {
        axiosUrl = `${process.env.NEXT_PUBLIC_API_POSTER_URL}?apiKey=${process.env.NEXT_PUBLIC_API_KEY}`;
    }
    if (url === 'next-api') {
        axiosUrl = process.env?.NEXT_PUBLIC_NEXT_API_URL ?? '';
    }
    if (params && params?.length > 0) {
        params.forEach(({ key, value }: AxiosParamsProps, i: number) => {
            let divider = '&';
            if (url !== 'movies-entries' && url !== 'movies-posters' && i === 0) {
                divider = '?';
            }

            axiosUrl += `${divider}${key}=${value}`;
        });
    }

    await axios({
        method,
        url: axiosUrl,
        headers: AXIOS_HEADERS,
        // ...axiosOptions,
    })
        .then((response) => {
            res = response.data;
        })
        .catch((error) => {
            err = error;

            if (error.response) {
                // The request was made and the server responded with a status code
                // that falls out of the range of 2xx
                if (IS_DEV) console.warn(error.response.data);
                // console.log(err.response.status);
                // console.log(err.response.headers);
            } else if (error.request) {
                // The request was made but no response was received
                if (IS_DEV) console.log('No response received');
                // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
                // http.ClientRequest in node.js
                // console.log(err.request);
            } else {
                // Something happened in setting up the request that triggered an Error
                // console.log('Error', err.message);
            }
            // console.log(err.config);
        });

    return { res, err };
};

export default axiosClient;
