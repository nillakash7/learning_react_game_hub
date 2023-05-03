import { AxiosRequestConfig } from "axios";
import create from "./http-service";

const dataService = (
  endPoint: string,
  requestData?: AxiosRequestConfig | null
) => {
  return create("/" + endPoint, requestData);
};

export default dataService;
