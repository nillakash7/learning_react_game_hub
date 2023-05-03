import { AxiosRequestConfig } from "axios";
import apiClient from "./api-client";

class HttpService {
  endpoint: string;
  requestData?: AxiosRequestConfig | null;

  constructor(endpoint: string, requestData?: AxiosRequestConfig | null) {
    this.endpoint = endpoint;
    this.requestData = requestData;
  }

  getAll<T>() {
    const contoller = new AbortController();
    const request = apiClient.get<T>(this.endpoint, {
      signal: contoller.signal,
      ...this.requestData,
    });

    return {
      request,
      cancel: () => {
        contoller.abort();
      },
    };
  }
}

const create = (endpoint: string, requestData?: AxiosRequestConfig | null) =>
  new HttpService(endpoint, requestData);

export default create;
