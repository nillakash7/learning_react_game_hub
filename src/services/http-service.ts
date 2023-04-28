import apiClient, { CanceledError } from "./api-client";

class HttpService {
  endpoint: string;

  constructor(endpoint: string) {
    this.endpoint = endpoint;
  }

  getAll<T>() {
    const contoller = new AbortController();
    const request = apiClient.get<T>(this.endpoint, {
      signal: contoller.signal,
    });

    return {
      request,
      cancel: () => {
        contoller.abort();
      },
    };
  }
}

const create = (endpoint: string) => new HttpService(endpoint);

export default create;
