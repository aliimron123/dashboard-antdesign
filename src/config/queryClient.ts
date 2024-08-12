import { QueryClient } from "@tanstack/react-query";
import axios from "axios";
import qs from "query-string";
import {
  QueryFetchOptions,
  MutationFetchOptions,
  ApiError,
} from "../types/client.types";

export const client = axios.create({
  baseURL: process.env.REACT_APP_API_WEATHER_WEB,
  headers: {
    Accept: "application/json",
  },
});

// client.interceptors.request.use(
//   async (config) => {
//     const token = Cookies.get("token");

//     if (typeof window !== undefined) {
//       if (token && window.location.pathname !== "/auth") {
//         config.headers.Authorization = `Bearer ${token}`;
//       }
//     }

//     return config;
//   },
//   (error) => {
//     return Promise.reject(error);
//   }
// );

export async function queryFetch<T>({
  url,
  inputParams,
}: QueryFetchOptions): Promise<T> {
  let params = "";

  if (inputParams) {
    params = qs.stringify(inputParams);
  }

  return new Promise(async (resolve, reject) => {
    try {
      let fetchUrl = url;

      if (params) {
        fetchUrl += "?" + params;
      }

      const res = await client.get(fetchUrl);
      const json = await res.data;

      resolve(json);
    } catch (error: any) {
      reject((error.response?.data as ApiError) ?? error);
    }
  });
}

export async function mutationFetch<T>({
  url,
  method,
  body,
  baseURL,
}: MutationFetchOptions): Promise<T> {
  return new Promise(async (resolve, reject) => {
    try {
      const res = await client.request({
        ...(!!baseURL && { baseURL }),
        url,
        method,
        headers: {
          "Content-Type": "application/json",
        },
        data: body,
      });

      const json = await res.data;

      resolve(json);
    } catch (error: any) {
      reject((error.response?.data as ApiError) ?? error);
    }
  });
}

export async function mutationFormData<T>({
  url,
  body,
  method,
}: MutationFetchOptions): Promise<T> {
  return new Promise(async (resolve, reject) => {
    try {
      const form = new FormData();
      const keys = Object.keys(body);
      const bodyValue = Object.values(body);

      bodyValue.map((value: any, index) => {
        if (typeof value === "undefined") {
          return form.delete(keys[index]);
        }

        return form.append(keys[index], value);
      });

      if (method === "PUT") {
        form.append("_method", "PUT");
      }

      const res = await client.post(url, form);

      const json = await res.data;

      resolve(json);
    } catch (error: any) {
      reject((error.response?.data as ApiError) ?? error);
    }
  });
}

export async function queryFetchServer<T>({
  url,
  inputParams,
}: QueryFetchOptions) {
  let data!: T;
  let isError: boolean = false;
  let error: null | ApiError = null;
  let endpoint = url;
  let params = "";

  if (inputParams) {
    params = qs.stringify(inputParams);
  }

  if (params) {
    endpoint += "?" + params;
  }

  try {
    const response = await client.get(endpoint);

    const json = response.data as T;
    data = json;
  } catch (err: any) {
    console.log(err);

    data = {} as T;
    isError = true;
    error = err.response?.data ?? err;
  }

  return { data, isError, error };
}

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: false,
      refetchOnWindowFocus: false,
      staleTime: 60 * 1000,
    },
  },
});
